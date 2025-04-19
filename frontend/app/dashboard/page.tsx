"use client"
import { Appbar } from "@/components/Appbar";
import { DarkButton } from "@/components/buttons/DarkButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL, HOOKS_URL } from "../config";
import { LinkButton } from "@/components/buttons/LinkButton";
import { useRouter } from "next/navigation";
import { getS3Icons } from "../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/lib/features/users/userSlice";
import { selectUser } from "@/lib/features/users/userSlice";

interface Zap {
    id: string
    triggerId: string
    userId: number
    action: {
        id: string
        zapId: string
        actionId: string
        executionOrder: number
        actionType: {
            id: string
            actionType: string
        }
    }[]
    trigger: {
        id: string;
        zapId: string;
        triggerId: string;
        triggerType: {
            id: string;
            triggerType: string;
        }
    }
}


function useZaps() {
    const [loading, setLoading] = useState(true);
    const [zaps, setZaps] = useState<Zap[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/zap`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(res => {
                setZaps(res.data.zaps);
                setLoading(false)
            })
    }, []);

    return {
        loading, zaps
    }
}

export default function () {
    const { loading, zaps } = useZaps();
    const router = useRouter();

    const dispatch = useDispatch()

    const fetchUserDetails = async () =>{
        const response = await axios.get(`${BACKEND_URL}/api/v1/user`, {
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        if(response.status === 200){
            dispatch(setUser(response.data.user))
        }
    }
    useEffect(() => {
        fetchUserDetails()
    }, [])
    return <div>
        <Appbar />
        <div className="flex justify-center pt-8">
            <div className="max-w-screen-lg	 w-full">
                <div className="flex justify-between pr-8 ">
                    <div className="text-2xl font-bold">
                        My Zaps
                    </div>
                    <DarkButton onClick={() => {
                        router.push("/zap/create");
                    }}>Create</DarkButton>
                </div>
            </div>
        </div>
        {loading ? "Loading..." : <div className="flex justify-center"> <ZapTable zaps={zaps} /> </div>}
    </div>
}

function ZapTable({ zaps }: { zaps: Zap[] }) {
    const router = useRouter();
    const user = useSelector(selectUser)

    return <div className="p-8 max-w-screen-lg w-full">
        <div className="flex">
            <div className="flex-1">Name</div>
            <div className="flex-1">ID</div>
            <div className="flex-1">Created at</div>
            <div className="flex-1">Webhook URL</div>
            <div className="flex-1">Go</div>
        </div>
        {zaps.map(z => <div className="flex border-b border-t py-4">
        <div className="flex-1 flex"><img src={getS3Icons("triggers/"+z.trigger.triggerType.triggerType)} className="w-[30px] h-[30px]" /> {z.action.map(x => <img src={getS3Icons("actions/"+x.actionType.actionType)} className="w-[30px] h-[30px]" />)}</div>
            <div className="flex-1">{z.id}</div>
            <div className="flex-1">Nov 13, 2023</div>
            <div className="flex-1">{`${HOOKS_URL}/hooks/catch/${user?.id}/${z.id}`}</div>
            <div className="flex-1"><LinkButton onClick={() => {
                router.push("/zap/" + z.id)
            }}>Go</LinkButton></div>
        </div>)}
    </div>
}