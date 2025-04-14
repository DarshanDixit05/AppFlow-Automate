
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Zap
 * 
 */
export type Zap = $Result.DefaultSelection<Prisma.$ZapPayload>
/**
 * Model Trigger
 * 
 */
export type Trigger = $Result.DefaultSelection<Prisma.$TriggerPayload>
/**
 * Model TriggerType
 * 
 */
export type TriggerType = $Result.DefaultSelection<Prisma.$TriggerTypePayload>
/**
 * Model Action
 * 
 */
export type Action = $Result.DefaultSelection<Prisma.$ActionPayload>
/**
 * Model ActionType
 * 
 */
export type ActionType = $Result.DefaultSelection<Prisma.$ActionTypePayload>
/**
 * Model ZapRun
 * 
 */
export type ZapRun = $Result.DefaultSelection<Prisma.$ZapRunPayload>
/**
 * Model ZapRunOutbox
 * 
 */
export type ZapRunOutbox = $Result.DefaultSelection<Prisma.$ZapRunOutboxPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zap`: Exposes CRUD operations for the **Zap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zaps
    * const zaps = await prisma.zap.findMany()
    * ```
    */
  get zap(): Prisma.ZapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trigger`: Exposes CRUD operations for the **Trigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Triggers
    * const triggers = await prisma.trigger.findMany()
    * ```
    */
  get trigger(): Prisma.TriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.triggerType`: Exposes CRUD operations for the **TriggerType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriggerTypes
    * const triggerTypes = await prisma.triggerType.findMany()
    * ```
    */
  get triggerType(): Prisma.TriggerTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.action`: Exposes CRUD operations for the **Action** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actions
    * const actions = await prisma.action.findMany()
    * ```
    */
  get action(): Prisma.ActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actionType`: Exposes CRUD operations for the **ActionType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActionTypes
    * const actionTypes = await prisma.actionType.findMany()
    * ```
    */
  get actionType(): Prisma.ActionTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zapRun`: Exposes CRUD operations for the **ZapRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZapRuns
    * const zapRuns = await prisma.zapRun.findMany()
    * ```
    */
  get zapRun(): Prisma.ZapRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zapRunOutbox`: Exposes CRUD operations for the **ZapRunOutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZapRunOutboxes
    * const zapRunOutboxes = await prisma.zapRunOutbox.findMany()
    * ```
    */
  get zapRunOutbox(): Prisma.ZapRunOutboxDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Zap: 'Zap',
    Trigger: 'Trigger',
    TriggerType: 'TriggerType',
    Action: 'Action',
    ActionType: 'ActionType',
    ZapRun: 'ZapRun',
    ZapRunOutbox: 'ZapRunOutbox'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "zap" | "trigger" | "triggerType" | "action" | "actionType" | "zapRun" | "zapRunOutbox"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Zap: {
        payload: Prisma.$ZapPayload<ExtArgs>
        fields: Prisma.ZapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          findFirst: {
            args: Prisma.ZapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          findMany: {
            args: Prisma.ZapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[]
          }
          create: {
            args: Prisma.ZapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          createMany: {
            args: Prisma.ZapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[]
          }
          delete: {
            args: Prisma.ZapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          update: {
            args: Prisma.ZapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          deleteMany: {
            args: Prisma.ZapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[]
          }
          upsert: {
            args: Prisma.ZapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          aggregate: {
            args: Prisma.ZapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZap>
          }
          groupBy: {
            args: Prisma.ZapGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZapGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZapCountArgs<ExtArgs>
            result: $Utils.Optional<ZapCountAggregateOutputType> | number
          }
        }
      }
      Trigger: {
        payload: Prisma.$TriggerPayload<ExtArgs>
        fields: Prisma.TriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findFirst: {
            args: Prisma.TriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findMany: {
            args: Prisma.TriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          create: {
            args: Prisma.TriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          createMany: {
            args: Prisma.TriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          delete: {
            args: Prisma.TriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          update: {
            args: Prisma.TriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          deleteMany: {
            args: Prisma.TriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriggerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          upsert: {
            args: Prisma.TriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          aggregate: {
            args: Prisma.TriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrigger>
          }
          groupBy: {
            args: Prisma.TriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerCountAggregateOutputType> | number
          }
        }
      }
      TriggerType: {
        payload: Prisma.$TriggerTypePayload<ExtArgs>
        fields: Prisma.TriggerTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTypePayload>
          }
          findFirst: {
            args: Prisma.TriggerTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTypePayload>
          }
          findMany: {
            args: Prisma.TriggerTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTypePayload>[]
          }
          create: {
            args: Prisma.TriggerTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTypePayload>
          }
          createMany: {
            args: Prisma.TriggerTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTypePayload>[]
          }
          delete: {
            args: Prisma.TriggerTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTypePayload>
          }
          update: {
            args: Prisma.TriggerTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTypePayload>
          }
          deleteMany: {
            args: Prisma.TriggerTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriggerTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTypePayload>[]
          }
          upsert: {
            args: Prisma.TriggerTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTypePayload>
          }
          aggregate: {
            args: Prisma.TriggerTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTriggerType>
          }
          groupBy: {
            args: Prisma.TriggerTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerTypeCountAggregateOutputType> | number
          }
        }
      }
      Action: {
        payload: Prisma.$ActionPayload<ExtArgs>
        fields: Prisma.ActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findFirst: {
            args: Prisma.ActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findMany: {
            args: Prisma.ActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          create: {
            args: Prisma.ActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          createMany: {
            args: Prisma.ActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          delete: {
            args: Prisma.ActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          update: {
            args: Prisma.ActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          deleteMany: {
            args: Prisma.ActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          upsert: {
            args: Prisma.ActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          aggregate: {
            args: Prisma.ActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAction>
          }
          groupBy: {
            args: Prisma.ActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionCountArgs<ExtArgs>
            result: $Utils.Optional<ActionCountAggregateOutputType> | number
          }
        }
      }
      ActionType: {
        payload: Prisma.$ActionTypePayload<ExtArgs>
        fields: Prisma.ActionTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionTypePayload>
          }
          findFirst: {
            args: Prisma.ActionTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionTypePayload>
          }
          findMany: {
            args: Prisma.ActionTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionTypePayload>[]
          }
          create: {
            args: Prisma.ActionTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionTypePayload>
          }
          createMany: {
            args: Prisma.ActionTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionTypePayload>[]
          }
          delete: {
            args: Prisma.ActionTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionTypePayload>
          }
          update: {
            args: Prisma.ActionTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionTypePayload>
          }
          deleteMany: {
            args: Prisma.ActionTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionTypePayload>[]
          }
          upsert: {
            args: Prisma.ActionTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionTypePayload>
          }
          aggregate: {
            args: Prisma.ActionTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActionType>
          }
          groupBy: {
            args: Prisma.ActionTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ActionTypeCountAggregateOutputType> | number
          }
        }
      }
      ZapRun: {
        payload: Prisma.$ZapRunPayload<ExtArgs>
        fields: Prisma.ZapRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZapRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZapRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>
          }
          findFirst: {
            args: Prisma.ZapRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZapRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>
          }
          findMany: {
            args: Prisma.ZapRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>[]
          }
          create: {
            args: Prisma.ZapRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>
          }
          createMany: {
            args: Prisma.ZapRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZapRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>[]
          }
          delete: {
            args: Prisma.ZapRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>
          }
          update: {
            args: Prisma.ZapRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>
          }
          deleteMany: {
            args: Prisma.ZapRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZapRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZapRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>[]
          }
          upsert: {
            args: Prisma.ZapRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>
          }
          aggregate: {
            args: Prisma.ZapRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZapRun>
          }
          groupBy: {
            args: Prisma.ZapRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZapRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZapRunCountArgs<ExtArgs>
            result: $Utils.Optional<ZapRunCountAggregateOutputType> | number
          }
        }
      }
      ZapRunOutbox: {
        payload: Prisma.$ZapRunOutboxPayload<ExtArgs>
        fields: Prisma.ZapRunOutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZapRunOutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZapRunOutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>
          }
          findFirst: {
            args: Prisma.ZapRunOutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZapRunOutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>
          }
          findMany: {
            args: Prisma.ZapRunOutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>[]
          }
          create: {
            args: Prisma.ZapRunOutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>
          }
          createMany: {
            args: Prisma.ZapRunOutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZapRunOutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>[]
          }
          delete: {
            args: Prisma.ZapRunOutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>
          }
          update: {
            args: Prisma.ZapRunOutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>
          }
          deleteMany: {
            args: Prisma.ZapRunOutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZapRunOutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZapRunOutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>[]
          }
          upsert: {
            args: Prisma.ZapRunOutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>
          }
          aggregate: {
            args: Prisma.ZapRunOutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZapRunOutbox>
          }
          groupBy: {
            args: Prisma.ZapRunOutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZapRunOutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZapRunOutboxCountArgs<ExtArgs>
            result: $Utils.Optional<ZapRunOutboxCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    zap?: ZapOmit
    trigger?: TriggerOmit
    triggerType?: TriggerTypeOmit
    action?: ActionOmit
    actionType?: ActionTypeOmit
    zapRun?: ZapRunOmit
    zapRunOutbox?: ZapRunOutboxOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ZapCountOutputType
   */

  export type ZapCountOutputType = {
    action: number
    zapRuns: number
  }

  export type ZapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ZapCountOutputTypeCountActionArgs
    zapRuns?: boolean | ZapCountOutputTypeCountZapRunsArgs
  }

  // Custom InputTypes
  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapCountOutputType
     */
    select?: ZapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeCountActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }

  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeCountZapRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapRunWhereInput
  }


  /**
   * Count Type TriggerTypeCountOutputType
   */

  export type TriggerTypeCountOutputType = {
    triggers: number
  }

  export type TriggerTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    triggers?: boolean | TriggerTypeCountOutputTypeCountTriggersArgs
  }

  // Custom InputTypes
  /**
   * TriggerTypeCountOutputType without action
   */
  export type TriggerTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerTypeCountOutputType
     */
    select?: TriggerTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TriggerTypeCountOutputType without action
   */
  export type TriggerTypeCountOutputTypeCountTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
  }


  /**
   * Count Type ActionTypeCountOutputType
   */

  export type ActionTypeCountOutputType = {
    action: number
  }

  export type ActionTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionTypeCountOutputTypeCountActionArgs
  }

  // Custom InputTypes
  /**
   * ActionTypeCountOutputType without action
   */
  export type ActionTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionTypeCountOutputType
     */
    select?: ActionTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActionTypeCountOutputType without action
   */
  export type ActionTypeCountOutputTypeCountActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Zap
   */

  export type AggregateZap = {
    _count: ZapCountAggregateOutputType | null
    _min: ZapMinAggregateOutputType | null
    _max: ZapMaxAggregateOutputType | null
  }

  export type ZapMinAggregateOutputType = {
    id: string | null
    triggerId: string | null
  }

  export type ZapMaxAggregateOutputType = {
    id: string | null
    triggerId: string | null
  }

  export type ZapCountAggregateOutputType = {
    id: number
    triggerId: number
    _all: number
  }


  export type ZapMinAggregateInputType = {
    id?: true
    triggerId?: true
  }

  export type ZapMaxAggregateInputType = {
    id?: true
    triggerId?: true
  }

  export type ZapCountAggregateInputType = {
    id?: true
    triggerId?: true
    _all?: true
  }

  export type ZapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zap to aggregate.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Zaps
    **/
    _count?: true | ZapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZapMaxAggregateInputType
  }

  export type GetZapAggregateType<T extends ZapAggregateArgs> = {
        [P in keyof T & keyof AggregateZap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZap[P]>
      : GetScalarType<T[P], AggregateZap[P]>
  }




  export type ZapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapWhereInput
    orderBy?: ZapOrderByWithAggregationInput | ZapOrderByWithAggregationInput[]
    by: ZapScalarFieldEnum[] | ZapScalarFieldEnum
    having?: ZapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZapCountAggregateInputType | true
    _min?: ZapMinAggregateInputType
    _max?: ZapMaxAggregateInputType
  }

  export type ZapGroupByOutputType = {
    id: string
    triggerId: string | null
    _count: ZapCountAggregateOutputType | null
    _min: ZapMinAggregateOutputType | null
    _max: ZapMaxAggregateOutputType | null
  }

  type GetZapGroupByPayload<T extends ZapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapGroupByOutputType[P]>
            : GetScalarType<T[P], ZapGroupByOutputType[P]>
        }
      >
    >


  export type ZapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
    trigger?: boolean | Zap$triggerArgs<ExtArgs>
    action?: boolean | Zap$actionArgs<ExtArgs>
    zapRuns?: boolean | Zap$zapRunsArgs<ExtArgs>
    _count?: boolean | ZapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zap"]>

  export type ZapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
  }, ExtArgs["result"]["zap"]>

  export type ZapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
  }, ExtArgs["result"]["zap"]>

  export type ZapSelectScalar = {
    id?: boolean
    triggerId?: boolean
  }

  export type ZapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "triggerId", ExtArgs["result"]["zap"]>
  export type ZapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | Zap$triggerArgs<ExtArgs>
    action?: boolean | Zap$actionArgs<ExtArgs>
    zapRuns?: boolean | Zap$zapRunsArgs<ExtArgs>
    _count?: boolean | ZapCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ZapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ZapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ZapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Zap"
    objects: {
      trigger: Prisma.$TriggerPayload<ExtArgs> | null
      action: Prisma.$ActionPayload<ExtArgs>[]
      zapRuns: Prisma.$ZapRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      triggerId: string | null
    }, ExtArgs["result"]["zap"]>
    composites: {}
  }

  type ZapGetPayload<S extends boolean | null | undefined | ZapDefaultArgs> = $Result.GetResult<Prisma.$ZapPayload, S>

  type ZapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZapCountAggregateInputType | true
    }

  export interface ZapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Zap'], meta: { name: 'Zap' } }
    /**
     * Find zero or one Zap that matches the filter.
     * @param {ZapFindUniqueArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapFindUniqueArgs>(args: SelectSubset<T, ZapFindUniqueArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Zap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapFindUniqueOrThrowArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapFindUniqueOrThrowArgs>(args: SelectSubset<T, ZapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindFirstArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapFindFirstArgs>(args?: SelectSubset<T, ZapFindFirstArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindFirstOrThrowArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapFindFirstOrThrowArgs>(args?: SelectSubset<T, ZapFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zaps
     * const zaps = await prisma.zap.findMany()
     * 
     * // Get first 10 Zaps
     * const zaps = await prisma.zap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zapWithIdOnly = await prisma.zap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZapFindManyArgs>(args?: SelectSubset<T, ZapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Zap.
     * @param {ZapCreateArgs} args - Arguments to create a Zap.
     * @example
     * // Create one Zap
     * const Zap = await prisma.zap.create({
     *   data: {
     *     // ... data to create a Zap
     *   }
     * })
     * 
     */
    create<T extends ZapCreateArgs>(args: SelectSubset<T, ZapCreateArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Zaps.
     * @param {ZapCreateManyArgs} args - Arguments to create many Zaps.
     * @example
     * // Create many Zaps
     * const zap = await prisma.zap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZapCreateManyArgs>(args?: SelectSubset<T, ZapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Zaps and returns the data saved in the database.
     * @param {ZapCreateManyAndReturnArgs} args - Arguments to create many Zaps.
     * @example
     * // Create many Zaps
     * const zap = await prisma.zap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Zaps and only return the `id`
     * const zapWithIdOnly = await prisma.zap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZapCreateManyAndReturnArgs>(args?: SelectSubset<T, ZapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Zap.
     * @param {ZapDeleteArgs} args - Arguments to delete one Zap.
     * @example
     * // Delete one Zap
     * const Zap = await prisma.zap.delete({
     *   where: {
     *     // ... filter to delete one Zap
     *   }
     * })
     * 
     */
    delete<T extends ZapDeleteArgs>(args: SelectSubset<T, ZapDeleteArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Zap.
     * @param {ZapUpdateArgs} args - Arguments to update one Zap.
     * @example
     * // Update one Zap
     * const zap = await prisma.zap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZapUpdateArgs>(args: SelectSubset<T, ZapUpdateArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Zaps.
     * @param {ZapDeleteManyArgs} args - Arguments to filter Zaps to delete.
     * @example
     * // Delete a few Zaps
     * const { count } = await prisma.zap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZapDeleteManyArgs>(args?: SelectSubset<T, ZapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zaps
     * const zap = await prisma.zap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZapUpdateManyArgs>(args: SelectSubset<T, ZapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zaps and returns the data updated in the database.
     * @param {ZapUpdateManyAndReturnArgs} args - Arguments to update many Zaps.
     * @example
     * // Update many Zaps
     * const zap = await prisma.zap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Zaps and only return the `id`
     * const zapWithIdOnly = await prisma.zap.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ZapUpdateManyAndReturnArgs>(args: SelectSubset<T, ZapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Zap.
     * @param {ZapUpsertArgs} args - Arguments to update or create a Zap.
     * @example
     * // Update or create a Zap
     * const zap = await prisma.zap.upsert({
     *   create: {
     *     // ... data to create a Zap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zap we want to update
     *   }
     * })
     */
    upsert<T extends ZapUpsertArgs>(args: SelectSubset<T, ZapUpsertArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Zaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapCountArgs} args - Arguments to filter Zaps to count.
     * @example
     * // Count the number of Zaps
     * const count = await prisma.zap.count({
     *   where: {
     *     // ... the filter for the Zaps we want to count
     *   }
     * })
    **/
    count<T extends ZapCountArgs>(
      args?: Subset<T, ZapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZapAggregateArgs>(args: Subset<T, ZapAggregateArgs>): Prisma.PrismaPromise<GetZapAggregateType<T>>

    /**
     * Group by Zap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapGroupByArgs['orderBy'] }
        : { orderBy?: ZapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Zap model
   */
  readonly fields: ZapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trigger<T extends Zap$triggerArgs<ExtArgs> = {}>(args?: Subset<T, Zap$triggerArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    action<T extends Zap$actionArgs<ExtArgs> = {}>(args?: Subset<T, Zap$actionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    zapRuns<T extends Zap$zapRunsArgs<ExtArgs> = {}>(args?: Subset<T, Zap$zapRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Zap model
   */
  interface ZapFieldRefs {
    readonly id: FieldRef<"Zap", 'String'>
    readonly triggerId: FieldRef<"Zap", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Zap findUnique
   */
  export type ZapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap findUniqueOrThrow
   */
  export type ZapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap findFirst
   */
  export type ZapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zaps.
     */
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap findFirstOrThrow
   */
  export type ZapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zaps.
     */
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap findMany
   */
  export type ZapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zaps to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap create
   */
  export type ZapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The data needed to create a Zap.
     */
    data?: XOR<ZapCreateInput, ZapUncheckedCreateInput>
  }

  /**
   * Zap createMany
   */
  export type ZapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Zaps.
     */
    data: ZapCreateManyInput | ZapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zap createManyAndReturn
   */
  export type ZapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * The data used to create many Zaps.
     */
    data: ZapCreateManyInput | ZapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zap update
   */
  export type ZapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The data needed to update a Zap.
     */
    data: XOR<ZapUpdateInput, ZapUncheckedUpdateInput>
    /**
     * Choose, which Zap to update.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap updateMany
   */
  export type ZapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Zaps.
     */
    data: XOR<ZapUpdateManyMutationInput, ZapUncheckedUpdateManyInput>
    /**
     * Filter which Zaps to update
     */
    where?: ZapWhereInput
    /**
     * Limit how many Zaps to update.
     */
    limit?: number
  }

  /**
   * Zap updateManyAndReturn
   */
  export type ZapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * The data used to update Zaps.
     */
    data: XOR<ZapUpdateManyMutationInput, ZapUncheckedUpdateManyInput>
    /**
     * Filter which Zaps to update
     */
    where?: ZapWhereInput
    /**
     * Limit how many Zaps to update.
     */
    limit?: number
  }

  /**
   * Zap upsert
   */
  export type ZapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The filter to search for the Zap to update in case it exists.
     */
    where: ZapWhereUniqueInput
    /**
     * In case the Zap found by the `where` argument doesn't exist, create a new Zap with this data.
     */
    create: XOR<ZapCreateInput, ZapUncheckedCreateInput>
    /**
     * In case the Zap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZapUpdateInput, ZapUncheckedUpdateInput>
  }

  /**
   * Zap delete
   */
  export type ZapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter which Zap to delete.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap deleteMany
   */
  export type ZapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zaps to delete
     */
    where?: ZapWhereInput
    /**
     * Limit how many Zaps to delete.
     */
    limit?: number
  }

  /**
   * Zap.trigger
   */
  export type Zap$triggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
  }

  /**
   * Zap.action
   */
  export type Zap$actionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Zap.zapRuns
   */
  export type Zap$zapRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    where?: ZapRunWhereInput
    orderBy?: ZapRunOrderByWithRelationInput | ZapRunOrderByWithRelationInput[]
    cursor?: ZapRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[]
  }

  /**
   * Zap without action
   */
  export type ZapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
  }


  /**
   * Model Trigger
   */

  export type AggregateTrigger = {
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  export type TriggerMinAggregateOutputType = {
    id: string | null
    zapId: string | null
    triggerId: string | null
  }

  export type TriggerMaxAggregateOutputType = {
    id: string | null
    zapId: string | null
    triggerId: string | null
  }

  export type TriggerCountAggregateOutputType = {
    id: number
    zapId: number
    triggerId: number
    _all: number
  }


  export type TriggerMinAggregateInputType = {
    id?: true
    zapId?: true
    triggerId?: true
  }

  export type TriggerMaxAggregateInputType = {
    id?: true
    zapId?: true
    triggerId?: true
  }

  export type TriggerCountAggregateInputType = {
    id?: true
    zapId?: true
    triggerId?: true
    _all?: true
  }

  export type TriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trigger to aggregate.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Triggers
    **/
    _count?: true | TriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerMaxAggregateInputType
  }

  export type GetTriggerAggregateType<T extends TriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrigger[P]>
      : GetScalarType<T[P], AggregateTrigger[P]>
  }




  export type TriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithAggregationInput | TriggerOrderByWithAggregationInput[]
    by: TriggerScalarFieldEnum[] | TriggerScalarFieldEnum
    having?: TriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerCountAggregateInputType | true
    _min?: TriggerMinAggregateInputType
    _max?: TriggerMaxAggregateInputType
  }

  export type TriggerGroupByOutputType = {
    id: string
    zapId: string
    triggerId: string
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  type GetTriggerGroupByPayload<T extends TriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerGroupByOutputType[P]>
        }
      >
    >


  export type TriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    triggerId?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    triggerType?: boolean | TriggerTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    triggerId?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    triggerType?: boolean | TriggerTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    triggerId?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    triggerType?: boolean | TriggerTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectScalar = {
    id?: boolean
    zapId?: boolean
    triggerId?: boolean
  }

  export type TriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zapId" | "triggerId", ExtArgs["result"]["trigger"]>
  export type TriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    triggerType?: boolean | TriggerTypeDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    triggerType?: boolean | TriggerTypeDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    triggerType?: boolean | TriggerTypeDefaultArgs<ExtArgs>
  }

  export type $TriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trigger"
    objects: {
      zap: Prisma.$ZapPayload<ExtArgs>
      triggerType: Prisma.$TriggerTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zapId: string
      triggerId: string
    }, ExtArgs["result"]["trigger"]>
    composites: {}
  }

  type TriggerGetPayload<S extends boolean | null | undefined | TriggerDefaultArgs> = $Result.GetResult<Prisma.$TriggerPayload, S>

  type TriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerCountAggregateInputType | true
    }

  export interface TriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trigger'], meta: { name: 'Trigger' } }
    /**
     * Find zero or one Trigger that matches the filter.
     * @param {TriggerFindUniqueArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerFindUniqueArgs>(args: SelectSubset<T, TriggerFindUniqueArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerFindUniqueOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerFindFirstArgs>(args?: SelectSubset<T, TriggerFindFirstArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Triggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triggers
     * const triggers = await prisma.trigger.findMany()
     * 
     * // Get first 10 Triggers
     * const triggers = await prisma.trigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerWithIdOnly = await prisma.trigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerFindManyArgs>(args?: SelectSubset<T, TriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trigger.
     * @param {TriggerCreateArgs} args - Arguments to create a Trigger.
     * @example
     * // Create one Trigger
     * const Trigger = await prisma.trigger.create({
     *   data: {
     *     // ... data to create a Trigger
     *   }
     * })
     * 
     */
    create<T extends TriggerCreateArgs>(args: SelectSubset<T, TriggerCreateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Triggers.
     * @param {TriggerCreateManyArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerCreateManyArgs>(args?: SelectSubset<T, TriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Triggers and returns the data saved in the database.
     * @param {TriggerCreateManyAndReturnArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trigger.
     * @param {TriggerDeleteArgs} args - Arguments to delete one Trigger.
     * @example
     * // Delete one Trigger
     * const Trigger = await prisma.trigger.delete({
     *   where: {
     *     // ... filter to delete one Trigger
     *   }
     * })
     * 
     */
    delete<T extends TriggerDeleteArgs>(args: SelectSubset<T, TriggerDeleteArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trigger.
     * @param {TriggerUpdateArgs} args - Arguments to update one Trigger.
     * @example
     * // Update one Trigger
     * const trigger = await prisma.trigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerUpdateArgs>(args: SelectSubset<T, TriggerUpdateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Triggers.
     * @param {TriggerDeleteManyArgs} args - Arguments to filter Triggers to delete.
     * @example
     * // Delete a few Triggers
     * const { count } = await prisma.trigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerDeleteManyArgs>(args?: SelectSubset<T, TriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerUpdateManyArgs>(args: SelectSubset<T, TriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers and returns the data updated in the database.
     * @param {TriggerUpdateManyAndReturnArgs} args - Arguments to update many Triggers.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TriggerUpdateManyAndReturnArgs>(args: SelectSubset<T, TriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trigger.
     * @param {TriggerUpsertArgs} args - Arguments to update or create a Trigger.
     * @example
     * // Update or create a Trigger
     * const trigger = await prisma.trigger.upsert({
     *   create: {
     *     // ... data to create a Trigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trigger we want to update
     *   }
     * })
     */
    upsert<T extends TriggerUpsertArgs>(args: SelectSubset<T, TriggerUpsertArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerCountArgs} args - Arguments to filter Triggers to count.
     * @example
     * // Count the number of Triggers
     * const count = await prisma.trigger.count({
     *   where: {
     *     // ... the filter for the Triggers we want to count
     *   }
     * })
    **/
    count<T extends TriggerCountArgs>(
      args?: Subset<T, TriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TriggerAggregateArgs>(args: Subset<T, TriggerAggregateArgs>): Prisma.PrismaPromise<GetTriggerAggregateType<T>>

    /**
     * Group by Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerGroupByArgs['orderBy'] }
        : { orderBy?: TriggerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trigger model
   */
  readonly fields: TriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    triggerType<T extends TriggerTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TriggerTypeDefaultArgs<ExtArgs>>): Prisma__TriggerTypeClient<$Result.GetResult<Prisma.$TriggerTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trigger model
   */
  interface TriggerFieldRefs {
    readonly id: FieldRef<"Trigger", 'String'>
    readonly zapId: FieldRef<"Trigger", 'String'>
    readonly triggerId: FieldRef<"Trigger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trigger findUnique
   */
  export type TriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findUniqueOrThrow
   */
  export type TriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findFirst
   */
  export type TriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findFirstOrThrow
   */
  export type TriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findMany
   */
  export type TriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Triggers to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger create
   */
  export type TriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a Trigger.
     */
    data: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
  }

  /**
   * Trigger createMany
   */
  export type TriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trigger createManyAndReturn
   */
  export type TriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger update
   */
  export type TriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a Trigger.
     */
    data: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
    /**
     * Choose, which Trigger to update.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger updateMany
   */
  export type TriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
  }

  /**
   * Trigger updateManyAndReturn
   */
  export type TriggerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger upsert
   */
  export type TriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the Trigger to update in case it exists.
     */
    where: TriggerWhereUniqueInput
    /**
     * In case the Trigger found by the `where` argument doesn't exist, create a new Trigger with this data.
     */
    create: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
    /**
     * In case the Trigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
  }

  /**
   * Trigger delete
   */
  export type TriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter which Trigger to delete.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger deleteMany
   */
  export type TriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Triggers to delete
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to delete.
     */
    limit?: number
  }

  /**
   * Trigger without action
   */
  export type TriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
  }


  /**
   * Model TriggerType
   */

  export type AggregateTriggerType = {
    _count: TriggerTypeCountAggregateOutputType | null
    _min: TriggerTypeMinAggregateOutputType | null
    _max: TriggerTypeMaxAggregateOutputType | null
  }

  export type TriggerTypeMinAggregateOutputType = {
    id: string | null
    triggerType: string | null
  }

  export type TriggerTypeMaxAggregateOutputType = {
    id: string | null
    triggerType: string | null
  }

  export type TriggerTypeCountAggregateOutputType = {
    id: number
    triggerType: number
    _all: number
  }


  export type TriggerTypeMinAggregateInputType = {
    id?: true
    triggerType?: true
  }

  export type TriggerTypeMaxAggregateInputType = {
    id?: true
    triggerType?: true
  }

  export type TriggerTypeCountAggregateInputType = {
    id?: true
    triggerType?: true
    _all?: true
  }

  export type TriggerTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TriggerType to aggregate.
     */
    where?: TriggerTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerTypes to fetch.
     */
    orderBy?: TriggerTypeOrderByWithRelationInput | TriggerTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriggerTypes
    **/
    _count?: true | TriggerTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerTypeMaxAggregateInputType
  }

  export type GetTriggerTypeAggregateType<T extends TriggerTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTriggerType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriggerType[P]>
      : GetScalarType<T[P], AggregateTriggerType[P]>
  }




  export type TriggerTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerTypeWhereInput
    orderBy?: TriggerTypeOrderByWithAggregationInput | TriggerTypeOrderByWithAggregationInput[]
    by: TriggerTypeScalarFieldEnum[] | TriggerTypeScalarFieldEnum
    having?: TriggerTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerTypeCountAggregateInputType | true
    _min?: TriggerTypeMinAggregateInputType
    _max?: TriggerTypeMaxAggregateInputType
  }

  export type TriggerTypeGroupByOutputType = {
    id: string
    triggerType: string
    _count: TriggerTypeCountAggregateOutputType | null
    _min: TriggerTypeMinAggregateOutputType | null
    _max: TriggerTypeMaxAggregateOutputType | null
  }

  type GetTriggerTypeGroupByPayload<T extends TriggerTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerTypeGroupByOutputType[P]>
        }
      >
    >


  export type TriggerTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerType?: boolean
    triggers?: boolean | TriggerType$triggersArgs<ExtArgs>
    _count?: boolean | TriggerTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triggerType"]>

  export type TriggerTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerType?: boolean
  }, ExtArgs["result"]["triggerType"]>

  export type TriggerTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerType?: boolean
  }, ExtArgs["result"]["triggerType"]>

  export type TriggerTypeSelectScalar = {
    id?: boolean
    triggerType?: boolean
  }

  export type TriggerTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "triggerType", ExtArgs["result"]["triggerType"]>
  export type TriggerTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    triggers?: boolean | TriggerType$triggersArgs<ExtArgs>
    _count?: boolean | TriggerTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TriggerTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TriggerTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TriggerTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TriggerType"
    objects: {
      triggers: Prisma.$TriggerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      triggerType: string
    }, ExtArgs["result"]["triggerType"]>
    composites: {}
  }

  type TriggerTypeGetPayload<S extends boolean | null | undefined | TriggerTypeDefaultArgs> = $Result.GetResult<Prisma.$TriggerTypePayload, S>

  type TriggerTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerTypeCountAggregateInputType | true
    }

  export interface TriggerTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TriggerType'], meta: { name: 'TriggerType' } }
    /**
     * Find zero or one TriggerType that matches the filter.
     * @param {TriggerTypeFindUniqueArgs} args - Arguments to find a TriggerType
     * @example
     * // Get one TriggerType
     * const triggerType = await prisma.triggerType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerTypeFindUniqueArgs>(args: SelectSubset<T, TriggerTypeFindUniqueArgs<ExtArgs>>): Prisma__TriggerTypeClient<$Result.GetResult<Prisma.$TriggerTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TriggerType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerTypeFindUniqueOrThrowArgs} args - Arguments to find a TriggerType
     * @example
     * // Get one TriggerType
     * const triggerType = await prisma.triggerType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerTypeClient<$Result.GetResult<Prisma.$TriggerTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TriggerType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerTypeFindFirstArgs} args - Arguments to find a TriggerType
     * @example
     * // Get one TriggerType
     * const triggerType = await prisma.triggerType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerTypeFindFirstArgs>(args?: SelectSubset<T, TriggerTypeFindFirstArgs<ExtArgs>>): Prisma__TriggerTypeClient<$Result.GetResult<Prisma.$TriggerTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TriggerType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerTypeFindFirstOrThrowArgs} args - Arguments to find a TriggerType
     * @example
     * // Get one TriggerType
     * const triggerType = await prisma.triggerType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerTypeClient<$Result.GetResult<Prisma.$TriggerTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TriggerTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriggerTypes
     * const triggerTypes = await prisma.triggerType.findMany()
     * 
     * // Get first 10 TriggerTypes
     * const triggerTypes = await prisma.triggerType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerTypeWithIdOnly = await prisma.triggerType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerTypeFindManyArgs>(args?: SelectSubset<T, TriggerTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TriggerType.
     * @param {TriggerTypeCreateArgs} args - Arguments to create a TriggerType.
     * @example
     * // Create one TriggerType
     * const TriggerType = await prisma.triggerType.create({
     *   data: {
     *     // ... data to create a TriggerType
     *   }
     * })
     * 
     */
    create<T extends TriggerTypeCreateArgs>(args: SelectSubset<T, TriggerTypeCreateArgs<ExtArgs>>): Prisma__TriggerTypeClient<$Result.GetResult<Prisma.$TriggerTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TriggerTypes.
     * @param {TriggerTypeCreateManyArgs} args - Arguments to create many TriggerTypes.
     * @example
     * // Create many TriggerTypes
     * const triggerType = await prisma.triggerType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerTypeCreateManyArgs>(args?: SelectSubset<T, TriggerTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TriggerTypes and returns the data saved in the database.
     * @param {TriggerTypeCreateManyAndReturnArgs} args - Arguments to create many TriggerTypes.
     * @example
     * // Create many TriggerTypes
     * const triggerType = await prisma.triggerType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TriggerTypes and only return the `id`
     * const triggerTypeWithIdOnly = await prisma.triggerType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TriggerType.
     * @param {TriggerTypeDeleteArgs} args - Arguments to delete one TriggerType.
     * @example
     * // Delete one TriggerType
     * const TriggerType = await prisma.triggerType.delete({
     *   where: {
     *     // ... filter to delete one TriggerType
     *   }
     * })
     * 
     */
    delete<T extends TriggerTypeDeleteArgs>(args: SelectSubset<T, TriggerTypeDeleteArgs<ExtArgs>>): Prisma__TriggerTypeClient<$Result.GetResult<Prisma.$TriggerTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TriggerType.
     * @param {TriggerTypeUpdateArgs} args - Arguments to update one TriggerType.
     * @example
     * // Update one TriggerType
     * const triggerType = await prisma.triggerType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerTypeUpdateArgs>(args: SelectSubset<T, TriggerTypeUpdateArgs<ExtArgs>>): Prisma__TriggerTypeClient<$Result.GetResult<Prisma.$TriggerTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TriggerTypes.
     * @param {TriggerTypeDeleteManyArgs} args - Arguments to filter TriggerTypes to delete.
     * @example
     * // Delete a few TriggerTypes
     * const { count } = await prisma.triggerType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerTypeDeleteManyArgs>(args?: SelectSubset<T, TriggerTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriggerTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriggerTypes
     * const triggerType = await prisma.triggerType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerTypeUpdateManyArgs>(args: SelectSubset<T, TriggerTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriggerTypes and returns the data updated in the database.
     * @param {TriggerTypeUpdateManyAndReturnArgs} args - Arguments to update many TriggerTypes.
     * @example
     * // Update many TriggerTypes
     * const triggerType = await prisma.triggerType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TriggerTypes and only return the `id`
     * const triggerTypeWithIdOnly = await prisma.triggerType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TriggerTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TriggerTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TriggerType.
     * @param {TriggerTypeUpsertArgs} args - Arguments to update or create a TriggerType.
     * @example
     * // Update or create a TriggerType
     * const triggerType = await prisma.triggerType.upsert({
     *   create: {
     *     // ... data to create a TriggerType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriggerType we want to update
     *   }
     * })
     */
    upsert<T extends TriggerTypeUpsertArgs>(args: SelectSubset<T, TriggerTypeUpsertArgs<ExtArgs>>): Prisma__TriggerTypeClient<$Result.GetResult<Prisma.$TriggerTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TriggerTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerTypeCountArgs} args - Arguments to filter TriggerTypes to count.
     * @example
     * // Count the number of TriggerTypes
     * const count = await prisma.triggerType.count({
     *   where: {
     *     // ... the filter for the TriggerTypes we want to count
     *   }
     * })
    **/
    count<T extends TriggerTypeCountArgs>(
      args?: Subset<T, TriggerTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriggerType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TriggerTypeAggregateArgs>(args: Subset<T, TriggerTypeAggregateArgs>): Prisma.PrismaPromise<GetTriggerTypeAggregateType<T>>

    /**
     * Group by TriggerType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TriggerTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerTypeGroupByArgs['orderBy'] }
        : { orderBy?: TriggerTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TriggerTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TriggerType model
   */
  readonly fields: TriggerTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TriggerType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    triggers<T extends TriggerType$triggersArgs<ExtArgs> = {}>(args?: Subset<T, TriggerType$triggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TriggerType model
   */
  interface TriggerTypeFieldRefs {
    readonly id: FieldRef<"TriggerType", 'String'>
    readonly triggerType: FieldRef<"TriggerType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TriggerType findUnique
   */
  export type TriggerTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerType
     */
    select?: TriggerTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerType
     */
    omit?: TriggerTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTypeInclude<ExtArgs> | null
    /**
     * Filter, which TriggerType to fetch.
     */
    where: TriggerTypeWhereUniqueInput
  }

  /**
   * TriggerType findUniqueOrThrow
   */
  export type TriggerTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerType
     */
    select?: TriggerTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerType
     */
    omit?: TriggerTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTypeInclude<ExtArgs> | null
    /**
     * Filter, which TriggerType to fetch.
     */
    where: TriggerTypeWhereUniqueInput
  }

  /**
   * TriggerType findFirst
   */
  export type TriggerTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerType
     */
    select?: TriggerTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerType
     */
    omit?: TriggerTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTypeInclude<ExtArgs> | null
    /**
     * Filter, which TriggerType to fetch.
     */
    where?: TriggerTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerTypes to fetch.
     */
    orderBy?: TriggerTypeOrderByWithRelationInput | TriggerTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriggerTypes.
     */
    cursor?: TriggerTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriggerTypes.
     */
    distinct?: TriggerTypeScalarFieldEnum | TriggerTypeScalarFieldEnum[]
  }

  /**
   * TriggerType findFirstOrThrow
   */
  export type TriggerTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerType
     */
    select?: TriggerTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerType
     */
    omit?: TriggerTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTypeInclude<ExtArgs> | null
    /**
     * Filter, which TriggerType to fetch.
     */
    where?: TriggerTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerTypes to fetch.
     */
    orderBy?: TriggerTypeOrderByWithRelationInput | TriggerTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriggerTypes.
     */
    cursor?: TriggerTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriggerTypes.
     */
    distinct?: TriggerTypeScalarFieldEnum | TriggerTypeScalarFieldEnum[]
  }

  /**
   * TriggerType findMany
   */
  export type TriggerTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerType
     */
    select?: TriggerTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerType
     */
    omit?: TriggerTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTypeInclude<ExtArgs> | null
    /**
     * Filter, which TriggerTypes to fetch.
     */
    where?: TriggerTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerTypes to fetch.
     */
    orderBy?: TriggerTypeOrderByWithRelationInput | TriggerTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriggerTypes.
     */
    cursor?: TriggerTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerTypes.
     */
    skip?: number
    distinct?: TriggerTypeScalarFieldEnum | TriggerTypeScalarFieldEnum[]
  }

  /**
   * TriggerType create
   */
  export type TriggerTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerType
     */
    select?: TriggerTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerType
     */
    omit?: TriggerTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TriggerType.
     */
    data: XOR<TriggerTypeCreateInput, TriggerTypeUncheckedCreateInput>
  }

  /**
   * TriggerType createMany
   */
  export type TriggerTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TriggerTypes.
     */
    data: TriggerTypeCreateManyInput | TriggerTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TriggerType createManyAndReturn
   */
  export type TriggerTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerType
     */
    select?: TriggerTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerType
     */
    omit?: TriggerTypeOmit<ExtArgs> | null
    /**
     * The data used to create many TriggerTypes.
     */
    data: TriggerTypeCreateManyInput | TriggerTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TriggerType update
   */
  export type TriggerTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerType
     */
    select?: TriggerTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerType
     */
    omit?: TriggerTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TriggerType.
     */
    data: XOR<TriggerTypeUpdateInput, TriggerTypeUncheckedUpdateInput>
    /**
     * Choose, which TriggerType to update.
     */
    where: TriggerTypeWhereUniqueInput
  }

  /**
   * TriggerType updateMany
   */
  export type TriggerTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TriggerTypes.
     */
    data: XOR<TriggerTypeUpdateManyMutationInput, TriggerTypeUncheckedUpdateManyInput>
    /**
     * Filter which TriggerTypes to update
     */
    where?: TriggerTypeWhereInput
    /**
     * Limit how many TriggerTypes to update.
     */
    limit?: number
  }

  /**
   * TriggerType updateManyAndReturn
   */
  export type TriggerTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerType
     */
    select?: TriggerTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerType
     */
    omit?: TriggerTypeOmit<ExtArgs> | null
    /**
     * The data used to update TriggerTypes.
     */
    data: XOR<TriggerTypeUpdateManyMutationInput, TriggerTypeUncheckedUpdateManyInput>
    /**
     * Filter which TriggerTypes to update
     */
    where?: TriggerTypeWhereInput
    /**
     * Limit how many TriggerTypes to update.
     */
    limit?: number
  }

  /**
   * TriggerType upsert
   */
  export type TriggerTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerType
     */
    select?: TriggerTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerType
     */
    omit?: TriggerTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TriggerType to update in case it exists.
     */
    where: TriggerTypeWhereUniqueInput
    /**
     * In case the TriggerType found by the `where` argument doesn't exist, create a new TriggerType with this data.
     */
    create: XOR<TriggerTypeCreateInput, TriggerTypeUncheckedCreateInput>
    /**
     * In case the TriggerType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerTypeUpdateInput, TriggerTypeUncheckedUpdateInput>
  }

  /**
   * TriggerType delete
   */
  export type TriggerTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerType
     */
    select?: TriggerTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerType
     */
    omit?: TriggerTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTypeInclude<ExtArgs> | null
    /**
     * Filter which TriggerType to delete.
     */
    where: TriggerTypeWhereUniqueInput
  }

  /**
   * TriggerType deleteMany
   */
  export type TriggerTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TriggerTypes to delete
     */
    where?: TriggerTypeWhereInput
    /**
     * Limit how many TriggerTypes to delete.
     */
    limit?: number
  }

  /**
   * TriggerType.triggers
   */
  export type TriggerType$triggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    cursor?: TriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * TriggerType without action
   */
  export type TriggerTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerType
     */
    select?: TriggerTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerType
     */
    omit?: TriggerTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTypeInclude<ExtArgs> | null
  }


  /**
   * Model Action
   */

  export type AggregateAction = {
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  export type ActionAvgAggregateOutputType = {
    executionOrder: number | null
  }

  export type ActionSumAggregateOutputType = {
    executionOrder: number | null
  }

  export type ActionMinAggregateOutputType = {
    id: string | null
    actionId: string | null
    zapId: string | null
    executionOrder: number | null
  }

  export type ActionMaxAggregateOutputType = {
    id: string | null
    actionId: string | null
    zapId: string | null
    executionOrder: number | null
  }

  export type ActionCountAggregateOutputType = {
    id: number
    actionId: number
    zapId: number
    executionOrder: number
    _all: number
  }


  export type ActionAvgAggregateInputType = {
    executionOrder?: true
  }

  export type ActionSumAggregateInputType = {
    executionOrder?: true
  }

  export type ActionMinAggregateInputType = {
    id?: true
    actionId?: true
    zapId?: true
    executionOrder?: true
  }

  export type ActionMaxAggregateInputType = {
    id?: true
    actionId?: true
    zapId?: true
    executionOrder?: true
  }

  export type ActionCountAggregateInputType = {
    id?: true
    actionId?: true
    zapId?: true
    executionOrder?: true
    _all?: true
  }

  export type ActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Action to aggregate.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actions
    **/
    _count?: true | ActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionMaxAggregateInputType
  }

  export type GetActionAggregateType<T extends ActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAction[P]>
      : GetScalarType<T[P], AggregateAction[P]>
  }




  export type ActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithAggregationInput | ActionOrderByWithAggregationInput[]
    by: ActionScalarFieldEnum[] | ActionScalarFieldEnum
    having?: ActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionCountAggregateInputType | true
    _avg?: ActionAvgAggregateInputType
    _sum?: ActionSumAggregateInputType
    _min?: ActionMinAggregateInputType
    _max?: ActionMaxAggregateInputType
  }

  export type ActionGroupByOutputType = {
    id: string
    actionId: string
    zapId: string
    executionOrder: number
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  type GetActionGroupByPayload<T extends ActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionGroupByOutputType[P]>
            : GetScalarType<T[P], ActionGroupByOutputType[P]>
        }
      >
    >


  export type ActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionId?: boolean
    zapId?: boolean
    executionOrder?: boolean
    actionType?: boolean | ActionTypeDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionId?: boolean
    zapId?: boolean
    executionOrder?: boolean
    actionType?: boolean | ActionTypeDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionId?: boolean
    zapId?: boolean
    executionOrder?: boolean
    actionType?: boolean | ActionTypeDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectScalar = {
    id?: boolean
    actionId?: boolean
    zapId?: boolean
    executionOrder?: boolean
  }

  export type ActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actionId" | "zapId" | "executionOrder", ExtArgs["result"]["action"]>
  export type ActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actionType?: boolean | ActionTypeDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type ActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actionType?: boolean | ActionTypeDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type ActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actionType?: boolean | ActionTypeDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }

  export type $ActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Action"
    objects: {
      actionType: Prisma.$ActionTypePayload<ExtArgs>
      zap: Prisma.$ZapPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actionId: string
      zapId: string
      executionOrder: number
    }, ExtArgs["result"]["action"]>
    composites: {}
  }

  type ActionGetPayload<S extends boolean | null | undefined | ActionDefaultArgs> = $Result.GetResult<Prisma.$ActionPayload, S>

  type ActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionCountAggregateInputType | true
    }

  export interface ActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Action'], meta: { name: 'Action' } }
    /**
     * Find zero or one Action that matches the filter.
     * @param {ActionFindUniqueArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFindUniqueArgs>(args: SelectSubset<T, ActionFindUniqueArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Action that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionFindUniqueOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFindFirstArgs>(args?: SelectSubset<T, ActionFindFirstArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.action.findMany()
     * 
     * // Get first 10 Actions
     * const actions = await prisma.action.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionWithIdOnly = await prisma.action.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionFindManyArgs>(args?: SelectSubset<T, ActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Action.
     * @param {ActionCreateArgs} args - Arguments to create a Action.
     * @example
     * // Create one Action
     * const Action = await prisma.action.create({
     *   data: {
     *     // ... data to create a Action
     *   }
     * })
     * 
     */
    create<T extends ActionCreateArgs>(args: SelectSubset<T, ActionCreateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actions.
     * @param {ActionCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionCreateManyArgs>(args?: SelectSubset<T, ActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actions and returns the data saved in the database.
     * @param {ActionCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Action.
     * @param {ActionDeleteArgs} args - Arguments to delete one Action.
     * @example
     * // Delete one Action
     * const Action = await prisma.action.delete({
     *   where: {
     *     // ... filter to delete one Action
     *   }
     * })
     * 
     */
    delete<T extends ActionDeleteArgs>(args: SelectSubset<T, ActionDeleteArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Action.
     * @param {ActionUpdateArgs} args - Arguments to update one Action.
     * @example
     * // Update one Action
     * const action = await prisma.action.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionUpdateArgs>(args: SelectSubset<T, ActionUpdateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actions.
     * @param {ActionDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.action.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionDeleteManyArgs>(args?: SelectSubset<T, ActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionUpdateManyArgs>(args: SelectSubset<T, ActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions and returns the data updated in the database.
     * @param {ActionUpdateManyAndReturnArgs} args - Arguments to update many Actions.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActionUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Action.
     * @param {ActionUpsertArgs} args - Arguments to update or create a Action.
     * @example
     * // Update or create a Action
     * const action = await prisma.action.upsert({
     *   create: {
     *     // ... data to create a Action
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Action we want to update
     *   }
     * })
     */
    upsert<T extends ActionUpsertArgs>(args: SelectSubset<T, ActionUpsertArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.action.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
    **/
    count<T extends ActionCountArgs>(
      args?: Subset<T, ActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionAggregateArgs>(args: Subset<T, ActionAggregateArgs>): Prisma.PrismaPromise<GetActionAggregateType<T>>

    /**
     * Group by Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionGroupByArgs['orderBy'] }
        : { orderBy?: ActionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Action model
   */
  readonly fields: ActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Action.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actionType<T extends ActionTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActionTypeDefaultArgs<ExtArgs>>): Prisma__ActionTypeClient<$Result.GetResult<Prisma.$ActionTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Action model
   */
  interface ActionFieldRefs {
    readonly id: FieldRef<"Action", 'String'>
    readonly actionId: FieldRef<"Action", 'String'>
    readonly zapId: FieldRef<"Action", 'String'>
    readonly executionOrder: FieldRef<"Action", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Action findUnique
   */
  export type ActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findUniqueOrThrow
   */
  export type ActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findFirst
   */
  export type ActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findFirstOrThrow
   */
  export type ActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findMany
   */
  export type ActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action create
   */
  export type ActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to create a Action.
     */
    data: XOR<ActionCreateInput, ActionUncheckedCreateInput>
  }

  /**
   * Action createMany
   */
  export type ActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Action createManyAndReturn
   */
  export type ActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action update
   */
  export type ActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to update a Action.
     */
    data: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
    /**
     * Choose, which Action to update.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action updateMany
   */
  export type ActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
  }

  /**
   * Action updateManyAndReturn
   */
  export type ActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action upsert
   */
  export type ActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The filter to search for the Action to update in case it exists.
     */
    where: ActionWhereUniqueInput
    /**
     * In case the Action found by the `where` argument doesn't exist, create a new Action with this data.
     */
    create: XOR<ActionCreateInput, ActionUncheckedCreateInput>
    /**
     * In case the Action was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
  }

  /**
   * Action delete
   */
  export type ActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter which Action to delete.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action deleteMany
   */
  export type ActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actions to delete
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to delete.
     */
    limit?: number
  }

  /**
   * Action without action
   */
  export type ActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
  }


  /**
   * Model ActionType
   */

  export type AggregateActionType = {
    _count: ActionTypeCountAggregateOutputType | null
    _min: ActionTypeMinAggregateOutputType | null
    _max: ActionTypeMaxAggregateOutputType | null
  }

  export type ActionTypeMinAggregateOutputType = {
    id: string | null
    actionType: string | null
  }

  export type ActionTypeMaxAggregateOutputType = {
    id: string | null
    actionType: string | null
  }

  export type ActionTypeCountAggregateOutputType = {
    id: number
    actionType: number
    _all: number
  }


  export type ActionTypeMinAggregateInputType = {
    id?: true
    actionType?: true
  }

  export type ActionTypeMaxAggregateInputType = {
    id?: true
    actionType?: true
  }

  export type ActionTypeCountAggregateInputType = {
    id?: true
    actionType?: true
    _all?: true
  }

  export type ActionTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionType to aggregate.
     */
    where?: ActionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionTypes to fetch.
     */
    orderBy?: ActionTypeOrderByWithRelationInput | ActionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActionTypes
    **/
    _count?: true | ActionTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionTypeMaxAggregateInputType
  }

  export type GetActionTypeAggregateType<T extends ActionTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateActionType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionType[P]>
      : GetScalarType<T[P], AggregateActionType[P]>
  }




  export type ActionTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionTypeWhereInput
    orderBy?: ActionTypeOrderByWithAggregationInput | ActionTypeOrderByWithAggregationInput[]
    by: ActionTypeScalarFieldEnum[] | ActionTypeScalarFieldEnum
    having?: ActionTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionTypeCountAggregateInputType | true
    _min?: ActionTypeMinAggregateInputType
    _max?: ActionTypeMaxAggregateInputType
  }

  export type ActionTypeGroupByOutputType = {
    id: string
    actionType: string
    _count: ActionTypeCountAggregateOutputType | null
    _min: ActionTypeMinAggregateOutputType | null
    _max: ActionTypeMaxAggregateOutputType | null
  }

  type GetActionTypeGroupByPayload<T extends ActionTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ActionTypeGroupByOutputType[P]>
        }
      >
    >


  export type ActionTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionType?: boolean
    action?: boolean | ActionType$actionArgs<ExtArgs>
    _count?: boolean | ActionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionType"]>

  export type ActionTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionType?: boolean
  }, ExtArgs["result"]["actionType"]>

  export type ActionTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionType?: boolean
  }, ExtArgs["result"]["actionType"]>

  export type ActionTypeSelectScalar = {
    id?: boolean
    actionType?: boolean
  }

  export type ActionTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actionType", ExtArgs["result"]["actionType"]>
  export type ActionTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionType$actionArgs<ExtArgs>
    _count?: boolean | ActionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActionTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ActionTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ActionTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActionType"
    objects: {
      action: Prisma.$ActionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actionType: string
    }, ExtArgs["result"]["actionType"]>
    composites: {}
  }

  type ActionTypeGetPayload<S extends boolean | null | undefined | ActionTypeDefaultArgs> = $Result.GetResult<Prisma.$ActionTypePayload, S>

  type ActionTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionTypeCountAggregateInputType | true
    }

  export interface ActionTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActionType'], meta: { name: 'ActionType' } }
    /**
     * Find zero or one ActionType that matches the filter.
     * @param {ActionTypeFindUniqueArgs} args - Arguments to find a ActionType
     * @example
     * // Get one ActionType
     * const actionType = await prisma.actionType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionTypeFindUniqueArgs>(args: SelectSubset<T, ActionTypeFindUniqueArgs<ExtArgs>>): Prisma__ActionTypeClient<$Result.GetResult<Prisma.$ActionTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActionType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionTypeFindUniqueOrThrowArgs} args - Arguments to find a ActionType
     * @example
     * // Get one ActionType
     * const actionType = await prisma.actionType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionTypeClient<$Result.GetResult<Prisma.$ActionTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionTypeFindFirstArgs} args - Arguments to find a ActionType
     * @example
     * // Get one ActionType
     * const actionType = await prisma.actionType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionTypeFindFirstArgs>(args?: SelectSubset<T, ActionTypeFindFirstArgs<ExtArgs>>): Prisma__ActionTypeClient<$Result.GetResult<Prisma.$ActionTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionTypeFindFirstOrThrowArgs} args - Arguments to find a ActionType
     * @example
     * // Get one ActionType
     * const actionType = await prisma.actionType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionTypeClient<$Result.GetResult<Prisma.$ActionTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActionTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActionTypes
     * const actionTypes = await prisma.actionType.findMany()
     * 
     * // Get first 10 ActionTypes
     * const actionTypes = await prisma.actionType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionTypeWithIdOnly = await prisma.actionType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionTypeFindManyArgs>(args?: SelectSubset<T, ActionTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActionType.
     * @param {ActionTypeCreateArgs} args - Arguments to create a ActionType.
     * @example
     * // Create one ActionType
     * const ActionType = await prisma.actionType.create({
     *   data: {
     *     // ... data to create a ActionType
     *   }
     * })
     * 
     */
    create<T extends ActionTypeCreateArgs>(args: SelectSubset<T, ActionTypeCreateArgs<ExtArgs>>): Prisma__ActionTypeClient<$Result.GetResult<Prisma.$ActionTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActionTypes.
     * @param {ActionTypeCreateManyArgs} args - Arguments to create many ActionTypes.
     * @example
     * // Create many ActionTypes
     * const actionType = await prisma.actionType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionTypeCreateManyArgs>(args?: SelectSubset<T, ActionTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActionTypes and returns the data saved in the database.
     * @param {ActionTypeCreateManyAndReturnArgs} args - Arguments to create many ActionTypes.
     * @example
     * // Create many ActionTypes
     * const actionType = await prisma.actionType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActionTypes and only return the `id`
     * const actionTypeWithIdOnly = await prisma.actionType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActionType.
     * @param {ActionTypeDeleteArgs} args - Arguments to delete one ActionType.
     * @example
     * // Delete one ActionType
     * const ActionType = await prisma.actionType.delete({
     *   where: {
     *     // ... filter to delete one ActionType
     *   }
     * })
     * 
     */
    delete<T extends ActionTypeDeleteArgs>(args: SelectSubset<T, ActionTypeDeleteArgs<ExtArgs>>): Prisma__ActionTypeClient<$Result.GetResult<Prisma.$ActionTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActionType.
     * @param {ActionTypeUpdateArgs} args - Arguments to update one ActionType.
     * @example
     * // Update one ActionType
     * const actionType = await prisma.actionType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionTypeUpdateArgs>(args: SelectSubset<T, ActionTypeUpdateArgs<ExtArgs>>): Prisma__ActionTypeClient<$Result.GetResult<Prisma.$ActionTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActionTypes.
     * @param {ActionTypeDeleteManyArgs} args - Arguments to filter ActionTypes to delete.
     * @example
     * // Delete a few ActionTypes
     * const { count } = await prisma.actionType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionTypeDeleteManyArgs>(args?: SelectSubset<T, ActionTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActionTypes
     * const actionType = await prisma.actionType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionTypeUpdateManyArgs>(args: SelectSubset<T, ActionTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionTypes and returns the data updated in the database.
     * @param {ActionTypeUpdateManyAndReturnArgs} args - Arguments to update many ActionTypes.
     * @example
     * // Update many ActionTypes
     * const actionType = await prisma.actionType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActionTypes and only return the `id`
     * const actionTypeWithIdOnly = await prisma.actionType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActionTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActionType.
     * @param {ActionTypeUpsertArgs} args - Arguments to update or create a ActionType.
     * @example
     * // Update or create a ActionType
     * const actionType = await prisma.actionType.upsert({
     *   create: {
     *     // ... data to create a ActionType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActionType we want to update
     *   }
     * })
     */
    upsert<T extends ActionTypeUpsertArgs>(args: SelectSubset<T, ActionTypeUpsertArgs<ExtArgs>>): Prisma__ActionTypeClient<$Result.GetResult<Prisma.$ActionTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionTypeCountArgs} args - Arguments to filter ActionTypes to count.
     * @example
     * // Count the number of ActionTypes
     * const count = await prisma.actionType.count({
     *   where: {
     *     // ... the filter for the ActionTypes we want to count
     *   }
     * })
    **/
    count<T extends ActionTypeCountArgs>(
      args?: Subset<T, ActionTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionTypeAggregateArgs>(args: Subset<T, ActionTypeAggregateArgs>): Prisma.PrismaPromise<GetActionTypeAggregateType<T>>

    /**
     * Group by ActionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActionTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionTypeGroupByArgs['orderBy'] }
        : { orderBy?: ActionTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActionTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActionType model
   */
  readonly fields: ActionTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActionType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    action<T extends ActionType$actionArgs<ExtArgs> = {}>(args?: Subset<T, ActionType$actionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActionType model
   */
  interface ActionTypeFieldRefs {
    readonly id: FieldRef<"ActionType", 'String'>
    readonly actionType: FieldRef<"ActionType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActionType findUnique
   */
  export type ActionTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionType
     */
    select?: ActionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionType
     */
    omit?: ActionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionTypeInclude<ExtArgs> | null
    /**
     * Filter, which ActionType to fetch.
     */
    where: ActionTypeWhereUniqueInput
  }

  /**
   * ActionType findUniqueOrThrow
   */
  export type ActionTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionType
     */
    select?: ActionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionType
     */
    omit?: ActionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionTypeInclude<ExtArgs> | null
    /**
     * Filter, which ActionType to fetch.
     */
    where: ActionTypeWhereUniqueInput
  }

  /**
   * ActionType findFirst
   */
  export type ActionTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionType
     */
    select?: ActionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionType
     */
    omit?: ActionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionTypeInclude<ExtArgs> | null
    /**
     * Filter, which ActionType to fetch.
     */
    where?: ActionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionTypes to fetch.
     */
    orderBy?: ActionTypeOrderByWithRelationInput | ActionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionTypes.
     */
    cursor?: ActionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionTypes.
     */
    distinct?: ActionTypeScalarFieldEnum | ActionTypeScalarFieldEnum[]
  }

  /**
   * ActionType findFirstOrThrow
   */
  export type ActionTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionType
     */
    select?: ActionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionType
     */
    omit?: ActionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionTypeInclude<ExtArgs> | null
    /**
     * Filter, which ActionType to fetch.
     */
    where?: ActionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionTypes to fetch.
     */
    orderBy?: ActionTypeOrderByWithRelationInput | ActionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionTypes.
     */
    cursor?: ActionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionTypes.
     */
    distinct?: ActionTypeScalarFieldEnum | ActionTypeScalarFieldEnum[]
  }

  /**
   * ActionType findMany
   */
  export type ActionTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionType
     */
    select?: ActionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionType
     */
    omit?: ActionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionTypeInclude<ExtArgs> | null
    /**
     * Filter, which ActionTypes to fetch.
     */
    where?: ActionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionTypes to fetch.
     */
    orderBy?: ActionTypeOrderByWithRelationInput | ActionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActionTypes.
     */
    cursor?: ActionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionTypes.
     */
    skip?: number
    distinct?: ActionTypeScalarFieldEnum | ActionTypeScalarFieldEnum[]
  }

  /**
   * ActionType create
   */
  export type ActionTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionType
     */
    select?: ActionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionType
     */
    omit?: ActionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ActionType.
     */
    data: XOR<ActionTypeCreateInput, ActionTypeUncheckedCreateInput>
  }

  /**
   * ActionType createMany
   */
  export type ActionTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActionTypes.
     */
    data: ActionTypeCreateManyInput | ActionTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActionType createManyAndReturn
   */
  export type ActionTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionType
     */
    select?: ActionTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionType
     */
    omit?: ActionTypeOmit<ExtArgs> | null
    /**
     * The data used to create many ActionTypes.
     */
    data: ActionTypeCreateManyInput | ActionTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActionType update
   */
  export type ActionTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionType
     */
    select?: ActionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionType
     */
    omit?: ActionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ActionType.
     */
    data: XOR<ActionTypeUpdateInput, ActionTypeUncheckedUpdateInput>
    /**
     * Choose, which ActionType to update.
     */
    where: ActionTypeWhereUniqueInput
  }

  /**
   * ActionType updateMany
   */
  export type ActionTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActionTypes.
     */
    data: XOR<ActionTypeUpdateManyMutationInput, ActionTypeUncheckedUpdateManyInput>
    /**
     * Filter which ActionTypes to update
     */
    where?: ActionTypeWhereInput
    /**
     * Limit how many ActionTypes to update.
     */
    limit?: number
  }

  /**
   * ActionType updateManyAndReturn
   */
  export type ActionTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionType
     */
    select?: ActionTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionType
     */
    omit?: ActionTypeOmit<ExtArgs> | null
    /**
     * The data used to update ActionTypes.
     */
    data: XOR<ActionTypeUpdateManyMutationInput, ActionTypeUncheckedUpdateManyInput>
    /**
     * Filter which ActionTypes to update
     */
    where?: ActionTypeWhereInput
    /**
     * Limit how many ActionTypes to update.
     */
    limit?: number
  }

  /**
   * ActionType upsert
   */
  export type ActionTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionType
     */
    select?: ActionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionType
     */
    omit?: ActionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ActionType to update in case it exists.
     */
    where: ActionTypeWhereUniqueInput
    /**
     * In case the ActionType found by the `where` argument doesn't exist, create a new ActionType with this data.
     */
    create: XOR<ActionTypeCreateInput, ActionTypeUncheckedCreateInput>
    /**
     * In case the ActionType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionTypeUpdateInput, ActionTypeUncheckedUpdateInput>
  }

  /**
   * ActionType delete
   */
  export type ActionTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionType
     */
    select?: ActionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionType
     */
    omit?: ActionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionTypeInclude<ExtArgs> | null
    /**
     * Filter which ActionType to delete.
     */
    where: ActionTypeWhereUniqueInput
  }

  /**
   * ActionType deleteMany
   */
  export type ActionTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionTypes to delete
     */
    where?: ActionTypeWhereInput
    /**
     * Limit how many ActionTypes to delete.
     */
    limit?: number
  }

  /**
   * ActionType.action
   */
  export type ActionType$actionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * ActionType without action
   */
  export type ActionTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionType
     */
    select?: ActionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionType
     */
    omit?: ActionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionTypeInclude<ExtArgs> | null
  }


  /**
   * Model ZapRun
   */

  export type AggregateZapRun = {
    _count: ZapRunCountAggregateOutputType | null
    _min: ZapRunMinAggregateOutputType | null
    _max: ZapRunMaxAggregateOutputType | null
  }

  export type ZapRunMinAggregateOutputType = {
    id: string | null
    zapId: string | null
  }

  export type ZapRunMaxAggregateOutputType = {
    id: string | null
    zapId: string | null
  }

  export type ZapRunCountAggregateOutputType = {
    id: number
    zapId: number
    metaData: number
    _all: number
  }


  export type ZapRunMinAggregateInputType = {
    id?: true
    zapId?: true
  }

  export type ZapRunMaxAggregateInputType = {
    id?: true
    zapId?: true
  }

  export type ZapRunCountAggregateInputType = {
    id?: true
    zapId?: true
    metaData?: true
    _all?: true
  }

  export type ZapRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZapRun to aggregate.
     */
    where?: ZapRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRuns to fetch.
     */
    orderBy?: ZapRunOrderByWithRelationInput | ZapRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZapRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZapRuns
    **/
    _count?: true | ZapRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZapRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZapRunMaxAggregateInputType
  }

  export type GetZapRunAggregateType<T extends ZapRunAggregateArgs> = {
        [P in keyof T & keyof AggregateZapRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZapRun[P]>
      : GetScalarType<T[P], AggregateZapRun[P]>
  }




  export type ZapRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapRunWhereInput
    orderBy?: ZapRunOrderByWithAggregationInput | ZapRunOrderByWithAggregationInput[]
    by: ZapRunScalarFieldEnum[] | ZapRunScalarFieldEnum
    having?: ZapRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZapRunCountAggregateInputType | true
    _min?: ZapRunMinAggregateInputType
    _max?: ZapRunMaxAggregateInputType
  }

  export type ZapRunGroupByOutputType = {
    id: string
    zapId: string
    metaData: JsonValue
    _count: ZapRunCountAggregateOutputType | null
    _min: ZapRunMinAggregateOutputType | null
    _max: ZapRunMaxAggregateOutputType | null
  }

  type GetZapRunGroupByPayload<T extends ZapRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZapRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapRunGroupByOutputType[P]>
            : GetScalarType<T[P], ZapRunGroupByOutputType[P]>
        }
      >
    >


  export type ZapRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    metaData?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    zapRunOutbox?: boolean | ZapRun$zapRunOutboxArgs<ExtArgs>
  }, ExtArgs["result"]["zapRun"]>

  export type ZapRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    metaData?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRun"]>

  export type ZapRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    metaData?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRun"]>

  export type ZapRunSelectScalar = {
    id?: boolean
    zapId?: boolean
    metaData?: boolean
  }

  export type ZapRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zapId" | "metaData", ExtArgs["result"]["zapRun"]>
  export type ZapRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    zapRunOutbox?: boolean | ZapRun$zapRunOutboxArgs<ExtArgs>
  }
  export type ZapRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type ZapRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }

  export type $ZapRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ZapRun"
    objects: {
      zap: Prisma.$ZapPayload<ExtArgs>
      zapRunOutbox: Prisma.$ZapRunOutboxPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zapId: string
      metaData: Prisma.JsonValue
    }, ExtArgs["result"]["zapRun"]>
    composites: {}
  }

  type ZapRunGetPayload<S extends boolean | null | undefined | ZapRunDefaultArgs> = $Result.GetResult<Prisma.$ZapRunPayload, S>

  type ZapRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZapRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZapRunCountAggregateInputType | true
    }

  export interface ZapRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ZapRun'], meta: { name: 'ZapRun' } }
    /**
     * Find zero or one ZapRun that matches the filter.
     * @param {ZapRunFindUniqueArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapRunFindUniqueArgs>(args: SelectSubset<T, ZapRunFindUniqueArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZapRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapRunFindUniqueOrThrowArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapRunFindUniqueOrThrowArgs>(args: SelectSubset<T, ZapRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunFindFirstArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapRunFindFirstArgs>(args?: SelectSubset<T, ZapRunFindFirstArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunFindFirstOrThrowArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapRunFindFirstOrThrowArgs>(args?: SelectSubset<T, ZapRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZapRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZapRuns
     * const zapRuns = await prisma.zapRun.findMany()
     * 
     * // Get first 10 ZapRuns
     * const zapRuns = await prisma.zapRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zapRunWithIdOnly = await prisma.zapRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZapRunFindManyArgs>(args?: SelectSubset<T, ZapRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZapRun.
     * @param {ZapRunCreateArgs} args - Arguments to create a ZapRun.
     * @example
     * // Create one ZapRun
     * const ZapRun = await prisma.zapRun.create({
     *   data: {
     *     // ... data to create a ZapRun
     *   }
     * })
     * 
     */
    create<T extends ZapRunCreateArgs>(args: SelectSubset<T, ZapRunCreateArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZapRuns.
     * @param {ZapRunCreateManyArgs} args - Arguments to create many ZapRuns.
     * @example
     * // Create many ZapRuns
     * const zapRun = await prisma.zapRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZapRunCreateManyArgs>(args?: SelectSubset<T, ZapRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZapRuns and returns the data saved in the database.
     * @param {ZapRunCreateManyAndReturnArgs} args - Arguments to create many ZapRuns.
     * @example
     * // Create many ZapRuns
     * const zapRun = await prisma.zapRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZapRuns and only return the `id`
     * const zapRunWithIdOnly = await prisma.zapRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZapRunCreateManyAndReturnArgs>(args?: SelectSubset<T, ZapRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZapRun.
     * @param {ZapRunDeleteArgs} args - Arguments to delete one ZapRun.
     * @example
     * // Delete one ZapRun
     * const ZapRun = await prisma.zapRun.delete({
     *   where: {
     *     // ... filter to delete one ZapRun
     *   }
     * })
     * 
     */
    delete<T extends ZapRunDeleteArgs>(args: SelectSubset<T, ZapRunDeleteArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZapRun.
     * @param {ZapRunUpdateArgs} args - Arguments to update one ZapRun.
     * @example
     * // Update one ZapRun
     * const zapRun = await prisma.zapRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZapRunUpdateArgs>(args: SelectSubset<T, ZapRunUpdateArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZapRuns.
     * @param {ZapRunDeleteManyArgs} args - Arguments to filter ZapRuns to delete.
     * @example
     * // Delete a few ZapRuns
     * const { count } = await prisma.zapRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZapRunDeleteManyArgs>(args?: SelectSubset<T, ZapRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZapRuns
     * const zapRun = await prisma.zapRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZapRunUpdateManyArgs>(args: SelectSubset<T, ZapRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRuns and returns the data updated in the database.
     * @param {ZapRunUpdateManyAndReturnArgs} args - Arguments to update many ZapRuns.
     * @example
     * // Update many ZapRuns
     * const zapRun = await prisma.zapRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ZapRuns and only return the `id`
     * const zapRunWithIdOnly = await prisma.zapRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ZapRunUpdateManyAndReturnArgs>(args: SelectSubset<T, ZapRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ZapRun.
     * @param {ZapRunUpsertArgs} args - Arguments to update or create a ZapRun.
     * @example
     * // Update or create a ZapRun
     * const zapRun = await prisma.zapRun.upsert({
     *   create: {
     *     // ... data to create a ZapRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZapRun we want to update
     *   }
     * })
     */
    upsert<T extends ZapRunUpsertArgs>(args: SelectSubset<T, ZapRunUpsertArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZapRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunCountArgs} args - Arguments to filter ZapRuns to count.
     * @example
     * // Count the number of ZapRuns
     * const count = await prisma.zapRun.count({
     *   where: {
     *     // ... the filter for the ZapRuns we want to count
     *   }
     * })
    **/
    count<T extends ZapRunCountArgs>(
      args?: Subset<T, ZapRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZapRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZapRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZapRunAggregateArgs>(args: Subset<T, ZapRunAggregateArgs>): Prisma.PrismaPromise<GetZapRunAggregateType<T>>

    /**
     * Group by ZapRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZapRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapRunGroupByArgs['orderBy'] }
        : { orderBy?: ZapRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZapRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ZapRun model
   */
  readonly fields: ZapRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZapRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zapRunOutbox<T extends ZapRun$zapRunOutboxArgs<ExtArgs> = {}>(args?: Subset<T, ZapRun$zapRunOutboxArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ZapRun model
   */
  interface ZapRunFieldRefs {
    readonly id: FieldRef<"ZapRun", 'String'>
    readonly zapId: FieldRef<"ZapRun", 'String'>
    readonly metaData: FieldRef<"ZapRun", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ZapRun findUnique
   */
  export type ZapRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * Filter, which ZapRun to fetch.
     */
    where: ZapRunWhereUniqueInput
  }

  /**
   * ZapRun findUniqueOrThrow
   */
  export type ZapRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * Filter, which ZapRun to fetch.
     */
    where: ZapRunWhereUniqueInput
  }

  /**
   * ZapRun findFirst
   */
  export type ZapRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * Filter, which ZapRun to fetch.
     */
    where?: ZapRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRuns to fetch.
     */
    orderBy?: ZapRunOrderByWithRelationInput | ZapRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZapRuns.
     */
    cursor?: ZapRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZapRuns.
     */
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[]
  }

  /**
   * ZapRun findFirstOrThrow
   */
  export type ZapRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * Filter, which ZapRun to fetch.
     */
    where?: ZapRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRuns to fetch.
     */
    orderBy?: ZapRunOrderByWithRelationInput | ZapRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZapRuns.
     */
    cursor?: ZapRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZapRuns.
     */
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[]
  }

  /**
   * ZapRun findMany
   */
  export type ZapRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * Filter, which ZapRuns to fetch.
     */
    where?: ZapRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRuns to fetch.
     */
    orderBy?: ZapRunOrderByWithRelationInput | ZapRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZapRuns.
     */
    cursor?: ZapRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRuns.
     */
    skip?: number
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[]
  }

  /**
   * ZapRun create
   */
  export type ZapRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * The data needed to create a ZapRun.
     */
    data: XOR<ZapRunCreateInput, ZapRunUncheckedCreateInput>
  }

  /**
   * ZapRun createMany
   */
  export type ZapRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZapRuns.
     */
    data: ZapRunCreateManyInput | ZapRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZapRun createManyAndReturn
   */
  export type ZapRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * The data used to create many ZapRuns.
     */
    data: ZapRunCreateManyInput | ZapRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZapRun update
   */
  export type ZapRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * The data needed to update a ZapRun.
     */
    data: XOR<ZapRunUpdateInput, ZapRunUncheckedUpdateInput>
    /**
     * Choose, which ZapRun to update.
     */
    where: ZapRunWhereUniqueInput
  }

  /**
   * ZapRun updateMany
   */
  export type ZapRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ZapRuns.
     */
    data: XOR<ZapRunUpdateManyMutationInput, ZapRunUncheckedUpdateManyInput>
    /**
     * Filter which ZapRuns to update
     */
    where?: ZapRunWhereInput
    /**
     * Limit how many ZapRuns to update.
     */
    limit?: number
  }

  /**
   * ZapRun updateManyAndReturn
   */
  export type ZapRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * The data used to update ZapRuns.
     */
    data: XOR<ZapRunUpdateManyMutationInput, ZapRunUncheckedUpdateManyInput>
    /**
     * Filter which ZapRuns to update
     */
    where?: ZapRunWhereInput
    /**
     * Limit how many ZapRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZapRun upsert
   */
  export type ZapRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * The filter to search for the ZapRun to update in case it exists.
     */
    where: ZapRunWhereUniqueInput
    /**
     * In case the ZapRun found by the `where` argument doesn't exist, create a new ZapRun with this data.
     */
    create: XOR<ZapRunCreateInput, ZapRunUncheckedCreateInput>
    /**
     * In case the ZapRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZapRunUpdateInput, ZapRunUncheckedUpdateInput>
  }

  /**
   * ZapRun delete
   */
  export type ZapRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * Filter which ZapRun to delete.
     */
    where: ZapRunWhereUniqueInput
  }

  /**
   * ZapRun deleteMany
   */
  export type ZapRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZapRuns to delete
     */
    where?: ZapRunWhereInput
    /**
     * Limit how many ZapRuns to delete.
     */
    limit?: number
  }

  /**
   * ZapRun.zapRunOutbox
   */
  export type ZapRun$zapRunOutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    where?: ZapRunOutboxWhereInput
  }

  /**
   * ZapRun without action
   */
  export type ZapRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
  }


  /**
   * Model ZapRunOutbox
   */

  export type AggregateZapRunOutbox = {
    _count: ZapRunOutboxCountAggregateOutputType | null
    _min: ZapRunOutboxMinAggregateOutputType | null
    _max: ZapRunOutboxMaxAggregateOutputType | null
  }

  export type ZapRunOutboxMinAggregateOutputType = {
    id: string | null
    zapRunId: string | null
  }

  export type ZapRunOutboxMaxAggregateOutputType = {
    id: string | null
    zapRunId: string | null
  }

  export type ZapRunOutboxCountAggregateOutputType = {
    id: number
    zapRunId: number
    _all: number
  }


  export type ZapRunOutboxMinAggregateInputType = {
    id?: true
    zapRunId?: true
  }

  export type ZapRunOutboxMaxAggregateInputType = {
    id?: true
    zapRunId?: true
  }

  export type ZapRunOutboxCountAggregateInputType = {
    id?: true
    zapRunId?: true
    _all?: true
  }

  export type ZapRunOutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZapRunOutbox to aggregate.
     */
    where?: ZapRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRunOutboxes to fetch.
     */
    orderBy?: ZapRunOutboxOrderByWithRelationInput | ZapRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZapRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZapRunOutboxes
    **/
    _count?: true | ZapRunOutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZapRunOutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZapRunOutboxMaxAggregateInputType
  }

  export type GetZapRunOutboxAggregateType<T extends ZapRunOutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateZapRunOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZapRunOutbox[P]>
      : GetScalarType<T[P], AggregateZapRunOutbox[P]>
  }




  export type ZapRunOutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapRunOutboxWhereInput
    orderBy?: ZapRunOutboxOrderByWithAggregationInput | ZapRunOutboxOrderByWithAggregationInput[]
    by: ZapRunOutboxScalarFieldEnum[] | ZapRunOutboxScalarFieldEnum
    having?: ZapRunOutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZapRunOutboxCountAggregateInputType | true
    _min?: ZapRunOutboxMinAggregateInputType
    _max?: ZapRunOutboxMaxAggregateInputType
  }

  export type ZapRunOutboxGroupByOutputType = {
    id: string
    zapRunId: string
    _count: ZapRunOutboxCountAggregateOutputType | null
    _min: ZapRunOutboxMinAggregateOutputType | null
    _max: ZapRunOutboxMaxAggregateOutputType | null
  }

  type GetZapRunOutboxGroupByPayload<T extends ZapRunOutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapRunOutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZapRunOutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapRunOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], ZapRunOutboxGroupByOutputType[P]>
        }
      >
    >


  export type ZapRunOutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapRunId?: boolean
    zapRun?: boolean | ZapRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRunOutbox"]>

  export type ZapRunOutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapRunId?: boolean
    zapRun?: boolean | ZapRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRunOutbox"]>

  export type ZapRunOutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapRunId?: boolean
    zapRun?: boolean | ZapRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRunOutbox"]>

  export type ZapRunOutboxSelectScalar = {
    id?: boolean
    zapRunId?: boolean
  }

  export type ZapRunOutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zapRunId", ExtArgs["result"]["zapRunOutbox"]>
  export type ZapRunOutboxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zapRun?: boolean | ZapRunDefaultArgs<ExtArgs>
  }
  export type ZapRunOutboxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zapRun?: boolean | ZapRunDefaultArgs<ExtArgs>
  }
  export type ZapRunOutboxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zapRun?: boolean | ZapRunDefaultArgs<ExtArgs>
  }

  export type $ZapRunOutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ZapRunOutbox"
    objects: {
      zapRun: Prisma.$ZapRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zapRunId: string
    }, ExtArgs["result"]["zapRunOutbox"]>
    composites: {}
  }

  type ZapRunOutboxGetPayload<S extends boolean | null | undefined | ZapRunOutboxDefaultArgs> = $Result.GetResult<Prisma.$ZapRunOutboxPayload, S>

  type ZapRunOutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZapRunOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZapRunOutboxCountAggregateInputType | true
    }

  export interface ZapRunOutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ZapRunOutbox'], meta: { name: 'ZapRunOutbox' } }
    /**
     * Find zero or one ZapRunOutbox that matches the filter.
     * @param {ZapRunOutboxFindUniqueArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapRunOutboxFindUniqueArgs>(args: SelectSubset<T, ZapRunOutboxFindUniqueArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZapRunOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapRunOutboxFindUniqueOrThrowArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapRunOutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, ZapRunOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRunOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxFindFirstArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapRunOutboxFindFirstArgs>(args?: SelectSubset<T, ZapRunOutboxFindFirstArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRunOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxFindFirstOrThrowArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapRunOutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, ZapRunOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZapRunOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZapRunOutboxes
     * const zapRunOutboxes = await prisma.zapRunOutbox.findMany()
     * 
     * // Get first 10 ZapRunOutboxes
     * const zapRunOutboxes = await prisma.zapRunOutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zapRunOutboxWithIdOnly = await prisma.zapRunOutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZapRunOutboxFindManyArgs>(args?: SelectSubset<T, ZapRunOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZapRunOutbox.
     * @param {ZapRunOutboxCreateArgs} args - Arguments to create a ZapRunOutbox.
     * @example
     * // Create one ZapRunOutbox
     * const ZapRunOutbox = await prisma.zapRunOutbox.create({
     *   data: {
     *     // ... data to create a ZapRunOutbox
     *   }
     * })
     * 
     */
    create<T extends ZapRunOutboxCreateArgs>(args: SelectSubset<T, ZapRunOutboxCreateArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZapRunOutboxes.
     * @param {ZapRunOutboxCreateManyArgs} args - Arguments to create many ZapRunOutboxes.
     * @example
     * // Create many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZapRunOutboxCreateManyArgs>(args?: SelectSubset<T, ZapRunOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZapRunOutboxes and returns the data saved in the database.
     * @param {ZapRunOutboxCreateManyAndReturnArgs} args - Arguments to create many ZapRunOutboxes.
     * @example
     * // Create many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZapRunOutboxes and only return the `id`
     * const zapRunOutboxWithIdOnly = await prisma.zapRunOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZapRunOutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, ZapRunOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZapRunOutbox.
     * @param {ZapRunOutboxDeleteArgs} args - Arguments to delete one ZapRunOutbox.
     * @example
     * // Delete one ZapRunOutbox
     * const ZapRunOutbox = await prisma.zapRunOutbox.delete({
     *   where: {
     *     // ... filter to delete one ZapRunOutbox
     *   }
     * })
     * 
     */
    delete<T extends ZapRunOutboxDeleteArgs>(args: SelectSubset<T, ZapRunOutboxDeleteArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZapRunOutbox.
     * @param {ZapRunOutboxUpdateArgs} args - Arguments to update one ZapRunOutbox.
     * @example
     * // Update one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZapRunOutboxUpdateArgs>(args: SelectSubset<T, ZapRunOutboxUpdateArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZapRunOutboxes.
     * @param {ZapRunOutboxDeleteManyArgs} args - Arguments to filter ZapRunOutboxes to delete.
     * @example
     * // Delete a few ZapRunOutboxes
     * const { count } = await prisma.zapRunOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZapRunOutboxDeleteManyArgs>(args?: SelectSubset<T, ZapRunOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRunOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZapRunOutboxUpdateManyArgs>(args: SelectSubset<T, ZapRunOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRunOutboxes and returns the data updated in the database.
     * @param {ZapRunOutboxUpdateManyAndReturnArgs} args - Arguments to update many ZapRunOutboxes.
     * @example
     * // Update many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ZapRunOutboxes and only return the `id`
     * const zapRunOutboxWithIdOnly = await prisma.zapRunOutbox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ZapRunOutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, ZapRunOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ZapRunOutbox.
     * @param {ZapRunOutboxUpsertArgs} args - Arguments to update or create a ZapRunOutbox.
     * @example
     * // Update or create a ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.upsert({
     *   create: {
     *     // ... data to create a ZapRunOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZapRunOutbox we want to update
     *   }
     * })
     */
    upsert<T extends ZapRunOutboxUpsertArgs>(args: SelectSubset<T, ZapRunOutboxUpsertArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZapRunOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxCountArgs} args - Arguments to filter ZapRunOutboxes to count.
     * @example
     * // Count the number of ZapRunOutboxes
     * const count = await prisma.zapRunOutbox.count({
     *   where: {
     *     // ... the filter for the ZapRunOutboxes we want to count
     *   }
     * })
    **/
    count<T extends ZapRunOutboxCountArgs>(
      args?: Subset<T, ZapRunOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZapRunOutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZapRunOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZapRunOutboxAggregateArgs>(args: Subset<T, ZapRunOutboxAggregateArgs>): Prisma.PrismaPromise<GetZapRunOutboxAggregateType<T>>

    /**
     * Group by ZapRunOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZapRunOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapRunOutboxGroupByArgs['orderBy'] }
        : { orderBy?: ZapRunOutboxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZapRunOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapRunOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ZapRunOutbox model
   */
  readonly fields: ZapRunOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZapRunOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapRunOutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zapRun<T extends ZapRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapRunDefaultArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ZapRunOutbox model
   */
  interface ZapRunOutboxFieldRefs {
    readonly id: FieldRef<"ZapRunOutbox", 'String'>
    readonly zapRunId: FieldRef<"ZapRunOutbox", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ZapRunOutbox findUnique
   */
  export type ZapRunOutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which ZapRunOutbox to fetch.
     */
    where: ZapRunOutboxWhereUniqueInput
  }

  /**
   * ZapRunOutbox findUniqueOrThrow
   */
  export type ZapRunOutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which ZapRunOutbox to fetch.
     */
    where: ZapRunOutboxWhereUniqueInput
  }

  /**
   * ZapRunOutbox findFirst
   */
  export type ZapRunOutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which ZapRunOutbox to fetch.
     */
    where?: ZapRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRunOutboxes to fetch.
     */
    orderBy?: ZapRunOutboxOrderByWithRelationInput | ZapRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZapRunOutboxes.
     */
    cursor?: ZapRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZapRunOutboxes.
     */
    distinct?: ZapRunOutboxScalarFieldEnum | ZapRunOutboxScalarFieldEnum[]
  }

  /**
   * ZapRunOutbox findFirstOrThrow
   */
  export type ZapRunOutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which ZapRunOutbox to fetch.
     */
    where?: ZapRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRunOutboxes to fetch.
     */
    orderBy?: ZapRunOutboxOrderByWithRelationInput | ZapRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZapRunOutboxes.
     */
    cursor?: ZapRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZapRunOutboxes.
     */
    distinct?: ZapRunOutboxScalarFieldEnum | ZapRunOutboxScalarFieldEnum[]
  }

  /**
   * ZapRunOutbox findMany
   */
  export type ZapRunOutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which ZapRunOutboxes to fetch.
     */
    where?: ZapRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRunOutboxes to fetch.
     */
    orderBy?: ZapRunOutboxOrderByWithRelationInput | ZapRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZapRunOutboxes.
     */
    cursor?: ZapRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRunOutboxes.
     */
    skip?: number
    distinct?: ZapRunOutboxScalarFieldEnum | ZapRunOutboxScalarFieldEnum[]
  }

  /**
   * ZapRunOutbox create
   */
  export type ZapRunOutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * The data needed to create a ZapRunOutbox.
     */
    data: XOR<ZapRunOutboxCreateInput, ZapRunOutboxUncheckedCreateInput>
  }

  /**
   * ZapRunOutbox createMany
   */
  export type ZapRunOutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZapRunOutboxes.
     */
    data: ZapRunOutboxCreateManyInput | ZapRunOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZapRunOutbox createManyAndReturn
   */
  export type ZapRunOutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * The data used to create many ZapRunOutboxes.
     */
    data: ZapRunOutboxCreateManyInput | ZapRunOutboxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZapRunOutbox update
   */
  export type ZapRunOutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * The data needed to update a ZapRunOutbox.
     */
    data: XOR<ZapRunOutboxUpdateInput, ZapRunOutboxUncheckedUpdateInput>
    /**
     * Choose, which ZapRunOutbox to update.
     */
    where: ZapRunOutboxWhereUniqueInput
  }

  /**
   * ZapRunOutbox updateMany
   */
  export type ZapRunOutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ZapRunOutboxes.
     */
    data: XOR<ZapRunOutboxUpdateManyMutationInput, ZapRunOutboxUncheckedUpdateManyInput>
    /**
     * Filter which ZapRunOutboxes to update
     */
    where?: ZapRunOutboxWhereInput
    /**
     * Limit how many ZapRunOutboxes to update.
     */
    limit?: number
  }

  /**
   * ZapRunOutbox updateManyAndReturn
   */
  export type ZapRunOutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * The data used to update ZapRunOutboxes.
     */
    data: XOR<ZapRunOutboxUpdateManyMutationInput, ZapRunOutboxUncheckedUpdateManyInput>
    /**
     * Filter which ZapRunOutboxes to update
     */
    where?: ZapRunOutboxWhereInput
    /**
     * Limit how many ZapRunOutboxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZapRunOutbox upsert
   */
  export type ZapRunOutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * The filter to search for the ZapRunOutbox to update in case it exists.
     */
    where: ZapRunOutboxWhereUniqueInput
    /**
     * In case the ZapRunOutbox found by the `where` argument doesn't exist, create a new ZapRunOutbox with this data.
     */
    create: XOR<ZapRunOutboxCreateInput, ZapRunOutboxUncheckedCreateInput>
    /**
     * In case the ZapRunOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZapRunOutboxUpdateInput, ZapRunOutboxUncheckedUpdateInput>
  }

  /**
   * ZapRunOutbox delete
   */
  export type ZapRunOutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter which ZapRunOutbox to delete.
     */
    where: ZapRunOutboxWhereUniqueInput
  }

  /**
   * ZapRunOutbox deleteMany
   */
  export type ZapRunOutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZapRunOutboxes to delete
     */
    where?: ZapRunOutboxWhereInput
    /**
     * Limit how many ZapRunOutboxes to delete.
     */
    limit?: number
  }

  /**
   * ZapRunOutbox without action
   */
  export type ZapRunOutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ZapScalarFieldEnum: {
    id: 'id',
    triggerId: 'triggerId'
  };

  export type ZapScalarFieldEnum = (typeof ZapScalarFieldEnum)[keyof typeof ZapScalarFieldEnum]


  export const TriggerScalarFieldEnum: {
    id: 'id',
    zapId: 'zapId',
    triggerId: 'triggerId'
  };

  export type TriggerScalarFieldEnum = (typeof TriggerScalarFieldEnum)[keyof typeof TriggerScalarFieldEnum]


  export const TriggerTypeScalarFieldEnum: {
    id: 'id',
    triggerType: 'triggerType'
  };

  export type TriggerTypeScalarFieldEnum = (typeof TriggerTypeScalarFieldEnum)[keyof typeof TriggerTypeScalarFieldEnum]


  export const ActionScalarFieldEnum: {
    id: 'id',
    actionId: 'actionId',
    zapId: 'zapId',
    executionOrder: 'executionOrder'
  };

  export type ActionScalarFieldEnum = (typeof ActionScalarFieldEnum)[keyof typeof ActionScalarFieldEnum]


  export const ActionTypeScalarFieldEnum: {
    id: 'id',
    actionType: 'actionType'
  };

  export type ActionTypeScalarFieldEnum = (typeof ActionTypeScalarFieldEnum)[keyof typeof ActionTypeScalarFieldEnum]


  export const ZapRunScalarFieldEnum: {
    id: 'id',
    zapId: 'zapId',
    metaData: 'metaData'
  };

  export type ZapRunScalarFieldEnum = (typeof ZapRunScalarFieldEnum)[keyof typeof ZapRunScalarFieldEnum]


  export const ZapRunOutboxScalarFieldEnum: {
    id: 'id',
    zapRunId: 'zapRunId'
  };

  export type ZapRunOutboxScalarFieldEnum = (typeof ZapRunOutboxScalarFieldEnum)[keyof typeof ZapRunOutboxScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ZapWhereInput = {
    AND?: ZapWhereInput | ZapWhereInput[]
    OR?: ZapWhereInput[]
    NOT?: ZapWhereInput | ZapWhereInput[]
    id?: StringFilter<"Zap"> | string
    triggerId?: StringNullableFilter<"Zap"> | string | null
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    action?: ActionListRelationFilter
    zapRuns?: ZapRunListRelationFilter
  }

  export type ZapOrderByWithRelationInput = {
    id?: SortOrder
    triggerId?: SortOrderInput | SortOrder
    trigger?: TriggerOrderByWithRelationInput
    action?: ActionOrderByRelationAggregateInput
    zapRuns?: ZapRunOrderByRelationAggregateInput
  }

  export type ZapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ZapWhereInput | ZapWhereInput[]
    OR?: ZapWhereInput[]
    NOT?: ZapWhereInput | ZapWhereInput[]
    triggerId?: StringNullableFilter<"Zap"> | string | null
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    action?: ActionListRelationFilter
    zapRuns?: ZapRunListRelationFilter
  }, "id">

  export type ZapOrderByWithAggregationInput = {
    id?: SortOrder
    triggerId?: SortOrderInput | SortOrder
    _count?: ZapCountOrderByAggregateInput
    _max?: ZapMaxOrderByAggregateInput
    _min?: ZapMinOrderByAggregateInput
  }

  export type ZapScalarWhereWithAggregatesInput = {
    AND?: ZapScalarWhereWithAggregatesInput | ZapScalarWhereWithAggregatesInput[]
    OR?: ZapScalarWhereWithAggregatesInput[]
    NOT?: ZapScalarWhereWithAggregatesInput | ZapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Zap"> | string
    triggerId?: StringNullableWithAggregatesFilter<"Zap"> | string | null
  }

  export type TriggerWhereInput = {
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    id?: StringFilter<"Trigger"> | string
    zapId?: StringFilter<"Trigger"> | string
    triggerId?: StringFilter<"Trigger"> | string
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
    triggerType?: XOR<TriggerTypeScalarRelationFilter, TriggerTypeWhereInput>
  }

  export type TriggerOrderByWithRelationInput = {
    id?: SortOrder
    zapId?: SortOrder
    triggerId?: SortOrder
    zap?: ZapOrderByWithRelationInput
    triggerType?: TriggerTypeOrderByWithRelationInput
  }

  export type TriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    zapId?: string
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    triggerId?: StringFilter<"Trigger"> | string
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
    triggerType?: XOR<TriggerTypeScalarRelationFilter, TriggerTypeWhereInput>
  }, "id" | "zapId">

  export type TriggerOrderByWithAggregationInput = {
    id?: SortOrder
    zapId?: SortOrder
    triggerId?: SortOrder
    _count?: TriggerCountOrderByAggregateInput
    _max?: TriggerMaxOrderByAggregateInput
    _min?: TriggerMinOrderByAggregateInput
  }

  export type TriggerScalarWhereWithAggregatesInput = {
    AND?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    OR?: TriggerScalarWhereWithAggregatesInput[]
    NOT?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trigger"> | string
    zapId?: StringWithAggregatesFilter<"Trigger"> | string
    triggerId?: StringWithAggregatesFilter<"Trigger"> | string
  }

  export type TriggerTypeWhereInput = {
    AND?: TriggerTypeWhereInput | TriggerTypeWhereInput[]
    OR?: TriggerTypeWhereInput[]
    NOT?: TriggerTypeWhereInput | TriggerTypeWhereInput[]
    id?: StringFilter<"TriggerType"> | string
    triggerType?: StringFilter<"TriggerType"> | string
    triggers?: TriggerListRelationFilter
  }

  export type TriggerTypeOrderByWithRelationInput = {
    id?: SortOrder
    triggerType?: SortOrder
    triggers?: TriggerOrderByRelationAggregateInput
  }

  export type TriggerTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TriggerTypeWhereInput | TriggerTypeWhereInput[]
    OR?: TriggerTypeWhereInput[]
    NOT?: TriggerTypeWhereInput | TriggerTypeWhereInput[]
    triggerType?: StringFilter<"TriggerType"> | string
    triggers?: TriggerListRelationFilter
  }, "id">

  export type TriggerTypeOrderByWithAggregationInput = {
    id?: SortOrder
    triggerType?: SortOrder
    _count?: TriggerTypeCountOrderByAggregateInput
    _max?: TriggerTypeMaxOrderByAggregateInput
    _min?: TriggerTypeMinOrderByAggregateInput
  }

  export type TriggerTypeScalarWhereWithAggregatesInput = {
    AND?: TriggerTypeScalarWhereWithAggregatesInput | TriggerTypeScalarWhereWithAggregatesInput[]
    OR?: TriggerTypeScalarWhereWithAggregatesInput[]
    NOT?: TriggerTypeScalarWhereWithAggregatesInput | TriggerTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TriggerType"> | string
    triggerType?: StringWithAggregatesFilter<"TriggerType"> | string
  }

  export type ActionWhereInput = {
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    id?: StringFilter<"Action"> | string
    actionId?: StringFilter<"Action"> | string
    zapId?: StringFilter<"Action"> | string
    executionOrder?: IntFilter<"Action"> | number
    actionType?: XOR<ActionTypeScalarRelationFilter, ActionTypeWhereInput>
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
  }

  export type ActionOrderByWithRelationInput = {
    id?: SortOrder
    actionId?: SortOrder
    zapId?: SortOrder
    executionOrder?: SortOrder
    actionType?: ActionTypeOrderByWithRelationInput
    zap?: ZapOrderByWithRelationInput
  }

  export type ActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    actionId?: StringFilter<"Action"> | string
    zapId?: StringFilter<"Action"> | string
    executionOrder?: IntFilter<"Action"> | number
    actionType?: XOR<ActionTypeScalarRelationFilter, ActionTypeWhereInput>
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
  }, "id">

  export type ActionOrderByWithAggregationInput = {
    id?: SortOrder
    actionId?: SortOrder
    zapId?: SortOrder
    executionOrder?: SortOrder
    _count?: ActionCountOrderByAggregateInput
    _avg?: ActionAvgOrderByAggregateInput
    _max?: ActionMaxOrderByAggregateInput
    _min?: ActionMinOrderByAggregateInput
    _sum?: ActionSumOrderByAggregateInput
  }

  export type ActionScalarWhereWithAggregatesInput = {
    AND?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    OR?: ActionScalarWhereWithAggregatesInput[]
    NOT?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Action"> | string
    actionId?: StringWithAggregatesFilter<"Action"> | string
    zapId?: StringWithAggregatesFilter<"Action"> | string
    executionOrder?: IntWithAggregatesFilter<"Action"> | number
  }

  export type ActionTypeWhereInput = {
    AND?: ActionTypeWhereInput | ActionTypeWhereInput[]
    OR?: ActionTypeWhereInput[]
    NOT?: ActionTypeWhereInput | ActionTypeWhereInput[]
    id?: StringFilter<"ActionType"> | string
    actionType?: StringFilter<"ActionType"> | string
    action?: ActionListRelationFilter
  }

  export type ActionTypeOrderByWithRelationInput = {
    id?: SortOrder
    actionType?: SortOrder
    action?: ActionOrderByRelationAggregateInput
  }

  export type ActionTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionTypeWhereInput | ActionTypeWhereInput[]
    OR?: ActionTypeWhereInput[]
    NOT?: ActionTypeWhereInput | ActionTypeWhereInput[]
    actionType?: StringFilter<"ActionType"> | string
    action?: ActionListRelationFilter
  }, "id">

  export type ActionTypeOrderByWithAggregationInput = {
    id?: SortOrder
    actionType?: SortOrder
    _count?: ActionTypeCountOrderByAggregateInput
    _max?: ActionTypeMaxOrderByAggregateInput
    _min?: ActionTypeMinOrderByAggregateInput
  }

  export type ActionTypeScalarWhereWithAggregatesInput = {
    AND?: ActionTypeScalarWhereWithAggregatesInput | ActionTypeScalarWhereWithAggregatesInput[]
    OR?: ActionTypeScalarWhereWithAggregatesInput[]
    NOT?: ActionTypeScalarWhereWithAggregatesInput | ActionTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActionType"> | string
    actionType?: StringWithAggregatesFilter<"ActionType"> | string
  }

  export type ZapRunWhereInput = {
    AND?: ZapRunWhereInput | ZapRunWhereInput[]
    OR?: ZapRunWhereInput[]
    NOT?: ZapRunWhereInput | ZapRunWhereInput[]
    id?: StringFilter<"ZapRun"> | string
    zapId?: StringFilter<"ZapRun"> | string
    metaData?: JsonFilter<"ZapRun">
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
    zapRunOutbox?: XOR<ZapRunOutboxNullableScalarRelationFilter, ZapRunOutboxWhereInput> | null
  }

  export type ZapRunOrderByWithRelationInput = {
    id?: SortOrder
    zapId?: SortOrder
    metaData?: SortOrder
    zap?: ZapOrderByWithRelationInput
    zapRunOutbox?: ZapRunOutboxOrderByWithRelationInput
  }

  export type ZapRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ZapRunWhereInput | ZapRunWhereInput[]
    OR?: ZapRunWhereInput[]
    NOT?: ZapRunWhereInput | ZapRunWhereInput[]
    zapId?: StringFilter<"ZapRun"> | string
    metaData?: JsonFilter<"ZapRun">
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
    zapRunOutbox?: XOR<ZapRunOutboxNullableScalarRelationFilter, ZapRunOutboxWhereInput> | null
  }, "id">

  export type ZapRunOrderByWithAggregationInput = {
    id?: SortOrder
    zapId?: SortOrder
    metaData?: SortOrder
    _count?: ZapRunCountOrderByAggregateInput
    _max?: ZapRunMaxOrderByAggregateInput
    _min?: ZapRunMinOrderByAggregateInput
  }

  export type ZapRunScalarWhereWithAggregatesInput = {
    AND?: ZapRunScalarWhereWithAggregatesInput | ZapRunScalarWhereWithAggregatesInput[]
    OR?: ZapRunScalarWhereWithAggregatesInput[]
    NOT?: ZapRunScalarWhereWithAggregatesInput | ZapRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ZapRun"> | string
    zapId?: StringWithAggregatesFilter<"ZapRun"> | string
    metaData?: JsonWithAggregatesFilter<"ZapRun">
  }

  export type ZapRunOutboxWhereInput = {
    AND?: ZapRunOutboxWhereInput | ZapRunOutboxWhereInput[]
    OR?: ZapRunOutboxWhereInput[]
    NOT?: ZapRunOutboxWhereInput | ZapRunOutboxWhereInput[]
    id?: StringFilter<"ZapRunOutbox"> | string
    zapRunId?: StringFilter<"ZapRunOutbox"> | string
    zapRun?: XOR<ZapRunScalarRelationFilter, ZapRunWhereInput>
  }

  export type ZapRunOutboxOrderByWithRelationInput = {
    id?: SortOrder
    zapRunId?: SortOrder
    zapRun?: ZapRunOrderByWithRelationInput
  }

  export type ZapRunOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    zapRunId?: string
    AND?: ZapRunOutboxWhereInput | ZapRunOutboxWhereInput[]
    OR?: ZapRunOutboxWhereInput[]
    NOT?: ZapRunOutboxWhereInput | ZapRunOutboxWhereInput[]
    zapRun?: XOR<ZapRunScalarRelationFilter, ZapRunWhereInput>
  }, "id" | "zapRunId">

  export type ZapRunOutboxOrderByWithAggregationInput = {
    id?: SortOrder
    zapRunId?: SortOrder
    _count?: ZapRunOutboxCountOrderByAggregateInput
    _max?: ZapRunOutboxMaxOrderByAggregateInput
    _min?: ZapRunOutboxMinOrderByAggregateInput
  }

  export type ZapRunOutboxScalarWhereWithAggregatesInput = {
    AND?: ZapRunOutboxScalarWhereWithAggregatesInput | ZapRunOutboxScalarWhereWithAggregatesInput[]
    OR?: ZapRunOutboxScalarWhereWithAggregatesInput[]
    NOT?: ZapRunOutboxScalarWhereWithAggregatesInput | ZapRunOutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ZapRunOutbox"> | string
    zapRunId?: StringWithAggregatesFilter<"ZapRunOutbox"> | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ZapCreateInput = {
    id?: string
    triggerId?: string | null
    trigger?: TriggerCreateNestedOneWithoutZapInput
    action?: ActionCreateNestedManyWithoutZapInput
    zapRuns?: ZapRunCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateInput = {
    id?: string
    triggerId?: string | null
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    action?: ActionUncheckedCreateNestedManyWithoutZapInput
    zapRuns?: ZapRunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    action?: ActionUpdateManyWithoutZapNestedInput
    zapRuns?: ZapRunUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    action?: ActionUncheckedUpdateManyWithoutZapNestedInput
    zapRuns?: ZapRunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type ZapCreateManyInput = {
    id?: string
    triggerId?: string | null
  }

  export type ZapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ZapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TriggerCreateInput = {
    id?: string
    zap: ZapCreateNestedOneWithoutTriggerInput
    triggerType: TriggerTypeCreateNestedOneWithoutTriggersInput
  }

  export type TriggerUncheckedCreateInput = {
    id?: string
    zapId: string
    triggerId: string
  }

  export type TriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zap?: ZapUpdateOneRequiredWithoutTriggerNestedInput
    triggerType?: TriggerTypeUpdateOneRequiredWithoutTriggersNestedInput
  }

  export type TriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateManyInput = {
    id?: string
    zapId: string
    triggerId: string
  }

  export type TriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerTypeCreateInput = {
    id?: string
    triggerType: string
    triggers?: TriggerCreateNestedManyWithoutTriggerTypeInput
  }

  export type TriggerTypeUncheckedCreateInput = {
    id?: string
    triggerType: string
    triggers?: TriggerUncheckedCreateNestedManyWithoutTriggerTypeInput
  }

  export type TriggerTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    triggers?: TriggerUpdateManyWithoutTriggerTypeNestedInput
  }

  export type TriggerTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    triggers?: TriggerUncheckedUpdateManyWithoutTriggerTypeNestedInput
  }

  export type TriggerTypeCreateManyInput = {
    id?: string
    triggerType: string
  }

  export type TriggerTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateInput = {
    id?: string
    executionOrder?: number
    actionType: ActionTypeCreateNestedOneWithoutActionInput
    zap: ZapCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateInput = {
    id?: string
    actionId: string
    zapId: string
    executionOrder?: number
  }

  export type ActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    executionOrder?: IntFieldUpdateOperationsInput | number
    actionType?: ActionTypeUpdateOneRequiredWithoutActionNestedInput
    zap?: ZapUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    executionOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionCreateManyInput = {
    id?: string
    actionId: string
    zapId: string
    executionOrder?: number
  }

  export type ActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    executionOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    executionOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionTypeCreateInput = {
    id?: string
    actionType: string
    action?: ActionCreateNestedManyWithoutActionTypeInput
  }

  export type ActionTypeUncheckedCreateInput = {
    id?: string
    actionType: string
    action?: ActionUncheckedCreateNestedManyWithoutActionTypeInput
  }

  export type ActionTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    action?: ActionUpdateManyWithoutActionTypeNestedInput
  }

  export type ActionTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    action?: ActionUncheckedUpdateManyWithoutActionTypeNestedInput
  }

  export type ActionTypeCreateManyInput = {
    id?: string
    actionType: string
  }

  export type ActionTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
  }

  export type ActionTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
  }

  export type ZapRunCreateInput = {
    id?: string
    metaData: JsonNullValueInput | InputJsonValue
    zap: ZapCreateNestedOneWithoutZapRunsInput
    zapRunOutbox?: ZapRunOutboxCreateNestedOneWithoutZapRunInput
  }

  export type ZapRunUncheckedCreateInput = {
    id?: string
    zapId: string
    metaData: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: ZapRunOutboxUncheckedCreateNestedOneWithoutZapRunInput
  }

  export type ZapRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
    zap?: ZapUpdateOneRequiredWithoutZapRunsNestedInput
    zapRunOutbox?: ZapRunOutboxUpdateOneWithoutZapRunNestedInput
  }

  export type ZapRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: ZapRunOutboxUncheckedUpdateOneWithoutZapRunNestedInput
  }

  export type ZapRunCreateManyInput = {
    id?: string
    zapId: string
    metaData: JsonNullValueInput | InputJsonValue
  }

  export type ZapRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
  }

  export type ZapRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
  }

  export type ZapRunOutboxCreateInput = {
    id?: string
    zapRun: ZapRunCreateNestedOneWithoutZapRunOutboxInput
  }

  export type ZapRunOutboxUncheckedCreateInput = {
    id?: string
    zapRunId: string
  }

  export type ZapRunOutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapRun?: ZapRunUpdateOneRequiredWithoutZapRunOutboxNestedInput
  }

  export type ZapRunOutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapRunId?: StringFieldUpdateOperationsInput | string
  }

  export type ZapRunOutboxCreateManyInput = {
    id?: string
    zapRunId: string
  }

  export type ZapRunOutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ZapRunOutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapRunId?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TriggerNullableScalarRelationFilter = {
    is?: TriggerWhereInput | null
    isNot?: TriggerWhereInput | null
  }

  export type ActionListRelationFilter = {
    every?: ActionWhereInput
    some?: ActionWhereInput
    none?: ActionWhereInput
  }

  export type ZapRunListRelationFilter = {
    every?: ZapRunWhereInput
    some?: ZapRunWhereInput
    none?: ZapRunWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZapRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZapCountOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
  }

  export type ZapMaxOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
  }

  export type ZapMinOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ZapScalarRelationFilter = {
    is?: ZapWhereInput
    isNot?: ZapWhereInput
  }

  export type TriggerTypeScalarRelationFilter = {
    is?: TriggerTypeWhereInput
    isNot?: TriggerTypeWhereInput
  }

  export type TriggerCountOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerMinOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerListRelationFilter = {
    every?: TriggerWhereInput
    some?: TriggerWhereInput
    none?: TriggerWhereInput
  }

  export type TriggerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriggerTypeCountOrderByAggregateInput = {
    id?: SortOrder
    triggerType?: SortOrder
  }

  export type TriggerTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    triggerType?: SortOrder
  }

  export type TriggerTypeMinOrderByAggregateInput = {
    id?: SortOrder
    triggerType?: SortOrder
  }

  export type ActionTypeScalarRelationFilter = {
    is?: ActionTypeWhereInput
    isNot?: ActionTypeWhereInput
  }

  export type ActionCountOrderByAggregateInput = {
    id?: SortOrder
    actionId?: SortOrder
    zapId?: SortOrder
    executionOrder?: SortOrder
  }

  export type ActionAvgOrderByAggregateInput = {
    executionOrder?: SortOrder
  }

  export type ActionMaxOrderByAggregateInput = {
    id?: SortOrder
    actionId?: SortOrder
    zapId?: SortOrder
    executionOrder?: SortOrder
  }

  export type ActionMinOrderByAggregateInput = {
    id?: SortOrder
    actionId?: SortOrder
    zapId?: SortOrder
    executionOrder?: SortOrder
  }

  export type ActionSumOrderByAggregateInput = {
    executionOrder?: SortOrder
  }

  export type ActionTypeCountOrderByAggregateInput = {
    id?: SortOrder
    actionType?: SortOrder
  }

  export type ActionTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    actionType?: SortOrder
  }

  export type ActionTypeMinOrderByAggregateInput = {
    id?: SortOrder
    actionType?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ZapRunOutboxNullableScalarRelationFilter = {
    is?: ZapRunOutboxWhereInput | null
    isNot?: ZapRunOutboxWhereInput | null
  }

  export type ZapRunCountOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    metaData?: SortOrder
  }

  export type ZapRunMaxOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
  }

  export type ZapRunMinOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ZapRunScalarRelationFilter = {
    is?: ZapRunWhereInput
    isNot?: ZapRunWhereInput
  }

  export type ZapRunOutboxCountOrderByAggregateInput = {
    id?: SortOrder
    zapRunId?: SortOrder
  }

  export type ZapRunOutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    zapRunId?: SortOrder
  }

  export type ZapRunOutboxMinOrderByAggregateInput = {
    id?: SortOrder
    zapRunId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TriggerCreateNestedOneWithoutZapInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionCreateNestedManyWithoutZapInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ZapRunCreateNestedManyWithoutZapInput = {
    create?: XOR<ZapRunCreateWithoutZapInput, ZapRunUncheckedCreateWithoutZapInput> | ZapRunCreateWithoutZapInput[] | ZapRunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ZapRunCreateOrConnectWithoutZapInput | ZapRunCreateOrConnectWithoutZapInput[]
    createMany?: ZapRunCreateManyZapInputEnvelope
    connect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedOneWithoutZapInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionUncheckedCreateNestedManyWithoutZapInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ZapRunUncheckedCreateNestedManyWithoutZapInput = {
    create?: XOR<ZapRunCreateWithoutZapInput, ZapRunUncheckedCreateWithoutZapInput> | ZapRunCreateWithoutZapInput[] | ZapRunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ZapRunCreateOrConnectWithoutZapInput | ZapRunCreateOrConnectWithoutZapInput[]
    createMany?: ZapRunCreateManyZapInputEnvelope
    connect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TriggerUpdateOneWithoutZapNestedInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    upsert?: TriggerUpsertWithoutZapInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutZapInput, TriggerUpdateWithoutZapInput>, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type ActionUpdateManyWithoutZapNestedInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutZapInput | ActionUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutZapInput | ActionUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutZapInput | ActionUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ZapRunUpdateManyWithoutZapNestedInput = {
    create?: XOR<ZapRunCreateWithoutZapInput, ZapRunUncheckedCreateWithoutZapInput> | ZapRunCreateWithoutZapInput[] | ZapRunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ZapRunCreateOrConnectWithoutZapInput | ZapRunCreateOrConnectWithoutZapInput[]
    upsert?: ZapRunUpsertWithWhereUniqueWithoutZapInput | ZapRunUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ZapRunCreateManyZapInputEnvelope
    set?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
    disconnect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
    delete?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
    connect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
    update?: ZapRunUpdateWithWhereUniqueWithoutZapInput | ZapRunUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ZapRunUpdateManyWithWhereWithoutZapInput | ZapRunUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ZapRunScalarWhereInput | ZapRunScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateOneWithoutZapNestedInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    upsert?: TriggerUpsertWithoutZapInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutZapInput, TriggerUpdateWithoutZapInput>, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type ActionUncheckedUpdateManyWithoutZapNestedInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutZapInput | ActionUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutZapInput | ActionUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutZapInput | ActionUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ZapRunUncheckedUpdateManyWithoutZapNestedInput = {
    create?: XOR<ZapRunCreateWithoutZapInput, ZapRunUncheckedCreateWithoutZapInput> | ZapRunCreateWithoutZapInput[] | ZapRunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ZapRunCreateOrConnectWithoutZapInput | ZapRunCreateOrConnectWithoutZapInput[]
    upsert?: ZapRunUpsertWithWhereUniqueWithoutZapInput | ZapRunUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ZapRunCreateManyZapInputEnvelope
    set?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
    disconnect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
    delete?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
    connect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
    update?: ZapRunUpdateWithWhereUniqueWithoutZapInput | ZapRunUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ZapRunUpdateManyWithWhereWithoutZapInput | ZapRunUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ZapRunScalarWhereInput | ZapRunScalarWhereInput[]
  }

  export type ZapCreateNestedOneWithoutTriggerInput = {
    create?: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: ZapCreateOrConnectWithoutTriggerInput
    connect?: ZapWhereUniqueInput
  }

  export type TriggerTypeCreateNestedOneWithoutTriggersInput = {
    create?: XOR<TriggerTypeCreateWithoutTriggersInput, TriggerTypeUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: TriggerTypeCreateOrConnectWithoutTriggersInput
    connect?: TriggerTypeWhereUniqueInput
  }

  export type ZapUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: ZapCreateOrConnectWithoutTriggerInput
    upsert?: ZapUpsertWithoutTriggerInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutTriggerInput, ZapUpdateWithoutTriggerInput>, ZapUncheckedUpdateWithoutTriggerInput>
  }

  export type TriggerTypeUpdateOneRequiredWithoutTriggersNestedInput = {
    create?: XOR<TriggerTypeCreateWithoutTriggersInput, TriggerTypeUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: TriggerTypeCreateOrConnectWithoutTriggersInput
    upsert?: TriggerTypeUpsertWithoutTriggersInput
    connect?: TriggerTypeWhereUniqueInput
    update?: XOR<XOR<TriggerTypeUpdateToOneWithWhereWithoutTriggersInput, TriggerTypeUpdateWithoutTriggersInput>, TriggerTypeUncheckedUpdateWithoutTriggersInput>
  }

  export type TriggerCreateNestedManyWithoutTriggerTypeInput = {
    create?: XOR<TriggerCreateWithoutTriggerTypeInput, TriggerUncheckedCreateWithoutTriggerTypeInput> | TriggerCreateWithoutTriggerTypeInput[] | TriggerUncheckedCreateWithoutTriggerTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTriggerTypeInput | TriggerCreateOrConnectWithoutTriggerTypeInput[]
    createMany?: TriggerCreateManyTriggerTypeInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedManyWithoutTriggerTypeInput = {
    create?: XOR<TriggerCreateWithoutTriggerTypeInput, TriggerUncheckedCreateWithoutTriggerTypeInput> | TriggerCreateWithoutTriggerTypeInput[] | TriggerUncheckedCreateWithoutTriggerTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTriggerTypeInput | TriggerCreateOrConnectWithoutTriggerTypeInput[]
    createMany?: TriggerCreateManyTriggerTypeInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type TriggerUpdateManyWithoutTriggerTypeNestedInput = {
    create?: XOR<TriggerCreateWithoutTriggerTypeInput, TriggerUncheckedCreateWithoutTriggerTypeInput> | TriggerCreateWithoutTriggerTypeInput[] | TriggerUncheckedCreateWithoutTriggerTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTriggerTypeInput | TriggerCreateOrConnectWithoutTriggerTypeInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutTriggerTypeInput | TriggerUpsertWithWhereUniqueWithoutTriggerTypeInput[]
    createMany?: TriggerCreateManyTriggerTypeInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutTriggerTypeInput | TriggerUpdateWithWhereUniqueWithoutTriggerTypeInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutTriggerTypeInput | TriggerUpdateManyWithWhereWithoutTriggerTypeInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateManyWithoutTriggerTypeNestedInput = {
    create?: XOR<TriggerCreateWithoutTriggerTypeInput, TriggerUncheckedCreateWithoutTriggerTypeInput> | TriggerCreateWithoutTriggerTypeInput[] | TriggerUncheckedCreateWithoutTriggerTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTriggerTypeInput | TriggerCreateOrConnectWithoutTriggerTypeInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutTriggerTypeInput | TriggerUpsertWithWhereUniqueWithoutTriggerTypeInput[]
    createMany?: TriggerCreateManyTriggerTypeInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutTriggerTypeInput | TriggerUpdateWithWhereUniqueWithoutTriggerTypeInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutTriggerTypeInput | TriggerUpdateManyWithWhereWithoutTriggerTypeInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type ActionTypeCreateNestedOneWithoutActionInput = {
    create?: XOR<ActionTypeCreateWithoutActionInput, ActionTypeUncheckedCreateWithoutActionInput>
    connectOrCreate?: ActionTypeCreateOrConnectWithoutActionInput
    connect?: ActionTypeWhereUniqueInput
  }

  export type ZapCreateNestedOneWithoutActionInput = {
    create?: XOR<ZapCreateWithoutActionInput, ZapUncheckedCreateWithoutActionInput>
    connectOrCreate?: ZapCreateOrConnectWithoutActionInput
    connect?: ZapWhereUniqueInput
  }

  export type ActionTypeUpdateOneRequiredWithoutActionNestedInput = {
    create?: XOR<ActionTypeCreateWithoutActionInput, ActionTypeUncheckedCreateWithoutActionInput>
    connectOrCreate?: ActionTypeCreateOrConnectWithoutActionInput
    upsert?: ActionTypeUpsertWithoutActionInput
    connect?: ActionTypeWhereUniqueInput
    update?: XOR<XOR<ActionTypeUpdateToOneWithWhereWithoutActionInput, ActionTypeUpdateWithoutActionInput>, ActionTypeUncheckedUpdateWithoutActionInput>
  }

  export type ZapUpdateOneRequiredWithoutActionNestedInput = {
    create?: XOR<ZapCreateWithoutActionInput, ZapUncheckedCreateWithoutActionInput>
    connectOrCreate?: ZapCreateOrConnectWithoutActionInput
    upsert?: ZapUpsertWithoutActionInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutActionInput, ZapUpdateWithoutActionInput>, ZapUncheckedUpdateWithoutActionInput>
  }

  export type ActionCreateNestedManyWithoutActionTypeInput = {
    create?: XOR<ActionCreateWithoutActionTypeInput, ActionUncheckedCreateWithoutActionTypeInput> | ActionCreateWithoutActionTypeInput[] | ActionUncheckedCreateWithoutActionTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutActionTypeInput | ActionCreateOrConnectWithoutActionTypeInput[]
    createMany?: ActionCreateManyActionTypeInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ActionUncheckedCreateNestedManyWithoutActionTypeInput = {
    create?: XOR<ActionCreateWithoutActionTypeInput, ActionUncheckedCreateWithoutActionTypeInput> | ActionCreateWithoutActionTypeInput[] | ActionUncheckedCreateWithoutActionTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutActionTypeInput | ActionCreateOrConnectWithoutActionTypeInput[]
    createMany?: ActionCreateManyActionTypeInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ActionUpdateManyWithoutActionTypeNestedInput = {
    create?: XOR<ActionCreateWithoutActionTypeInput, ActionUncheckedCreateWithoutActionTypeInput> | ActionCreateWithoutActionTypeInput[] | ActionUncheckedCreateWithoutActionTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutActionTypeInput | ActionCreateOrConnectWithoutActionTypeInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutActionTypeInput | ActionUpsertWithWhereUniqueWithoutActionTypeInput[]
    createMany?: ActionCreateManyActionTypeInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutActionTypeInput | ActionUpdateWithWhereUniqueWithoutActionTypeInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutActionTypeInput | ActionUpdateManyWithWhereWithoutActionTypeInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ActionUncheckedUpdateManyWithoutActionTypeNestedInput = {
    create?: XOR<ActionCreateWithoutActionTypeInput, ActionUncheckedCreateWithoutActionTypeInput> | ActionCreateWithoutActionTypeInput[] | ActionUncheckedCreateWithoutActionTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutActionTypeInput | ActionCreateOrConnectWithoutActionTypeInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutActionTypeInput | ActionUpsertWithWhereUniqueWithoutActionTypeInput[]
    createMany?: ActionCreateManyActionTypeInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutActionTypeInput | ActionUpdateWithWhereUniqueWithoutActionTypeInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutActionTypeInput | ActionUpdateManyWithWhereWithoutActionTypeInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ZapCreateNestedOneWithoutZapRunsInput = {
    create?: XOR<ZapCreateWithoutZapRunsInput, ZapUncheckedCreateWithoutZapRunsInput>
    connectOrCreate?: ZapCreateOrConnectWithoutZapRunsInput
    connect?: ZapWhereUniqueInput
  }

  export type ZapRunOutboxCreateNestedOneWithoutZapRunInput = {
    create?: XOR<ZapRunOutboxCreateWithoutZapRunInput, ZapRunOutboxUncheckedCreateWithoutZapRunInput>
    connectOrCreate?: ZapRunOutboxCreateOrConnectWithoutZapRunInput
    connect?: ZapRunOutboxWhereUniqueInput
  }

  export type ZapRunOutboxUncheckedCreateNestedOneWithoutZapRunInput = {
    create?: XOR<ZapRunOutboxCreateWithoutZapRunInput, ZapRunOutboxUncheckedCreateWithoutZapRunInput>
    connectOrCreate?: ZapRunOutboxCreateOrConnectWithoutZapRunInput
    connect?: ZapRunOutboxWhereUniqueInput
  }

  export type ZapUpdateOneRequiredWithoutZapRunsNestedInput = {
    create?: XOR<ZapCreateWithoutZapRunsInput, ZapUncheckedCreateWithoutZapRunsInput>
    connectOrCreate?: ZapCreateOrConnectWithoutZapRunsInput
    upsert?: ZapUpsertWithoutZapRunsInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutZapRunsInput, ZapUpdateWithoutZapRunsInput>, ZapUncheckedUpdateWithoutZapRunsInput>
  }

  export type ZapRunOutboxUpdateOneWithoutZapRunNestedInput = {
    create?: XOR<ZapRunOutboxCreateWithoutZapRunInput, ZapRunOutboxUncheckedCreateWithoutZapRunInput>
    connectOrCreate?: ZapRunOutboxCreateOrConnectWithoutZapRunInput
    upsert?: ZapRunOutboxUpsertWithoutZapRunInput
    disconnect?: ZapRunOutboxWhereInput | boolean
    delete?: ZapRunOutboxWhereInput | boolean
    connect?: ZapRunOutboxWhereUniqueInput
    update?: XOR<XOR<ZapRunOutboxUpdateToOneWithWhereWithoutZapRunInput, ZapRunOutboxUpdateWithoutZapRunInput>, ZapRunOutboxUncheckedUpdateWithoutZapRunInput>
  }

  export type ZapRunOutboxUncheckedUpdateOneWithoutZapRunNestedInput = {
    create?: XOR<ZapRunOutboxCreateWithoutZapRunInput, ZapRunOutboxUncheckedCreateWithoutZapRunInput>
    connectOrCreate?: ZapRunOutboxCreateOrConnectWithoutZapRunInput
    upsert?: ZapRunOutboxUpsertWithoutZapRunInput
    disconnect?: ZapRunOutboxWhereInput | boolean
    delete?: ZapRunOutboxWhereInput | boolean
    connect?: ZapRunOutboxWhereUniqueInput
    update?: XOR<XOR<ZapRunOutboxUpdateToOneWithWhereWithoutZapRunInput, ZapRunOutboxUpdateWithoutZapRunInput>, ZapRunOutboxUncheckedUpdateWithoutZapRunInput>
  }

  export type ZapRunCreateNestedOneWithoutZapRunOutboxInput = {
    create?: XOR<ZapRunCreateWithoutZapRunOutboxInput, ZapRunUncheckedCreateWithoutZapRunOutboxInput>
    connectOrCreate?: ZapRunCreateOrConnectWithoutZapRunOutboxInput
    connect?: ZapRunWhereUniqueInput
  }

  export type ZapRunUpdateOneRequiredWithoutZapRunOutboxNestedInput = {
    create?: XOR<ZapRunCreateWithoutZapRunOutboxInput, ZapRunUncheckedCreateWithoutZapRunOutboxInput>
    connectOrCreate?: ZapRunCreateOrConnectWithoutZapRunOutboxInput
    upsert?: ZapRunUpsertWithoutZapRunOutboxInput
    connect?: ZapRunWhereUniqueInput
    update?: XOR<XOR<ZapRunUpdateToOneWithWhereWithoutZapRunOutboxInput, ZapRunUpdateWithoutZapRunOutboxInput>, ZapRunUncheckedUpdateWithoutZapRunOutboxInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TriggerCreateWithoutZapInput = {
    id?: string
    triggerType: TriggerTypeCreateNestedOneWithoutTriggersInput
  }

  export type TriggerUncheckedCreateWithoutZapInput = {
    id?: string
    triggerId: string
  }

  export type TriggerCreateOrConnectWithoutZapInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
  }

  export type ActionCreateWithoutZapInput = {
    id?: string
    executionOrder?: number
    actionType: ActionTypeCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateWithoutZapInput = {
    id?: string
    actionId: string
    executionOrder?: number
  }

  export type ActionCreateOrConnectWithoutZapInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput>
  }

  export type ActionCreateManyZapInputEnvelope = {
    data: ActionCreateManyZapInput | ActionCreateManyZapInput[]
    skipDuplicates?: boolean
  }

  export type ZapRunCreateWithoutZapInput = {
    id?: string
    metaData: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: ZapRunOutboxCreateNestedOneWithoutZapRunInput
  }

  export type ZapRunUncheckedCreateWithoutZapInput = {
    id?: string
    metaData: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: ZapRunOutboxUncheckedCreateNestedOneWithoutZapRunInput
  }

  export type ZapRunCreateOrConnectWithoutZapInput = {
    where: ZapRunWhereUniqueInput
    create: XOR<ZapRunCreateWithoutZapInput, ZapRunUncheckedCreateWithoutZapInput>
  }

  export type ZapRunCreateManyZapInputEnvelope = {
    data: ZapRunCreateManyZapInput | ZapRunCreateManyZapInput[]
    skipDuplicates?: boolean
  }

  export type TriggerUpsertWithoutZapInput = {
    update: XOR<TriggerUpdateWithoutZapInput, TriggerUncheckedUpdateWithoutZapInput>
    create: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    where?: TriggerWhereInput
  }

  export type TriggerUpdateToOneWithWhereWithoutZapInput = {
    where?: TriggerWhereInput
    data: XOR<TriggerUpdateWithoutZapInput, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type TriggerUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerType?: TriggerTypeUpdateOneRequiredWithoutTriggersNestedInput
  }

  export type TriggerUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUpsertWithWhereUniqueWithoutZapInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutZapInput, ActionUncheckedUpdateWithoutZapInput>
    create: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutZapInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutZapInput, ActionUncheckedUpdateWithoutZapInput>
  }

  export type ActionUpdateManyWithWhereWithoutZapInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutZapInput>
  }

  export type ActionScalarWhereInput = {
    AND?: ActionScalarWhereInput | ActionScalarWhereInput[]
    OR?: ActionScalarWhereInput[]
    NOT?: ActionScalarWhereInput | ActionScalarWhereInput[]
    id?: StringFilter<"Action"> | string
    actionId?: StringFilter<"Action"> | string
    zapId?: StringFilter<"Action"> | string
    executionOrder?: IntFilter<"Action"> | number
  }

  export type ZapRunUpsertWithWhereUniqueWithoutZapInput = {
    where: ZapRunWhereUniqueInput
    update: XOR<ZapRunUpdateWithoutZapInput, ZapRunUncheckedUpdateWithoutZapInput>
    create: XOR<ZapRunCreateWithoutZapInput, ZapRunUncheckedCreateWithoutZapInput>
  }

  export type ZapRunUpdateWithWhereUniqueWithoutZapInput = {
    where: ZapRunWhereUniqueInput
    data: XOR<ZapRunUpdateWithoutZapInput, ZapRunUncheckedUpdateWithoutZapInput>
  }

  export type ZapRunUpdateManyWithWhereWithoutZapInput = {
    where: ZapRunScalarWhereInput
    data: XOR<ZapRunUpdateManyMutationInput, ZapRunUncheckedUpdateManyWithoutZapInput>
  }

  export type ZapRunScalarWhereInput = {
    AND?: ZapRunScalarWhereInput | ZapRunScalarWhereInput[]
    OR?: ZapRunScalarWhereInput[]
    NOT?: ZapRunScalarWhereInput | ZapRunScalarWhereInput[]
    id?: StringFilter<"ZapRun"> | string
    zapId?: StringFilter<"ZapRun"> | string
    metaData?: JsonFilter<"ZapRun">
  }

  export type ZapCreateWithoutTriggerInput = {
    id?: string
    triggerId?: string | null
    action?: ActionCreateNestedManyWithoutZapInput
    zapRuns?: ZapRunCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutTriggerInput = {
    id?: string
    triggerId?: string | null
    action?: ActionUncheckedCreateNestedManyWithoutZapInput
    zapRuns?: ZapRunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutTriggerInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
  }

  export type TriggerTypeCreateWithoutTriggersInput = {
    id?: string
    triggerType: string
  }

  export type TriggerTypeUncheckedCreateWithoutTriggersInput = {
    id?: string
    triggerType: string
  }

  export type TriggerTypeCreateOrConnectWithoutTriggersInput = {
    where: TriggerTypeWhereUniqueInput
    create: XOR<TriggerTypeCreateWithoutTriggersInput, TriggerTypeUncheckedCreateWithoutTriggersInput>
  }

  export type ZapUpsertWithoutTriggerInput = {
    update: XOR<ZapUpdateWithoutTriggerInput, ZapUncheckedUpdateWithoutTriggerInput>
    create: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutTriggerInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutTriggerInput, ZapUncheckedUpdateWithoutTriggerInput>
  }

  export type ZapUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: ActionUpdateManyWithoutZapNestedInput
    zapRuns?: ZapRunUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: ActionUncheckedUpdateManyWithoutZapNestedInput
    zapRuns?: ZapRunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type TriggerTypeUpsertWithoutTriggersInput = {
    update: XOR<TriggerTypeUpdateWithoutTriggersInput, TriggerTypeUncheckedUpdateWithoutTriggersInput>
    create: XOR<TriggerTypeCreateWithoutTriggersInput, TriggerTypeUncheckedCreateWithoutTriggersInput>
    where?: TriggerTypeWhereInput
  }

  export type TriggerTypeUpdateToOneWithWhereWithoutTriggersInput = {
    where?: TriggerTypeWhereInput
    data: XOR<TriggerTypeUpdateWithoutTriggersInput, TriggerTypeUncheckedUpdateWithoutTriggersInput>
  }

  export type TriggerTypeUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerTypeUncheckedUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateWithoutTriggerTypeInput = {
    id?: string
    zap: ZapCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutTriggerTypeInput = {
    id?: string
    zapId: string
  }

  export type TriggerCreateOrConnectWithoutTriggerTypeInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutTriggerTypeInput, TriggerUncheckedCreateWithoutTriggerTypeInput>
  }

  export type TriggerCreateManyTriggerTypeInputEnvelope = {
    data: TriggerCreateManyTriggerTypeInput | TriggerCreateManyTriggerTypeInput[]
    skipDuplicates?: boolean
  }

  export type TriggerUpsertWithWhereUniqueWithoutTriggerTypeInput = {
    where: TriggerWhereUniqueInput
    update: XOR<TriggerUpdateWithoutTriggerTypeInput, TriggerUncheckedUpdateWithoutTriggerTypeInput>
    create: XOR<TriggerCreateWithoutTriggerTypeInput, TriggerUncheckedCreateWithoutTriggerTypeInput>
  }

  export type TriggerUpdateWithWhereUniqueWithoutTriggerTypeInput = {
    where: TriggerWhereUniqueInput
    data: XOR<TriggerUpdateWithoutTriggerTypeInput, TriggerUncheckedUpdateWithoutTriggerTypeInput>
  }

  export type TriggerUpdateManyWithWhereWithoutTriggerTypeInput = {
    where: TriggerScalarWhereInput
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyWithoutTriggerTypeInput>
  }

  export type TriggerScalarWhereInput = {
    AND?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    OR?: TriggerScalarWhereInput[]
    NOT?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    id?: StringFilter<"Trigger"> | string
    zapId?: StringFilter<"Trigger"> | string
    triggerId?: StringFilter<"Trigger"> | string
  }

  export type ActionTypeCreateWithoutActionInput = {
    id?: string
    actionType: string
  }

  export type ActionTypeUncheckedCreateWithoutActionInput = {
    id?: string
    actionType: string
  }

  export type ActionTypeCreateOrConnectWithoutActionInput = {
    where: ActionTypeWhereUniqueInput
    create: XOR<ActionTypeCreateWithoutActionInput, ActionTypeUncheckedCreateWithoutActionInput>
  }

  export type ZapCreateWithoutActionInput = {
    id?: string
    triggerId?: string | null
    trigger?: TriggerCreateNestedOneWithoutZapInput
    zapRuns?: ZapRunCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutActionInput = {
    id?: string
    triggerId?: string | null
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    zapRuns?: ZapRunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutActionInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutActionInput, ZapUncheckedCreateWithoutActionInput>
  }

  export type ActionTypeUpsertWithoutActionInput = {
    update: XOR<ActionTypeUpdateWithoutActionInput, ActionTypeUncheckedUpdateWithoutActionInput>
    create: XOR<ActionTypeCreateWithoutActionInput, ActionTypeUncheckedCreateWithoutActionInput>
    where?: ActionTypeWhereInput
  }

  export type ActionTypeUpdateToOneWithWhereWithoutActionInput = {
    where?: ActionTypeWhereInput
    data: XOR<ActionTypeUpdateWithoutActionInput, ActionTypeUncheckedUpdateWithoutActionInput>
  }

  export type ActionTypeUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
  }

  export type ActionTypeUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
  }

  export type ZapUpsertWithoutActionInput = {
    update: XOR<ZapUpdateWithoutActionInput, ZapUncheckedUpdateWithoutActionInput>
    create: XOR<ZapCreateWithoutActionInput, ZapUncheckedCreateWithoutActionInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutActionInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutActionInput, ZapUncheckedUpdateWithoutActionInput>
  }

  export type ZapUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    zapRuns?: ZapRunUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    zapRuns?: ZapRunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type ActionCreateWithoutActionTypeInput = {
    id?: string
    executionOrder?: number
    zap: ZapCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateWithoutActionTypeInput = {
    id?: string
    zapId: string
    executionOrder?: number
  }

  export type ActionCreateOrConnectWithoutActionTypeInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutActionTypeInput, ActionUncheckedCreateWithoutActionTypeInput>
  }

  export type ActionCreateManyActionTypeInputEnvelope = {
    data: ActionCreateManyActionTypeInput | ActionCreateManyActionTypeInput[]
    skipDuplicates?: boolean
  }

  export type ActionUpsertWithWhereUniqueWithoutActionTypeInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutActionTypeInput, ActionUncheckedUpdateWithoutActionTypeInput>
    create: XOR<ActionCreateWithoutActionTypeInput, ActionUncheckedCreateWithoutActionTypeInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutActionTypeInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutActionTypeInput, ActionUncheckedUpdateWithoutActionTypeInput>
  }

  export type ActionUpdateManyWithWhereWithoutActionTypeInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutActionTypeInput>
  }

  export type ZapCreateWithoutZapRunsInput = {
    id?: string
    triggerId?: string | null
    trigger?: TriggerCreateNestedOneWithoutZapInput
    action?: ActionCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutZapRunsInput = {
    id?: string
    triggerId?: string | null
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    action?: ActionUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutZapRunsInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutZapRunsInput, ZapUncheckedCreateWithoutZapRunsInput>
  }

  export type ZapRunOutboxCreateWithoutZapRunInput = {
    id?: string
  }

  export type ZapRunOutboxUncheckedCreateWithoutZapRunInput = {
    id?: string
  }

  export type ZapRunOutboxCreateOrConnectWithoutZapRunInput = {
    where: ZapRunOutboxWhereUniqueInput
    create: XOR<ZapRunOutboxCreateWithoutZapRunInput, ZapRunOutboxUncheckedCreateWithoutZapRunInput>
  }

  export type ZapUpsertWithoutZapRunsInput = {
    update: XOR<ZapUpdateWithoutZapRunsInput, ZapUncheckedUpdateWithoutZapRunsInput>
    create: XOR<ZapCreateWithoutZapRunsInput, ZapUncheckedCreateWithoutZapRunsInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutZapRunsInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutZapRunsInput, ZapUncheckedUpdateWithoutZapRunsInput>
  }

  export type ZapUpdateWithoutZapRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    action?: ActionUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutZapRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    action?: ActionUncheckedUpdateManyWithoutZapNestedInput
  }

  export type ZapRunOutboxUpsertWithoutZapRunInput = {
    update: XOR<ZapRunOutboxUpdateWithoutZapRunInput, ZapRunOutboxUncheckedUpdateWithoutZapRunInput>
    create: XOR<ZapRunOutboxCreateWithoutZapRunInput, ZapRunOutboxUncheckedCreateWithoutZapRunInput>
    where?: ZapRunOutboxWhereInput
  }

  export type ZapRunOutboxUpdateToOneWithWhereWithoutZapRunInput = {
    where?: ZapRunOutboxWhereInput
    data: XOR<ZapRunOutboxUpdateWithoutZapRunInput, ZapRunOutboxUncheckedUpdateWithoutZapRunInput>
  }

  export type ZapRunOutboxUpdateWithoutZapRunInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ZapRunOutboxUncheckedUpdateWithoutZapRunInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ZapRunCreateWithoutZapRunOutboxInput = {
    id?: string
    metaData: JsonNullValueInput | InputJsonValue
    zap: ZapCreateNestedOneWithoutZapRunsInput
  }

  export type ZapRunUncheckedCreateWithoutZapRunOutboxInput = {
    id?: string
    zapId: string
    metaData: JsonNullValueInput | InputJsonValue
  }

  export type ZapRunCreateOrConnectWithoutZapRunOutboxInput = {
    where: ZapRunWhereUniqueInput
    create: XOR<ZapRunCreateWithoutZapRunOutboxInput, ZapRunUncheckedCreateWithoutZapRunOutboxInput>
  }

  export type ZapRunUpsertWithoutZapRunOutboxInput = {
    update: XOR<ZapRunUpdateWithoutZapRunOutboxInput, ZapRunUncheckedUpdateWithoutZapRunOutboxInput>
    create: XOR<ZapRunCreateWithoutZapRunOutboxInput, ZapRunUncheckedCreateWithoutZapRunOutboxInput>
    where?: ZapRunWhereInput
  }

  export type ZapRunUpdateToOneWithWhereWithoutZapRunOutboxInput = {
    where?: ZapRunWhereInput
    data: XOR<ZapRunUpdateWithoutZapRunOutboxInput, ZapRunUncheckedUpdateWithoutZapRunOutboxInput>
  }

  export type ZapRunUpdateWithoutZapRunOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
    zap?: ZapUpdateOneRequiredWithoutZapRunsNestedInput
  }

  export type ZapRunUncheckedUpdateWithoutZapRunOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
  }

  export type ActionCreateManyZapInput = {
    id?: string
    actionId: string
    executionOrder?: number
  }

  export type ZapRunCreateManyZapInput = {
    id?: string
    metaData: JsonNullValueInput | InputJsonValue
  }

  export type ActionUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    executionOrder?: IntFieldUpdateOperationsInput | number
    actionType?: ActionTypeUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    executionOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionUncheckedUpdateManyWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    executionOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ZapRunUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: ZapRunOutboxUpdateOneWithoutZapRunNestedInput
  }

  export type ZapRunUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: ZapRunOutboxUncheckedUpdateOneWithoutZapRunNestedInput
  }

  export type ZapRunUncheckedUpdateManyWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
  }

  export type TriggerCreateManyTriggerTypeInput = {
    id?: string
    zapId: string
  }

  export type TriggerUpdateWithoutTriggerTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zap?: ZapUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutTriggerTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyWithoutTriggerTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateManyActionTypeInput = {
    id?: string
    zapId: string
    executionOrder?: number
  }

  export type ActionUpdateWithoutActionTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    executionOrder?: IntFieldUpdateOperationsInput | number
    zap?: ZapUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateWithoutActionTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    executionOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionUncheckedUpdateManyWithoutActionTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    executionOrder?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}