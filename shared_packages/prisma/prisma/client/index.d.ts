
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
 * Model Manager
 * 
 */
export type Manager = $Result.DefaultSelection<Prisma.$ManagerPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Source
 * 
 */
export type Source = $Result.DefaultSelection<Prisma.$SourcePayload>
/**
 * Model Opponent
 * 
 */
export type Opponent = $Result.DefaultSelection<Prisma.$OpponentPayload>
/**
 * Model Blogger
 * 
 */
export type Blogger = $Result.DefaultSelection<Prisma.$BloggerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LEAD_STATUS: {
  addedToDB: 'addedToDB',
  messageSent: 'messageSent',
  messageRead: 'messageRead',
  replied: 'replied',
  contactShared: 'contactShared'
};

export type LEAD_STATUS = (typeof LEAD_STATUS)[keyof typeof LEAD_STATUS]


export const TASK_STATUS: {
  notAssigned: 'notAssigned',
  assignedNotStarted: 'assignedNotStarted',
  workInProgress: 'workInProgress',
  blocked: 'blocked',
  checkMe: 'checkMe',
  done: 'done',
  weRefused: 'weRefused',
  leadRefused: 'leadRefused'
};

export type TASK_STATUS = (typeof TASK_STATUS)[keyof typeof TASK_STATUS]


export const TASK_URGENCY: {
  one: 'one',
  two: 'two',
  three: 'three',
  four: 'four',
  five: 'five'
};

export type TASK_URGENCY = (typeof TASK_URGENCY)[keyof typeof TASK_URGENCY]


export const TASK_IMPORTANCE: {
  one: 'one',
  two: 'two',
  three: 'three'
};

export type TASK_IMPORTANCE = (typeof TASK_IMPORTANCE)[keyof typeof TASK_IMPORTANCE]


export const ROLES: {
  dev: 'dev',
  owner: 'owner',
  ceo: 'ceo',
  manager: 'manager',
  bot: 'bot'
};

export type ROLES = (typeof ROLES)[keyof typeof ROLES]


export const LEGAL_ACTION: {
  none: 'none',
  filing: 'filing',
  courtParticipation: 'courtParticipation',
  consultation: 'consultation',
  appointment: 'appointment',
  negotiations: 'negotiations',
  claim: 'claim',
  lawyerRequest: 'lawyerRequest'
};

export type LEGAL_ACTION = (typeof LEGAL_ACTION)[keyof typeof LEGAL_ACTION]


export const STATUS_IN_COURT: {
  postponed: 'postponed',
  paused: 'paused',
  judgeOnVacation: 'judgeOnVacation',
  reassigned: 'reassigned',
  negotiations: 'negotiations',
  returned: 'returned',
  none: 'none'
};

export type STATUS_IN_COURT = (typeof STATUS_IN_COURT)[keyof typeof STATUS_IN_COURT]


export const REFUSAL_REASON: {
  none: 'none',
  choseCompetitor: 'choseCompetitor',
  irrelevantServices: 'irrelevantServices',
  tooExpensive: 'tooExpensive',
  noReasonGiven: 'noReasonGiven'
};

export type REFUSAL_REASON = (typeof REFUSAL_REASON)[keyof typeof REFUSAL_REASON]


export const SOURCE_CATEGORY: {
  none: 'none',
  realEstate: 'realEstate',
  loans: 'loans',
  other: 'other'
};

export type SOURCE_CATEGORY = (typeof SOURCE_CATEGORY)[keyof typeof SOURCE_CATEGORY]

}

export type LEAD_STATUS = $Enums.LEAD_STATUS

export const LEAD_STATUS: typeof $Enums.LEAD_STATUS

export type TASK_STATUS = $Enums.TASK_STATUS

export const TASK_STATUS: typeof $Enums.TASK_STATUS

export type TASK_URGENCY = $Enums.TASK_URGENCY

export const TASK_URGENCY: typeof $Enums.TASK_URGENCY

export type TASK_IMPORTANCE = $Enums.TASK_IMPORTANCE

export const TASK_IMPORTANCE: typeof $Enums.TASK_IMPORTANCE

export type ROLES = $Enums.ROLES

export const ROLES: typeof $Enums.ROLES

export type LEGAL_ACTION = $Enums.LEGAL_ACTION

export const LEGAL_ACTION: typeof $Enums.LEGAL_ACTION

export type STATUS_IN_COURT = $Enums.STATUS_IN_COURT

export const STATUS_IN_COURT: typeof $Enums.STATUS_IN_COURT

export type REFUSAL_REASON = $Enums.REFUSAL_REASON

export const REFUSAL_REASON: typeof $Enums.REFUSAL_REASON

export type SOURCE_CATEGORY = $Enums.SOURCE_CATEGORY

export const SOURCE_CATEGORY: typeof $Enums.SOURCE_CATEGORY

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Managers
 * const managers = await prisma.manager.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Managers
   * const managers = await prisma.manager.findMany()
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
   * `prisma.manager`: Exposes CRUD operations for the **Manager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Managers
    * const managers = await prisma.manager.findMany()
    * ```
    */
  get manager(): Prisma.ManagerDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.source`: Exposes CRUD operations for the **Source** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sources
    * const sources = await prisma.source.findMany()
    * ```
    */
  get source(): Prisma.SourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opponent`: Exposes CRUD operations for the **Opponent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Opponents
    * const opponents = await prisma.opponent.findMany()
    * ```
    */
  get opponent(): Prisma.OpponentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogger`: Exposes CRUD operations for the **Blogger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bloggers
    * const bloggers = await prisma.blogger.findMany()
    * ```
    */
  get blogger(): Prisma.BloggerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Manager: 'Manager',
    User: 'User',
    Source: 'Source',
    Opponent: 'Opponent',
    Blogger: 'Blogger'
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
      modelProps: "manager" | "user" | "source" | "opponent" | "blogger"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Manager: {
        payload: Prisma.$ManagerPayload<ExtArgs>
        fields: Prisma.ManagerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManagerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManagerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          findFirst: {
            args: Prisma.ManagerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManagerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          findMany: {
            args: Prisma.ManagerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>[]
          }
          create: {
            args: Prisma.ManagerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          createMany: {
            args: Prisma.ManagerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManagerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>[]
          }
          delete: {
            args: Prisma.ManagerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          update: {
            args: Prisma.ManagerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          deleteMany: {
            args: Prisma.ManagerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManagerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ManagerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>[]
          }
          upsert: {
            args: Prisma.ManagerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          aggregate: {
            args: Prisma.ManagerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManager>
          }
          groupBy: {
            args: Prisma.ManagerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManagerCountArgs<ExtArgs>
            result: $Utils.Optional<ManagerCountAggregateOutputType> | number
          }
        }
      }
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
      Source: {
        payload: Prisma.$SourcePayload<ExtArgs>
        fields: Prisma.SourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          findFirst: {
            args: Prisma.SourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          findMany: {
            args: Prisma.SourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          create: {
            args: Prisma.SourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          createMany: {
            args: Prisma.SourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          delete: {
            args: Prisma.SourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          update: {
            args: Prisma.SourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          deleteMany: {
            args: Prisma.SourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          upsert: {
            args: Prisma.SourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          aggregate: {
            args: Prisma.SourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSource>
          }
          groupBy: {
            args: Prisma.SourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceCountArgs<ExtArgs>
            result: $Utils.Optional<SourceCountAggregateOutputType> | number
          }
        }
      }
      Opponent: {
        payload: Prisma.$OpponentPayload<ExtArgs>
        fields: Prisma.OpponentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpponentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpponentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentPayload>
          }
          findFirst: {
            args: Prisma.OpponentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpponentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentPayload>
          }
          findMany: {
            args: Prisma.OpponentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentPayload>[]
          }
          create: {
            args: Prisma.OpponentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentPayload>
          }
          createMany: {
            args: Prisma.OpponentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpponentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentPayload>[]
          }
          delete: {
            args: Prisma.OpponentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentPayload>
          }
          update: {
            args: Prisma.OpponentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentPayload>
          }
          deleteMany: {
            args: Prisma.OpponentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpponentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpponentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentPayload>[]
          }
          upsert: {
            args: Prisma.OpponentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentPayload>
          }
          aggregate: {
            args: Prisma.OpponentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpponent>
          }
          groupBy: {
            args: Prisma.OpponentGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpponentGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpponentCountArgs<ExtArgs>
            result: $Utils.Optional<OpponentCountAggregateOutputType> | number
          }
        }
      }
      Blogger: {
        payload: Prisma.$BloggerPayload<ExtArgs>
        fields: Prisma.BloggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BloggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BloggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloggerPayload>
          }
          findFirst: {
            args: Prisma.BloggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BloggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloggerPayload>
          }
          findMany: {
            args: Prisma.BloggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloggerPayload>[]
          }
          create: {
            args: Prisma.BloggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloggerPayload>
          }
          createMany: {
            args: Prisma.BloggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BloggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloggerPayload>[]
          }
          delete: {
            args: Prisma.BloggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloggerPayload>
          }
          update: {
            args: Prisma.BloggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloggerPayload>
          }
          deleteMany: {
            args: Prisma.BloggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BloggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BloggerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloggerPayload>[]
          }
          upsert: {
            args: Prisma.BloggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloggerPayload>
          }
          aggregate: {
            args: Prisma.BloggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogger>
          }
          groupBy: {
            args: Prisma.BloggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BloggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BloggerCountArgs<ExtArgs>
            result: $Utils.Optional<BloggerCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    manager?: ManagerOmit
    user?: UserOmit
    source?: SourceOmit
    opponent?: OpponentOmit
    blogger?: BloggerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ManagerCountOutputType
   */

  export type ManagerCountOutputType = {
    authoredUsers: number
    managedUsers: number
    sources: number
    bloggers: number
  }

  export type ManagerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authoredUsers?: boolean | ManagerCountOutputTypeCountAuthoredUsersArgs
    managedUsers?: boolean | ManagerCountOutputTypeCountManagedUsersArgs
    sources?: boolean | ManagerCountOutputTypeCountSourcesArgs
    bloggers?: boolean | ManagerCountOutputTypeCountBloggersArgs
  }

  // Custom InputTypes
  /**
   * ManagerCountOutputType without action
   */
  export type ManagerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerCountOutputType
     */
    select?: ManagerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ManagerCountOutputType without action
   */
  export type ManagerCountOutputTypeCountAuthoredUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ManagerCountOutputType without action
   */
  export type ManagerCountOutputTypeCountManagedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ManagerCountOutputType without action
   */
  export type ManagerCountOutputTypeCountSourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceWhereInput
  }

  /**
   * ManagerCountOutputType without action
   */
  export type ManagerCountOutputTypeCountBloggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloggerWhereInput
  }


  /**
   * Count Type SourceCountOutputType
   */

  export type SourceCountOutputType = {
    users: number
  }

  export type SourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SourceCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * SourceCountOutputType without action
   */
  export type SourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCountOutputType
     */
    select?: SourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SourceCountOutputType without action
   */
  export type SourceCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type OpponentCountOutputType
   */

  export type OpponentCountOutputType = {
    users: number
  }

  export type OpponentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OpponentCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * OpponentCountOutputType without action
   */
  export type OpponentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpponentCountOutputType
     */
    select?: OpponentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OpponentCountOutputType without action
   */
  export type OpponentCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Manager
   */

  export type AggregateManager = {
    _count: ManagerCountAggregateOutputType | null
    _avg: ManagerAvgAggregateOutputType | null
    _sum: ManagerSumAggregateOutputType | null
    _min: ManagerMinAggregateOutputType | null
    _max: ManagerMaxAggregateOutputType | null
  }

  export type ManagerAvgAggregateOutputType = {
    id: number | null
  }

  export type ManagerSumAggregateOutputType = {
    id: number | null
  }

  export type ManagerMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.ROLES | null
    createdAt: Date | null
  }

  export type ManagerMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.ROLES | null
    createdAt: Date | null
  }

  export type ManagerCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type ManagerAvgAggregateInputType = {
    id?: true
  }

  export type ManagerSumAggregateInputType = {
    id?: true
  }

  export type ManagerMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type ManagerMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type ManagerCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type ManagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manager to aggregate.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Managers
    **/
    _count?: true | ManagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManagerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManagerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManagerMaxAggregateInputType
  }

  export type GetManagerAggregateType<T extends ManagerAggregateArgs> = {
        [P in keyof T & keyof AggregateManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManager[P]>
      : GetScalarType<T[P], AggregateManager[P]>
  }




  export type ManagerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagerWhereInput
    orderBy?: ManagerOrderByWithAggregationInput | ManagerOrderByWithAggregationInput[]
    by: ManagerScalarFieldEnum[] | ManagerScalarFieldEnum
    having?: ManagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManagerCountAggregateInputType | true
    _avg?: ManagerAvgAggregateInputType
    _sum?: ManagerSumAggregateInputType
    _min?: ManagerMinAggregateInputType
    _max?: ManagerMaxAggregateInputType
  }

  export type ManagerGroupByOutputType = {
    id: number
    username: string
    password: string
    role: $Enums.ROLES
    createdAt: Date
    _count: ManagerCountAggregateOutputType | null
    _avg: ManagerAvgAggregateOutputType | null
    _sum: ManagerSumAggregateOutputType | null
    _min: ManagerMinAggregateOutputType | null
    _max: ManagerMaxAggregateOutputType | null
  }

  type GetManagerGroupByPayload<T extends ManagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManagerGroupByOutputType[P]>
            : GetScalarType<T[P], ManagerGroupByOutputType[P]>
        }
      >
    >


  export type ManagerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    authoredUsers?: boolean | Manager$authoredUsersArgs<ExtArgs>
    managedUsers?: boolean | Manager$managedUsersArgs<ExtArgs>
    sources?: boolean | Manager$sourcesArgs<ExtArgs>
    bloggers?: boolean | Manager$bloggersArgs<ExtArgs>
    _count?: boolean | ManagerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manager"]>

  export type ManagerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["manager"]>

  export type ManagerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["manager"]>

  export type ManagerSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type ManagerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "createdAt", ExtArgs["result"]["manager"]>
  export type ManagerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authoredUsers?: boolean | Manager$authoredUsersArgs<ExtArgs>
    managedUsers?: boolean | Manager$managedUsersArgs<ExtArgs>
    sources?: boolean | Manager$sourcesArgs<ExtArgs>
    bloggers?: boolean | Manager$bloggersArgs<ExtArgs>
    _count?: boolean | ManagerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ManagerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ManagerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ManagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manager"
    objects: {
      authoredUsers: Prisma.$UserPayload<ExtArgs>[]
      managedUsers: Prisma.$UserPayload<ExtArgs>[]
      sources: Prisma.$SourcePayload<ExtArgs>[]
      bloggers: Prisma.$BloggerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: $Enums.ROLES
      createdAt: Date
    }, ExtArgs["result"]["manager"]>
    composites: {}
  }

  type ManagerGetPayload<S extends boolean | null | undefined | ManagerDefaultArgs> = $Result.GetResult<Prisma.$ManagerPayload, S>

  type ManagerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManagerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManagerCountAggregateInputType | true
    }

  export interface ManagerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manager'], meta: { name: 'Manager' } }
    /**
     * Find zero or one Manager that matches the filter.
     * @param {ManagerFindUniqueArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManagerFindUniqueArgs>(args: SelectSubset<T, ManagerFindUniqueArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Manager that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManagerFindUniqueOrThrowArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManagerFindUniqueOrThrowArgs>(args: SelectSubset<T, ManagerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindFirstArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManagerFindFirstArgs>(args?: SelectSubset<T, ManagerFindFirstArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindFirstOrThrowArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManagerFindFirstOrThrowArgs>(args?: SelectSubset<T, ManagerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Managers
     * const managers = await prisma.manager.findMany()
     * 
     * // Get first 10 Managers
     * const managers = await prisma.manager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const managerWithIdOnly = await prisma.manager.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManagerFindManyArgs>(args?: SelectSubset<T, ManagerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Manager.
     * @param {ManagerCreateArgs} args - Arguments to create a Manager.
     * @example
     * // Create one Manager
     * const Manager = await prisma.manager.create({
     *   data: {
     *     // ... data to create a Manager
     *   }
     * })
     * 
     */
    create<T extends ManagerCreateArgs>(args: SelectSubset<T, ManagerCreateArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Managers.
     * @param {ManagerCreateManyArgs} args - Arguments to create many Managers.
     * @example
     * // Create many Managers
     * const manager = await prisma.manager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManagerCreateManyArgs>(args?: SelectSubset<T, ManagerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Managers and returns the data saved in the database.
     * @param {ManagerCreateManyAndReturnArgs} args - Arguments to create many Managers.
     * @example
     * // Create many Managers
     * const manager = await prisma.manager.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Managers and only return the `id`
     * const managerWithIdOnly = await prisma.manager.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManagerCreateManyAndReturnArgs>(args?: SelectSubset<T, ManagerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Manager.
     * @param {ManagerDeleteArgs} args - Arguments to delete one Manager.
     * @example
     * // Delete one Manager
     * const Manager = await prisma.manager.delete({
     *   where: {
     *     // ... filter to delete one Manager
     *   }
     * })
     * 
     */
    delete<T extends ManagerDeleteArgs>(args: SelectSubset<T, ManagerDeleteArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Manager.
     * @param {ManagerUpdateArgs} args - Arguments to update one Manager.
     * @example
     * // Update one Manager
     * const manager = await prisma.manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManagerUpdateArgs>(args: SelectSubset<T, ManagerUpdateArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Managers.
     * @param {ManagerDeleteManyArgs} args - Arguments to filter Managers to delete.
     * @example
     * // Delete a few Managers
     * const { count } = await prisma.manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManagerDeleteManyArgs>(args?: SelectSubset<T, ManagerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Managers
     * const manager = await prisma.manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManagerUpdateManyArgs>(args: SelectSubset<T, ManagerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Managers and returns the data updated in the database.
     * @param {ManagerUpdateManyAndReturnArgs} args - Arguments to update many Managers.
     * @example
     * // Update many Managers
     * const manager = await prisma.manager.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Managers and only return the `id`
     * const managerWithIdOnly = await prisma.manager.updateManyAndReturn({
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
    updateManyAndReturn<T extends ManagerUpdateManyAndReturnArgs>(args: SelectSubset<T, ManagerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Manager.
     * @param {ManagerUpsertArgs} args - Arguments to update or create a Manager.
     * @example
     * // Update or create a Manager
     * const manager = await prisma.manager.upsert({
     *   create: {
     *     // ... data to create a Manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manager we want to update
     *   }
     * })
     */
    upsert<T extends ManagerUpsertArgs>(args: SelectSubset<T, ManagerUpsertArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerCountArgs} args - Arguments to filter Managers to count.
     * @example
     * // Count the number of Managers
     * const count = await prisma.manager.count({
     *   where: {
     *     // ... the filter for the Managers we want to count
     *   }
     * })
    **/
    count<T extends ManagerCountArgs>(
      args?: Subset<T, ManagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManagerAggregateArgs>(args: Subset<T, ManagerAggregateArgs>): Prisma.PrismaPromise<GetManagerAggregateType<T>>

    /**
     * Group by Manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerGroupByArgs} args - Group by arguments.
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
      T extends ManagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManagerGroupByArgs['orderBy'] }
        : { orderBy?: ManagerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ManagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manager model
   */
  readonly fields: ManagerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManagerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authoredUsers<T extends Manager$authoredUsersArgs<ExtArgs> = {}>(args?: Subset<T, Manager$authoredUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    managedUsers<T extends Manager$managedUsersArgs<ExtArgs> = {}>(args?: Subset<T, Manager$managedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sources<T extends Manager$sourcesArgs<ExtArgs> = {}>(args?: Subset<T, Manager$sourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bloggers<T extends Manager$bloggersArgs<ExtArgs> = {}>(args?: Subset<T, Manager$bloggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Manager model
   */
  interface ManagerFieldRefs {
    readonly id: FieldRef<"Manager", 'Int'>
    readonly username: FieldRef<"Manager", 'String'>
    readonly password: FieldRef<"Manager", 'String'>
    readonly role: FieldRef<"Manager", 'ROLES'>
    readonly createdAt: FieldRef<"Manager", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Manager findUnique
   */
  export type ManagerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager findUniqueOrThrow
   */
  export type ManagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager findFirst
   */
  export type ManagerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Managers.
     */
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager findFirstOrThrow
   */
  export type ManagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Managers.
     */
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager findMany
   */
  export type ManagerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Managers to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager create
   */
  export type ManagerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The data needed to create a Manager.
     */
    data: XOR<ManagerCreateInput, ManagerUncheckedCreateInput>
  }

  /**
   * Manager createMany
   */
  export type ManagerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Managers.
     */
    data: ManagerCreateManyInput | ManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manager createManyAndReturn
   */
  export type ManagerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * The data used to create many Managers.
     */
    data: ManagerCreateManyInput | ManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manager update
   */
  export type ManagerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The data needed to update a Manager.
     */
    data: XOR<ManagerUpdateInput, ManagerUncheckedUpdateInput>
    /**
     * Choose, which Manager to update.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager updateMany
   */
  export type ManagerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Managers.
     */
    data: XOR<ManagerUpdateManyMutationInput, ManagerUncheckedUpdateManyInput>
    /**
     * Filter which Managers to update
     */
    where?: ManagerWhereInput
    /**
     * Limit how many Managers to update.
     */
    limit?: number
  }

  /**
   * Manager updateManyAndReturn
   */
  export type ManagerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * The data used to update Managers.
     */
    data: XOR<ManagerUpdateManyMutationInput, ManagerUncheckedUpdateManyInput>
    /**
     * Filter which Managers to update
     */
    where?: ManagerWhereInput
    /**
     * Limit how many Managers to update.
     */
    limit?: number
  }

  /**
   * Manager upsert
   */
  export type ManagerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The filter to search for the Manager to update in case it exists.
     */
    where: ManagerWhereUniqueInput
    /**
     * In case the Manager found by the `where` argument doesn't exist, create a new Manager with this data.
     */
    create: XOR<ManagerCreateInput, ManagerUncheckedCreateInput>
    /**
     * In case the Manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManagerUpdateInput, ManagerUncheckedUpdateInput>
  }

  /**
   * Manager delete
   */
  export type ManagerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter which Manager to delete.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager deleteMany
   */
  export type ManagerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Managers to delete
     */
    where?: ManagerWhereInput
    /**
     * Limit how many Managers to delete.
     */
    limit?: number
  }

  /**
   * Manager.authoredUsers
   */
  export type Manager$authoredUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Manager.managedUsers
   */
  export type Manager$managedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Manager.sources
   */
  export type Manager$sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    where?: SourceWhereInput
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    cursor?: SourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Manager.bloggers
   */
  export type Manager$bloggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogger
     */
    select?: BloggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogger
     */
    omit?: BloggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloggerInclude<ExtArgs> | null
    where?: BloggerWhereInput
    orderBy?: BloggerOrderByWithRelationInput | BloggerOrderByWithRelationInput[]
    cursor?: BloggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloggerScalarFieldEnum | BloggerScalarFieldEnum[]
  }

  /**
   * Manager without action
   */
  export type ManagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
  }


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
    priceSOM: number | null
    priceUSD: number | null
    authorId: number | null
    sourceId: number | null
    opponentId: number | null
    managerId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    priceSOM: bigint | null
    priceUSD: bigint | null
    authorId: number | null
    sourceId: number | null
    opponentId: number | null
    managerId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    userLink: string | null
    phoneNumber: string | null
    email: string | null
    homeAddress: string | null
    leadStatus: $Enums.LEAD_STATUS | null
    taskImportance: $Enums.TASK_IMPORTANCE | null
    taskUrgency: $Enums.TASK_URGENCY | null
    taskStatus: $Enums.TASK_STATUS | null
    legalAction: $Enums.LEGAL_ACTION | null
    problemShort: string | null
    problemFull: string | null
    nearestTask: string | null
    nearestTaskDeadline: Date | null
    timeOfPerformance: Date | null
    priceSOM: bigint | null
    priceUSD: bigint | null
    courtInfo: string | null
    statusInCourt: $Enums.STATUS_IN_COURT | null
    refusalReason: $Enums.REFUSAL_REASON | null
    createdAt: Date | null
    assignmentTime: Date | null
    authorId: number | null
    sourceId: number | null
    opponentId: number | null
    managerId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    userLink: string | null
    phoneNumber: string | null
    email: string | null
    homeAddress: string | null
    leadStatus: $Enums.LEAD_STATUS | null
    taskImportance: $Enums.TASK_IMPORTANCE | null
    taskUrgency: $Enums.TASK_URGENCY | null
    taskStatus: $Enums.TASK_STATUS | null
    legalAction: $Enums.LEGAL_ACTION | null
    problemShort: string | null
    problemFull: string | null
    nearestTask: string | null
    nearestTaskDeadline: Date | null
    timeOfPerformance: Date | null
    priceSOM: bigint | null
    priceUSD: bigint | null
    courtInfo: string | null
    statusInCourt: $Enums.STATUS_IN_COURT | null
    refusalReason: $Enums.REFUSAL_REASON | null
    createdAt: Date | null
    assignmentTime: Date | null
    authorId: number | null
    sourceId: number | null
    opponentId: number | null
    managerId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    userLink: number
    phoneNumber: number
    email: number
    homeAddress: number
    leadStatus: number
    taskImportance: number
    taskUrgency: number
    taskStatus: number
    legalAction: number
    problemShort: number
    problemFull: number
    nearestTask: number
    nearestTaskDeadline: number
    timeOfPerformance: number
    priceSOM: number
    priceUSD: number
    courtInfo: number
    statusInCourt: number
    refusalReason: number
    createdAt: number
    assignmentTime: number
    authorId: number
    sourceId: number
    opponentId: number
    managerId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    priceSOM?: true
    priceUSD?: true
    authorId?: true
    sourceId?: true
    opponentId?: true
    managerId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    priceSOM?: true
    priceUSD?: true
    authorId?: true
    sourceId?: true
    opponentId?: true
    managerId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    userLink?: true
    phoneNumber?: true
    email?: true
    homeAddress?: true
    leadStatus?: true
    taskImportance?: true
    taskUrgency?: true
    taskStatus?: true
    legalAction?: true
    problemShort?: true
    problemFull?: true
    nearestTask?: true
    nearestTaskDeadline?: true
    timeOfPerformance?: true
    priceSOM?: true
    priceUSD?: true
    courtInfo?: true
    statusInCourt?: true
    refusalReason?: true
    createdAt?: true
    assignmentTime?: true
    authorId?: true
    sourceId?: true
    opponentId?: true
    managerId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    userLink?: true
    phoneNumber?: true
    email?: true
    homeAddress?: true
    leadStatus?: true
    taskImportance?: true
    taskUrgency?: true
    taskStatus?: true
    legalAction?: true
    problemShort?: true
    problemFull?: true
    nearestTask?: true
    nearestTaskDeadline?: true
    timeOfPerformance?: true
    priceSOM?: true
    priceUSD?: true
    courtInfo?: true
    statusInCourt?: true
    refusalReason?: true
    createdAt?: true
    assignmentTime?: true
    authorId?: true
    sourceId?: true
    opponentId?: true
    managerId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    userLink?: true
    phoneNumber?: true
    email?: true
    homeAddress?: true
    leadStatus?: true
    taskImportance?: true
    taskUrgency?: true
    taskStatus?: true
    legalAction?: true
    problemShort?: true
    problemFull?: true
    nearestTask?: true
    nearestTaskDeadline?: true
    timeOfPerformance?: true
    priceSOM?: true
    priceUSD?: true
    courtInfo?: true
    statusInCourt?: true
    refusalReason?: true
    createdAt?: true
    assignmentTime?: true
    authorId?: true
    sourceId?: true
    opponentId?: true
    managerId?: true
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
    userLink: string | null
    phoneNumber: string | null
    email: string | null
    homeAddress: string
    leadStatus: $Enums.LEAD_STATUS
    taskImportance: $Enums.TASK_IMPORTANCE
    taskUrgency: $Enums.TASK_URGENCY
    taskStatus: $Enums.TASK_STATUS
    legalAction: $Enums.LEGAL_ACTION
    problemShort: string
    problemFull: string
    nearestTask: string
    nearestTaskDeadline: Date | null
    timeOfPerformance: Date | null
    priceSOM: bigint | null
    priceUSD: bigint | null
    courtInfo: string
    statusInCourt: $Enums.STATUS_IN_COURT
    refusalReason: $Enums.REFUSAL_REASON | null
    createdAt: Date
    assignmentTime: Date | null
    authorId: number
    sourceId: number
    opponentId: number | null
    managerId: number | null
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
    userLink?: boolean
    phoneNumber?: boolean
    email?: boolean
    homeAddress?: boolean
    leadStatus?: boolean
    taskImportance?: boolean
    taskUrgency?: boolean
    taskStatus?: boolean
    legalAction?: boolean
    problemShort?: boolean
    problemFull?: boolean
    nearestTask?: boolean
    nearestTaskDeadline?: boolean
    timeOfPerformance?: boolean
    priceSOM?: boolean
    priceUSD?: boolean
    courtInfo?: boolean
    statusInCourt?: boolean
    refusalReason?: boolean
    createdAt?: boolean
    assignmentTime?: boolean
    authorId?: boolean
    sourceId?: boolean
    opponentId?: boolean
    managerId?: boolean
    author?: boolean | ManagerDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
    opponent?: boolean | User$opponentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    userLink?: boolean
    phoneNumber?: boolean
    email?: boolean
    homeAddress?: boolean
    leadStatus?: boolean
    taskImportance?: boolean
    taskUrgency?: boolean
    taskStatus?: boolean
    legalAction?: boolean
    problemShort?: boolean
    problemFull?: boolean
    nearestTask?: boolean
    nearestTaskDeadline?: boolean
    timeOfPerformance?: boolean
    priceSOM?: boolean
    priceUSD?: boolean
    courtInfo?: boolean
    statusInCourt?: boolean
    refusalReason?: boolean
    createdAt?: boolean
    assignmentTime?: boolean
    authorId?: boolean
    sourceId?: boolean
    opponentId?: boolean
    managerId?: boolean
    author?: boolean | ManagerDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
    opponent?: boolean | User$opponentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    userLink?: boolean
    phoneNumber?: boolean
    email?: boolean
    homeAddress?: boolean
    leadStatus?: boolean
    taskImportance?: boolean
    taskUrgency?: boolean
    taskStatus?: boolean
    legalAction?: boolean
    problemShort?: boolean
    problemFull?: boolean
    nearestTask?: boolean
    nearestTaskDeadline?: boolean
    timeOfPerformance?: boolean
    priceSOM?: boolean
    priceUSD?: boolean
    courtInfo?: boolean
    statusInCourt?: boolean
    refusalReason?: boolean
    createdAt?: boolean
    assignmentTime?: boolean
    authorId?: boolean
    sourceId?: boolean
    opponentId?: boolean
    managerId?: boolean
    author?: boolean | ManagerDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
    opponent?: boolean | User$opponentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    userLink?: boolean
    phoneNumber?: boolean
    email?: boolean
    homeAddress?: boolean
    leadStatus?: boolean
    taskImportance?: boolean
    taskUrgency?: boolean
    taskStatus?: boolean
    legalAction?: boolean
    problemShort?: boolean
    problemFull?: boolean
    nearestTask?: boolean
    nearestTaskDeadline?: boolean
    timeOfPerformance?: boolean
    priceSOM?: boolean
    priceUSD?: boolean
    courtInfo?: boolean
    statusInCourt?: boolean
    refusalReason?: boolean
    createdAt?: boolean
    assignmentTime?: boolean
    authorId?: boolean
    sourceId?: boolean
    opponentId?: boolean
    managerId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "userLink" | "phoneNumber" | "email" | "homeAddress" | "leadStatus" | "taskImportance" | "taskUrgency" | "taskStatus" | "legalAction" | "problemShort" | "problemFull" | "nearestTask" | "nearestTaskDeadline" | "timeOfPerformance" | "priceSOM" | "priceUSD" | "courtInfo" | "statusInCourt" | "refusalReason" | "createdAt" | "assignmentTime" | "authorId" | "sourceId" | "opponentId" | "managerId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ManagerDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
    opponent?: boolean | User$opponentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ManagerDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
    opponent?: boolean | User$opponentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ManagerDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
    opponent?: boolean | User$opponentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      author: Prisma.$ManagerPayload<ExtArgs>
      source: Prisma.$SourcePayload<ExtArgs>
      opponent: Prisma.$OpponentPayload<ExtArgs> | null
      manager: Prisma.$ManagerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      userLink: string | null
      phoneNumber: string | null
      email: string | null
      homeAddress: string
      leadStatus: $Enums.LEAD_STATUS
      taskImportance: $Enums.TASK_IMPORTANCE
      taskUrgency: $Enums.TASK_URGENCY
      taskStatus: $Enums.TASK_STATUS
      legalAction: $Enums.LEGAL_ACTION
      problemShort: string
      problemFull: string
      nearestTask: string
      nearestTaskDeadline: Date | null
      timeOfPerformance: Date | null
      priceSOM: bigint | null
      priceUSD: bigint | null
      courtInfo: string
      statusInCourt: $Enums.STATUS_IN_COURT
      refusalReason: $Enums.REFUSAL_REASON | null
      createdAt: Date
      assignmentTime: Date | null
      authorId: number
      sourceId: number
      opponentId: number | null
      managerId: number | null
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
    author<T extends ManagerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ManagerDefaultArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    source<T extends SourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SourceDefaultArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    opponent<T extends User$opponentArgs<ExtArgs> = {}>(args?: Subset<T, User$opponentArgs<ExtArgs>>): Prisma__OpponentClient<$Result.GetResult<Prisma.$OpponentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    manager<T extends User$managerArgs<ExtArgs> = {}>(args?: Subset<T, User$managerArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly userLink: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly homeAddress: FieldRef<"User", 'String'>
    readonly leadStatus: FieldRef<"User", 'LEAD_STATUS'>
    readonly taskImportance: FieldRef<"User", 'TASK_IMPORTANCE'>
    readonly taskUrgency: FieldRef<"User", 'TASK_URGENCY'>
    readonly taskStatus: FieldRef<"User", 'TASK_STATUS'>
    readonly legalAction: FieldRef<"User", 'LEGAL_ACTION'>
    readonly problemShort: FieldRef<"User", 'String'>
    readonly problemFull: FieldRef<"User", 'String'>
    readonly nearestTask: FieldRef<"User", 'String'>
    readonly nearestTaskDeadline: FieldRef<"User", 'DateTime'>
    readonly timeOfPerformance: FieldRef<"User", 'DateTime'>
    readonly priceSOM: FieldRef<"User", 'BigInt'>
    readonly priceUSD: FieldRef<"User", 'BigInt'>
    readonly courtInfo: FieldRef<"User", 'String'>
    readonly statusInCourt: FieldRef<"User", 'STATUS_IN_COURT'>
    readonly refusalReason: FieldRef<"User", 'REFUSAL_REASON'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly assignmentTime: FieldRef<"User", 'DateTime'>
    readonly authorId: FieldRef<"User", 'Int'>
    readonly sourceId: FieldRef<"User", 'Int'>
    readonly opponentId: FieldRef<"User", 'Int'>
    readonly managerId: FieldRef<"User", 'Int'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.opponent
   */
  export type User$opponentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opponent
     */
    select?: OpponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opponent
     */
    omit?: OpponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentInclude<ExtArgs> | null
    where?: OpponentWhereInput
  }

  /**
   * User.manager
   */
  export type User$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    where?: ManagerWhereInput
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Source
   */

  export type AggregateSource = {
    _count: SourceCountAggregateOutputType | null
    _avg: SourceAvgAggregateOutputType | null
    _sum: SourceSumAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  export type SourceAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type SourceSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type SourceMinAggregateOutputType = {
    id: number | null
    title: string | null
    sourceLink: string | null
    category: $Enums.SOURCE_CATEGORY | null
    createdAt: Date | null
    authorId: number | null
  }

  export type SourceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    sourceLink: string | null
    category: $Enums.SOURCE_CATEGORY | null
    createdAt: Date | null
    authorId: number | null
  }

  export type SourceCountAggregateOutputType = {
    id: number
    title: number
    sourceLink: number
    category: number
    createdAt: number
    authorId: number
    _all: number
  }


  export type SourceAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type SourceSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type SourceMinAggregateInputType = {
    id?: true
    title?: true
    sourceLink?: true
    category?: true
    createdAt?: true
    authorId?: true
  }

  export type SourceMaxAggregateInputType = {
    id?: true
    title?: true
    sourceLink?: true
    category?: true
    createdAt?: true
    authorId?: true
  }

  export type SourceCountAggregateInputType = {
    id?: true
    title?: true
    sourceLink?: true
    category?: true
    createdAt?: true
    authorId?: true
    _all?: true
  }

  export type SourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Source to aggregate.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sources
    **/
    _count?: true | SourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceMaxAggregateInputType
  }

  export type GetSourceAggregateType<T extends SourceAggregateArgs> = {
        [P in keyof T & keyof AggregateSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSource[P]>
      : GetScalarType<T[P], AggregateSource[P]>
  }




  export type SourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceWhereInput
    orderBy?: SourceOrderByWithAggregationInput | SourceOrderByWithAggregationInput[]
    by: SourceScalarFieldEnum[] | SourceScalarFieldEnum
    having?: SourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceCountAggregateInputType | true
    _avg?: SourceAvgAggregateInputType
    _sum?: SourceSumAggregateInputType
    _min?: SourceMinAggregateInputType
    _max?: SourceMaxAggregateInputType
  }

  export type SourceGroupByOutputType = {
    id: number
    title: string
    sourceLink: string | null
    category: $Enums.SOURCE_CATEGORY
    createdAt: Date
    authorId: number
    _count: SourceCountAggregateOutputType | null
    _avg: SourceAvgAggregateOutputType | null
    _sum: SourceSumAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  type GetSourceGroupByPayload<T extends SourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceGroupByOutputType[P]>
            : GetScalarType<T[P], SourceGroupByOutputType[P]>
        }
      >
    >


  export type SourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    sourceLink?: boolean
    category?: boolean
    createdAt?: boolean
    authorId?: boolean
    author?: boolean | ManagerDefaultArgs<ExtArgs>
    users?: boolean | Source$usersArgs<ExtArgs>
    _count?: boolean | SourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["source"]>

  export type SourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    sourceLink?: boolean
    category?: boolean
    createdAt?: boolean
    authorId?: boolean
    author?: boolean | ManagerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["source"]>

  export type SourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    sourceLink?: boolean
    category?: boolean
    createdAt?: boolean
    authorId?: boolean
    author?: boolean | ManagerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["source"]>

  export type SourceSelectScalar = {
    id?: boolean
    title?: boolean
    sourceLink?: boolean
    category?: boolean
    createdAt?: boolean
    authorId?: boolean
  }

  export type SourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "sourceLink" | "category" | "createdAt" | "authorId", ExtArgs["result"]["source"]>
  export type SourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ManagerDefaultArgs<ExtArgs>
    users?: boolean | Source$usersArgs<ExtArgs>
    _count?: boolean | SourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ManagerDefaultArgs<ExtArgs>
  }
  export type SourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ManagerDefaultArgs<ExtArgs>
  }

  export type $SourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Source"
    objects: {
      author: Prisma.$ManagerPayload<ExtArgs>
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      sourceLink: string | null
      category: $Enums.SOURCE_CATEGORY
      createdAt: Date
      authorId: number
    }, ExtArgs["result"]["source"]>
    composites: {}
  }

  type SourceGetPayload<S extends boolean | null | undefined | SourceDefaultArgs> = $Result.GetResult<Prisma.$SourcePayload, S>

  type SourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceCountAggregateInputType | true
    }

  export interface SourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Source'], meta: { name: 'Source' } }
    /**
     * Find zero or one Source that matches the filter.
     * @param {SourceFindUniqueArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceFindUniqueArgs>(args: SelectSubset<T, SourceFindUniqueArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Source that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourceFindUniqueOrThrowArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Source that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindFirstArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceFindFirstArgs>(args?: SelectSubset<T, SourceFindFirstArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Source that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindFirstOrThrowArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sources
     * const sources = await prisma.source.findMany()
     * 
     * // Get first 10 Sources
     * const sources = await prisma.source.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceWithIdOnly = await prisma.source.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceFindManyArgs>(args?: SelectSubset<T, SourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Source.
     * @param {SourceCreateArgs} args - Arguments to create a Source.
     * @example
     * // Create one Source
     * const Source = await prisma.source.create({
     *   data: {
     *     // ... data to create a Source
     *   }
     * })
     * 
     */
    create<T extends SourceCreateArgs>(args: SelectSubset<T, SourceCreateArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sources.
     * @param {SourceCreateManyArgs} args - Arguments to create many Sources.
     * @example
     * // Create many Sources
     * const source = await prisma.source.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceCreateManyArgs>(args?: SelectSubset<T, SourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sources and returns the data saved in the database.
     * @param {SourceCreateManyAndReturnArgs} args - Arguments to create many Sources.
     * @example
     * // Create many Sources
     * const source = await prisma.source.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sources and only return the `id`
     * const sourceWithIdOnly = await prisma.source.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Source.
     * @param {SourceDeleteArgs} args - Arguments to delete one Source.
     * @example
     * // Delete one Source
     * const Source = await prisma.source.delete({
     *   where: {
     *     // ... filter to delete one Source
     *   }
     * })
     * 
     */
    delete<T extends SourceDeleteArgs>(args: SelectSubset<T, SourceDeleteArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Source.
     * @param {SourceUpdateArgs} args - Arguments to update one Source.
     * @example
     * // Update one Source
     * const source = await prisma.source.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceUpdateArgs>(args: SelectSubset<T, SourceUpdateArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sources.
     * @param {SourceDeleteManyArgs} args - Arguments to filter Sources to delete.
     * @example
     * // Delete a few Sources
     * const { count } = await prisma.source.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceDeleteManyArgs>(args?: SelectSubset<T, SourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sources
     * const source = await prisma.source.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceUpdateManyArgs>(args: SelectSubset<T, SourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources and returns the data updated in the database.
     * @param {SourceUpdateManyAndReturnArgs} args - Arguments to update many Sources.
     * @example
     * // Update many Sources
     * const source = await prisma.source.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sources and only return the `id`
     * const sourceWithIdOnly = await prisma.source.updateManyAndReturn({
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
    updateManyAndReturn<T extends SourceUpdateManyAndReturnArgs>(args: SelectSubset<T, SourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Source.
     * @param {SourceUpsertArgs} args - Arguments to update or create a Source.
     * @example
     * // Update or create a Source
     * const source = await prisma.source.upsert({
     *   create: {
     *     // ... data to create a Source
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Source we want to update
     *   }
     * })
     */
    upsert<T extends SourceUpsertArgs>(args: SelectSubset<T, SourceUpsertArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceCountArgs} args - Arguments to filter Sources to count.
     * @example
     * // Count the number of Sources
     * const count = await prisma.source.count({
     *   where: {
     *     // ... the filter for the Sources we want to count
     *   }
     * })
    **/
    count<T extends SourceCountArgs>(
      args?: Subset<T, SourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SourceAggregateArgs>(args: Subset<T, SourceAggregateArgs>): Prisma.PrismaPromise<GetSourceAggregateType<T>>

    /**
     * Group by Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceGroupByArgs} args - Group by arguments.
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
      T extends SourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceGroupByArgs['orderBy'] }
        : { orderBy?: SourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Source model
   */
  readonly fields: SourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Source.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends ManagerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ManagerDefaultArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends Source$usersArgs<ExtArgs> = {}>(args?: Subset<T, Source$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Source model
   */
  interface SourceFieldRefs {
    readonly id: FieldRef<"Source", 'Int'>
    readonly title: FieldRef<"Source", 'String'>
    readonly sourceLink: FieldRef<"Source", 'String'>
    readonly category: FieldRef<"Source", 'SOURCE_CATEGORY'>
    readonly createdAt: FieldRef<"Source", 'DateTime'>
    readonly authorId: FieldRef<"Source", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Source findUnique
   */
  export type SourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source findUniqueOrThrow
   */
  export type SourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source findFirst
   */
  export type SourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sources.
     */
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source findFirstOrThrow
   */
  export type SourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sources.
     */
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source findMany
   */
  export type SourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Sources to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source create
   */
  export type SourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Source.
     */
    data: XOR<SourceCreateInput, SourceUncheckedCreateInput>
  }

  /**
   * Source createMany
   */
  export type SourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sources.
     */
    data: SourceCreateManyInput | SourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Source createManyAndReturn
   */
  export type SourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * The data used to create many Sources.
     */
    data: SourceCreateManyInput | SourceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Source update
   */
  export type SourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Source.
     */
    data: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
    /**
     * Choose, which Source to update.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source updateMany
   */
  export type SourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sources.
     */
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyInput>
    /**
     * Filter which Sources to update
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to update.
     */
    limit?: number
  }

  /**
   * Source updateManyAndReturn
   */
  export type SourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * The data used to update Sources.
     */
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyInput>
    /**
     * Filter which Sources to update
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Source upsert
   */
  export type SourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Source to update in case it exists.
     */
    where: SourceWhereUniqueInput
    /**
     * In case the Source found by the `where` argument doesn't exist, create a new Source with this data.
     */
    create: XOR<SourceCreateInput, SourceUncheckedCreateInput>
    /**
     * In case the Source was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
  }

  /**
   * Source delete
   */
  export type SourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter which Source to delete.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source deleteMany
   */
  export type SourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sources to delete
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to delete.
     */
    limit?: number
  }

  /**
   * Source.users
   */
  export type Source$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Source without action
   */
  export type SourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
  }


  /**
   * Model Opponent
   */

  export type AggregateOpponent = {
    _count: OpponentCountAggregateOutputType | null
    _avg: OpponentAvgAggregateOutputType | null
    _sum: OpponentSumAggregateOutputType | null
    _min: OpponentMinAggregateOutputType | null
    _max: OpponentMaxAggregateOutputType | null
  }

  export type OpponentAvgAggregateOutputType = {
    id: number | null
  }

  export type OpponentSumAggregateOutputType = {
    id: number | null
  }

  export type OpponentMinAggregateOutputType = {
    id: number | null
    name: string | null
    link: string | null
    info: string | null
    createdAt: Date | null
  }

  export type OpponentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    link: string | null
    info: string | null
    createdAt: Date | null
  }

  export type OpponentCountAggregateOutputType = {
    id: number
    name: number
    link: number
    info: number
    createdAt: number
    _all: number
  }


  export type OpponentAvgAggregateInputType = {
    id?: true
  }

  export type OpponentSumAggregateInputType = {
    id?: true
  }

  export type OpponentMinAggregateInputType = {
    id?: true
    name?: true
    link?: true
    info?: true
    createdAt?: true
  }

  export type OpponentMaxAggregateInputType = {
    id?: true
    name?: true
    link?: true
    info?: true
    createdAt?: true
  }

  export type OpponentCountAggregateInputType = {
    id?: true
    name?: true
    link?: true
    info?: true
    createdAt?: true
    _all?: true
  }

  export type OpponentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opponent to aggregate.
     */
    where?: OpponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opponents to fetch.
     */
    orderBy?: OpponentOrderByWithRelationInput | OpponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Opponents
    **/
    _count?: true | OpponentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpponentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpponentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpponentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpponentMaxAggregateInputType
  }

  export type GetOpponentAggregateType<T extends OpponentAggregateArgs> = {
        [P in keyof T & keyof AggregateOpponent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpponent[P]>
      : GetScalarType<T[P], AggregateOpponent[P]>
  }




  export type OpponentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpponentWhereInput
    orderBy?: OpponentOrderByWithAggregationInput | OpponentOrderByWithAggregationInput[]
    by: OpponentScalarFieldEnum[] | OpponentScalarFieldEnum
    having?: OpponentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpponentCountAggregateInputType | true
    _avg?: OpponentAvgAggregateInputType
    _sum?: OpponentSumAggregateInputType
    _min?: OpponentMinAggregateInputType
    _max?: OpponentMaxAggregateInputType
  }

  export type OpponentGroupByOutputType = {
    id: number
    name: string
    link: string | null
    info: string
    createdAt: Date
    _count: OpponentCountAggregateOutputType | null
    _avg: OpponentAvgAggregateOutputType | null
    _sum: OpponentSumAggregateOutputType | null
    _min: OpponentMinAggregateOutputType | null
    _max: OpponentMaxAggregateOutputType | null
  }

  type GetOpponentGroupByPayload<T extends OpponentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpponentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpponentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpponentGroupByOutputType[P]>
            : GetScalarType<T[P], OpponentGroupByOutputType[P]>
        }
      >
    >


  export type OpponentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    info?: boolean
    createdAt?: boolean
    users?: boolean | Opponent$usersArgs<ExtArgs>
    _count?: boolean | OpponentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opponent"]>

  export type OpponentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    info?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["opponent"]>

  export type OpponentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    info?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["opponent"]>

  export type OpponentSelectScalar = {
    id?: boolean
    name?: boolean
    link?: boolean
    info?: boolean
    createdAt?: boolean
  }

  export type OpponentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "link" | "info" | "createdAt", ExtArgs["result"]["opponent"]>
  export type OpponentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Opponent$usersArgs<ExtArgs>
    _count?: boolean | OpponentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OpponentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OpponentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OpponentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Opponent"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      link: string | null
      info: string
      createdAt: Date
    }, ExtArgs["result"]["opponent"]>
    composites: {}
  }

  type OpponentGetPayload<S extends boolean | null | undefined | OpponentDefaultArgs> = $Result.GetResult<Prisma.$OpponentPayload, S>

  type OpponentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpponentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpponentCountAggregateInputType | true
    }

  export interface OpponentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Opponent'], meta: { name: 'Opponent' } }
    /**
     * Find zero or one Opponent that matches the filter.
     * @param {OpponentFindUniqueArgs} args - Arguments to find a Opponent
     * @example
     * // Get one Opponent
     * const opponent = await prisma.opponent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpponentFindUniqueArgs>(args: SelectSubset<T, OpponentFindUniqueArgs<ExtArgs>>): Prisma__OpponentClient<$Result.GetResult<Prisma.$OpponentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Opponent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpponentFindUniqueOrThrowArgs} args - Arguments to find a Opponent
     * @example
     * // Get one Opponent
     * const opponent = await prisma.opponent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpponentFindUniqueOrThrowArgs>(args: SelectSubset<T, OpponentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpponentClient<$Result.GetResult<Prisma.$OpponentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opponent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpponentFindFirstArgs} args - Arguments to find a Opponent
     * @example
     * // Get one Opponent
     * const opponent = await prisma.opponent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpponentFindFirstArgs>(args?: SelectSubset<T, OpponentFindFirstArgs<ExtArgs>>): Prisma__OpponentClient<$Result.GetResult<Prisma.$OpponentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opponent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpponentFindFirstOrThrowArgs} args - Arguments to find a Opponent
     * @example
     * // Get one Opponent
     * const opponent = await prisma.opponent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpponentFindFirstOrThrowArgs>(args?: SelectSubset<T, OpponentFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpponentClient<$Result.GetResult<Prisma.$OpponentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Opponents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpponentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Opponents
     * const opponents = await prisma.opponent.findMany()
     * 
     * // Get first 10 Opponents
     * const opponents = await prisma.opponent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opponentWithIdOnly = await prisma.opponent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpponentFindManyArgs>(args?: SelectSubset<T, OpponentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Opponent.
     * @param {OpponentCreateArgs} args - Arguments to create a Opponent.
     * @example
     * // Create one Opponent
     * const Opponent = await prisma.opponent.create({
     *   data: {
     *     // ... data to create a Opponent
     *   }
     * })
     * 
     */
    create<T extends OpponentCreateArgs>(args: SelectSubset<T, OpponentCreateArgs<ExtArgs>>): Prisma__OpponentClient<$Result.GetResult<Prisma.$OpponentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Opponents.
     * @param {OpponentCreateManyArgs} args - Arguments to create many Opponents.
     * @example
     * // Create many Opponents
     * const opponent = await prisma.opponent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpponentCreateManyArgs>(args?: SelectSubset<T, OpponentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Opponents and returns the data saved in the database.
     * @param {OpponentCreateManyAndReturnArgs} args - Arguments to create many Opponents.
     * @example
     * // Create many Opponents
     * const opponent = await prisma.opponent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Opponents and only return the `id`
     * const opponentWithIdOnly = await prisma.opponent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpponentCreateManyAndReturnArgs>(args?: SelectSubset<T, OpponentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpponentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Opponent.
     * @param {OpponentDeleteArgs} args - Arguments to delete one Opponent.
     * @example
     * // Delete one Opponent
     * const Opponent = await prisma.opponent.delete({
     *   where: {
     *     // ... filter to delete one Opponent
     *   }
     * })
     * 
     */
    delete<T extends OpponentDeleteArgs>(args: SelectSubset<T, OpponentDeleteArgs<ExtArgs>>): Prisma__OpponentClient<$Result.GetResult<Prisma.$OpponentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Opponent.
     * @param {OpponentUpdateArgs} args - Arguments to update one Opponent.
     * @example
     * // Update one Opponent
     * const opponent = await prisma.opponent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpponentUpdateArgs>(args: SelectSubset<T, OpponentUpdateArgs<ExtArgs>>): Prisma__OpponentClient<$Result.GetResult<Prisma.$OpponentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Opponents.
     * @param {OpponentDeleteManyArgs} args - Arguments to filter Opponents to delete.
     * @example
     * // Delete a few Opponents
     * const { count } = await prisma.opponent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpponentDeleteManyArgs>(args?: SelectSubset<T, OpponentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpponentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Opponents
     * const opponent = await prisma.opponent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpponentUpdateManyArgs>(args: SelectSubset<T, OpponentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opponents and returns the data updated in the database.
     * @param {OpponentUpdateManyAndReturnArgs} args - Arguments to update many Opponents.
     * @example
     * // Update many Opponents
     * const opponent = await prisma.opponent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Opponents and only return the `id`
     * const opponentWithIdOnly = await prisma.opponent.updateManyAndReturn({
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
    updateManyAndReturn<T extends OpponentUpdateManyAndReturnArgs>(args: SelectSubset<T, OpponentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpponentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Opponent.
     * @param {OpponentUpsertArgs} args - Arguments to update or create a Opponent.
     * @example
     * // Update or create a Opponent
     * const opponent = await prisma.opponent.upsert({
     *   create: {
     *     // ... data to create a Opponent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Opponent we want to update
     *   }
     * })
     */
    upsert<T extends OpponentUpsertArgs>(args: SelectSubset<T, OpponentUpsertArgs<ExtArgs>>): Prisma__OpponentClient<$Result.GetResult<Prisma.$OpponentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Opponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpponentCountArgs} args - Arguments to filter Opponents to count.
     * @example
     * // Count the number of Opponents
     * const count = await prisma.opponent.count({
     *   where: {
     *     // ... the filter for the Opponents we want to count
     *   }
     * })
    **/
    count<T extends OpponentCountArgs>(
      args?: Subset<T, OpponentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpponentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Opponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OpponentAggregateArgs>(args: Subset<T, OpponentAggregateArgs>): Prisma.PrismaPromise<GetOpponentAggregateType<T>>

    /**
     * Group by Opponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpponentGroupByArgs} args - Group by arguments.
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
      T extends OpponentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpponentGroupByArgs['orderBy'] }
        : { orderBy?: OpponentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OpponentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpponentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Opponent model
   */
  readonly fields: OpponentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Opponent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpponentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Opponent$usersArgs<ExtArgs> = {}>(args?: Subset<T, Opponent$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Opponent model
   */
  interface OpponentFieldRefs {
    readonly id: FieldRef<"Opponent", 'Int'>
    readonly name: FieldRef<"Opponent", 'String'>
    readonly link: FieldRef<"Opponent", 'String'>
    readonly info: FieldRef<"Opponent", 'String'>
    readonly createdAt: FieldRef<"Opponent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Opponent findUnique
   */
  export type OpponentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opponent
     */
    select?: OpponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opponent
     */
    omit?: OpponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentInclude<ExtArgs> | null
    /**
     * Filter, which Opponent to fetch.
     */
    where: OpponentWhereUniqueInput
  }

  /**
   * Opponent findUniqueOrThrow
   */
  export type OpponentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opponent
     */
    select?: OpponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opponent
     */
    omit?: OpponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentInclude<ExtArgs> | null
    /**
     * Filter, which Opponent to fetch.
     */
    where: OpponentWhereUniqueInput
  }

  /**
   * Opponent findFirst
   */
  export type OpponentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opponent
     */
    select?: OpponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opponent
     */
    omit?: OpponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentInclude<ExtArgs> | null
    /**
     * Filter, which Opponent to fetch.
     */
    where?: OpponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opponents to fetch.
     */
    orderBy?: OpponentOrderByWithRelationInput | OpponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opponents.
     */
    cursor?: OpponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opponents.
     */
    distinct?: OpponentScalarFieldEnum | OpponentScalarFieldEnum[]
  }

  /**
   * Opponent findFirstOrThrow
   */
  export type OpponentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opponent
     */
    select?: OpponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opponent
     */
    omit?: OpponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentInclude<ExtArgs> | null
    /**
     * Filter, which Opponent to fetch.
     */
    where?: OpponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opponents to fetch.
     */
    orderBy?: OpponentOrderByWithRelationInput | OpponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opponents.
     */
    cursor?: OpponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opponents.
     */
    distinct?: OpponentScalarFieldEnum | OpponentScalarFieldEnum[]
  }

  /**
   * Opponent findMany
   */
  export type OpponentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opponent
     */
    select?: OpponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opponent
     */
    omit?: OpponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentInclude<ExtArgs> | null
    /**
     * Filter, which Opponents to fetch.
     */
    where?: OpponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opponents to fetch.
     */
    orderBy?: OpponentOrderByWithRelationInput | OpponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Opponents.
     */
    cursor?: OpponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opponents.
     */
    skip?: number
    distinct?: OpponentScalarFieldEnum | OpponentScalarFieldEnum[]
  }

  /**
   * Opponent create
   */
  export type OpponentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opponent
     */
    select?: OpponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opponent
     */
    omit?: OpponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentInclude<ExtArgs> | null
    /**
     * The data needed to create a Opponent.
     */
    data: XOR<OpponentCreateInput, OpponentUncheckedCreateInput>
  }

  /**
   * Opponent createMany
   */
  export type OpponentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Opponents.
     */
    data: OpponentCreateManyInput | OpponentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Opponent createManyAndReturn
   */
  export type OpponentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opponent
     */
    select?: OpponentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opponent
     */
    omit?: OpponentOmit<ExtArgs> | null
    /**
     * The data used to create many Opponents.
     */
    data: OpponentCreateManyInput | OpponentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Opponent update
   */
  export type OpponentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opponent
     */
    select?: OpponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opponent
     */
    omit?: OpponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentInclude<ExtArgs> | null
    /**
     * The data needed to update a Opponent.
     */
    data: XOR<OpponentUpdateInput, OpponentUncheckedUpdateInput>
    /**
     * Choose, which Opponent to update.
     */
    where: OpponentWhereUniqueInput
  }

  /**
   * Opponent updateMany
   */
  export type OpponentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Opponents.
     */
    data: XOR<OpponentUpdateManyMutationInput, OpponentUncheckedUpdateManyInput>
    /**
     * Filter which Opponents to update
     */
    where?: OpponentWhereInput
    /**
     * Limit how many Opponents to update.
     */
    limit?: number
  }

  /**
   * Opponent updateManyAndReturn
   */
  export type OpponentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opponent
     */
    select?: OpponentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opponent
     */
    omit?: OpponentOmit<ExtArgs> | null
    /**
     * The data used to update Opponents.
     */
    data: XOR<OpponentUpdateManyMutationInput, OpponentUncheckedUpdateManyInput>
    /**
     * Filter which Opponents to update
     */
    where?: OpponentWhereInput
    /**
     * Limit how many Opponents to update.
     */
    limit?: number
  }

  /**
   * Opponent upsert
   */
  export type OpponentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opponent
     */
    select?: OpponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opponent
     */
    omit?: OpponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentInclude<ExtArgs> | null
    /**
     * The filter to search for the Opponent to update in case it exists.
     */
    where: OpponentWhereUniqueInput
    /**
     * In case the Opponent found by the `where` argument doesn't exist, create a new Opponent with this data.
     */
    create: XOR<OpponentCreateInput, OpponentUncheckedCreateInput>
    /**
     * In case the Opponent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpponentUpdateInput, OpponentUncheckedUpdateInput>
  }

  /**
   * Opponent delete
   */
  export type OpponentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opponent
     */
    select?: OpponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opponent
     */
    omit?: OpponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentInclude<ExtArgs> | null
    /**
     * Filter which Opponent to delete.
     */
    where: OpponentWhereUniqueInput
  }

  /**
   * Opponent deleteMany
   */
  export type OpponentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opponents to delete
     */
    where?: OpponentWhereInput
    /**
     * Limit how many Opponents to delete.
     */
    limit?: number
  }

  /**
   * Opponent.users
   */
  export type Opponent$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Opponent without action
   */
  export type OpponentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opponent
     */
    select?: OpponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opponent
     */
    omit?: OpponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentInclude<ExtArgs> | null
  }


  /**
   * Model Blogger
   */

  export type AggregateBlogger = {
    _count: BloggerCountAggregateOutputType | null
    _avg: BloggerAvgAggregateOutputType | null
    _sum: BloggerSumAggregateOutputType | null
    _min: BloggerMinAggregateOutputType | null
    _max: BloggerMaxAggregateOutputType | null
  }

  export type BloggerAvgAggregateOutputType = {
    id: number | null
    subscribersCount: number | null
    priceSOM: number | null
    priceUSD: number | null
    authorId: number | null
  }

  export type BloggerSumAggregateOutputType = {
    id: number | null
    subscribersCount: number | null
    priceSOM: number | null
    priceUSD: number | null
    authorId: number | null
  }

  export type BloggerMinAggregateOutputType = {
    id: number | null
    name: string | null
    link: string | null
    subscribersCount: number | null
    info: string | null
    priceSOM: number | null
    priceUSD: number | null
    phoneNumber: string | null
    email: string | null
    createdAt: Date | null
    authorId: number | null
  }

  export type BloggerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    link: string | null
    subscribersCount: number | null
    info: string | null
    priceSOM: number | null
    priceUSD: number | null
    phoneNumber: string | null
    email: string | null
    createdAt: Date | null
    authorId: number | null
  }

  export type BloggerCountAggregateOutputType = {
    id: number
    name: number
    link: number
    subscribersCount: number
    info: number
    priceSOM: number
    priceUSD: number
    phoneNumber: number
    email: number
    categories: number
    createdAt: number
    authorId: number
    _all: number
  }


  export type BloggerAvgAggregateInputType = {
    id?: true
    subscribersCount?: true
    priceSOM?: true
    priceUSD?: true
    authorId?: true
  }

  export type BloggerSumAggregateInputType = {
    id?: true
    subscribersCount?: true
    priceSOM?: true
    priceUSD?: true
    authorId?: true
  }

  export type BloggerMinAggregateInputType = {
    id?: true
    name?: true
    link?: true
    subscribersCount?: true
    info?: true
    priceSOM?: true
    priceUSD?: true
    phoneNumber?: true
    email?: true
    createdAt?: true
    authorId?: true
  }

  export type BloggerMaxAggregateInputType = {
    id?: true
    name?: true
    link?: true
    subscribersCount?: true
    info?: true
    priceSOM?: true
    priceUSD?: true
    phoneNumber?: true
    email?: true
    createdAt?: true
    authorId?: true
  }

  export type BloggerCountAggregateInputType = {
    id?: true
    name?: true
    link?: true
    subscribersCount?: true
    info?: true
    priceSOM?: true
    priceUSD?: true
    phoneNumber?: true
    email?: true
    categories?: true
    createdAt?: true
    authorId?: true
    _all?: true
  }

  export type BloggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogger to aggregate.
     */
    where?: BloggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bloggers to fetch.
     */
    orderBy?: BloggerOrderByWithRelationInput | BloggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BloggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bloggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bloggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bloggers
    **/
    _count?: true | BloggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BloggerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BloggerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BloggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BloggerMaxAggregateInputType
  }

  export type GetBloggerAggregateType<T extends BloggerAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogger[P]>
      : GetScalarType<T[P], AggregateBlogger[P]>
  }




  export type BloggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloggerWhereInput
    orderBy?: BloggerOrderByWithAggregationInput | BloggerOrderByWithAggregationInput[]
    by: BloggerScalarFieldEnum[] | BloggerScalarFieldEnum
    having?: BloggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BloggerCountAggregateInputType | true
    _avg?: BloggerAvgAggregateInputType
    _sum?: BloggerSumAggregateInputType
    _min?: BloggerMinAggregateInputType
    _max?: BloggerMaxAggregateInputType
  }

  export type BloggerGroupByOutputType = {
    id: number
    name: string
    link: string
    subscribersCount: number
    info: string
    priceSOM: number | null
    priceUSD: number | null
    phoneNumber: string | null
    email: string | null
    categories: $Enums.SOURCE_CATEGORY[]
    createdAt: Date
    authorId: number
    _count: BloggerCountAggregateOutputType | null
    _avg: BloggerAvgAggregateOutputType | null
    _sum: BloggerSumAggregateOutputType | null
    _min: BloggerMinAggregateOutputType | null
    _max: BloggerMaxAggregateOutputType | null
  }

  type GetBloggerGroupByPayload<T extends BloggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BloggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BloggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BloggerGroupByOutputType[P]>
            : GetScalarType<T[P], BloggerGroupByOutputType[P]>
        }
      >
    >


  export type BloggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    subscribersCount?: boolean
    info?: boolean
    priceSOM?: boolean
    priceUSD?: boolean
    phoneNumber?: boolean
    email?: boolean
    categories?: boolean
    createdAt?: boolean
    authorId?: boolean
    author?: boolean | ManagerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogger"]>

  export type BloggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    subscribersCount?: boolean
    info?: boolean
    priceSOM?: boolean
    priceUSD?: boolean
    phoneNumber?: boolean
    email?: boolean
    categories?: boolean
    createdAt?: boolean
    authorId?: boolean
    author?: boolean | ManagerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogger"]>

  export type BloggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    subscribersCount?: boolean
    info?: boolean
    priceSOM?: boolean
    priceUSD?: boolean
    phoneNumber?: boolean
    email?: boolean
    categories?: boolean
    createdAt?: boolean
    authorId?: boolean
    author?: boolean | ManagerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogger"]>

  export type BloggerSelectScalar = {
    id?: boolean
    name?: boolean
    link?: boolean
    subscribersCount?: boolean
    info?: boolean
    priceSOM?: boolean
    priceUSD?: boolean
    phoneNumber?: boolean
    email?: boolean
    categories?: boolean
    createdAt?: boolean
    authorId?: boolean
  }

  export type BloggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "link" | "subscribersCount" | "info" | "priceSOM" | "priceUSD" | "phoneNumber" | "email" | "categories" | "createdAt" | "authorId", ExtArgs["result"]["blogger"]>
  export type BloggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ManagerDefaultArgs<ExtArgs>
  }
  export type BloggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ManagerDefaultArgs<ExtArgs>
  }
  export type BloggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ManagerDefaultArgs<ExtArgs>
  }

  export type $BloggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blogger"
    objects: {
      author: Prisma.$ManagerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      link: string
      subscribersCount: number
      info: string
      priceSOM: number | null
      priceUSD: number | null
      phoneNumber: string | null
      email: string | null
      categories: $Enums.SOURCE_CATEGORY[]
      createdAt: Date
      authorId: number
    }, ExtArgs["result"]["blogger"]>
    composites: {}
  }

  type BloggerGetPayload<S extends boolean | null | undefined | BloggerDefaultArgs> = $Result.GetResult<Prisma.$BloggerPayload, S>

  type BloggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BloggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BloggerCountAggregateInputType | true
    }

  export interface BloggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blogger'], meta: { name: 'Blogger' } }
    /**
     * Find zero or one Blogger that matches the filter.
     * @param {BloggerFindUniqueArgs} args - Arguments to find a Blogger
     * @example
     * // Get one Blogger
     * const blogger = await prisma.blogger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BloggerFindUniqueArgs>(args: SelectSubset<T, BloggerFindUniqueArgs<ExtArgs>>): Prisma__BloggerClient<$Result.GetResult<Prisma.$BloggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blogger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BloggerFindUniqueOrThrowArgs} args - Arguments to find a Blogger
     * @example
     * // Get one Blogger
     * const blogger = await prisma.blogger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BloggerFindUniqueOrThrowArgs>(args: SelectSubset<T, BloggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BloggerClient<$Result.GetResult<Prisma.$BloggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blogger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloggerFindFirstArgs} args - Arguments to find a Blogger
     * @example
     * // Get one Blogger
     * const blogger = await prisma.blogger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BloggerFindFirstArgs>(args?: SelectSubset<T, BloggerFindFirstArgs<ExtArgs>>): Prisma__BloggerClient<$Result.GetResult<Prisma.$BloggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blogger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloggerFindFirstOrThrowArgs} args - Arguments to find a Blogger
     * @example
     * // Get one Blogger
     * const blogger = await prisma.blogger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BloggerFindFirstOrThrowArgs>(args?: SelectSubset<T, BloggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BloggerClient<$Result.GetResult<Prisma.$BloggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bloggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bloggers
     * const bloggers = await prisma.blogger.findMany()
     * 
     * // Get first 10 Bloggers
     * const bloggers = await prisma.blogger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bloggerWithIdOnly = await prisma.blogger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BloggerFindManyArgs>(args?: SelectSubset<T, BloggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blogger.
     * @param {BloggerCreateArgs} args - Arguments to create a Blogger.
     * @example
     * // Create one Blogger
     * const Blogger = await prisma.blogger.create({
     *   data: {
     *     // ... data to create a Blogger
     *   }
     * })
     * 
     */
    create<T extends BloggerCreateArgs>(args: SelectSubset<T, BloggerCreateArgs<ExtArgs>>): Prisma__BloggerClient<$Result.GetResult<Prisma.$BloggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bloggers.
     * @param {BloggerCreateManyArgs} args - Arguments to create many Bloggers.
     * @example
     * // Create many Bloggers
     * const blogger = await prisma.blogger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BloggerCreateManyArgs>(args?: SelectSubset<T, BloggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bloggers and returns the data saved in the database.
     * @param {BloggerCreateManyAndReturnArgs} args - Arguments to create many Bloggers.
     * @example
     * // Create many Bloggers
     * const blogger = await prisma.blogger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bloggers and only return the `id`
     * const bloggerWithIdOnly = await prisma.blogger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BloggerCreateManyAndReturnArgs>(args?: SelectSubset<T, BloggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blogger.
     * @param {BloggerDeleteArgs} args - Arguments to delete one Blogger.
     * @example
     * // Delete one Blogger
     * const Blogger = await prisma.blogger.delete({
     *   where: {
     *     // ... filter to delete one Blogger
     *   }
     * })
     * 
     */
    delete<T extends BloggerDeleteArgs>(args: SelectSubset<T, BloggerDeleteArgs<ExtArgs>>): Prisma__BloggerClient<$Result.GetResult<Prisma.$BloggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blogger.
     * @param {BloggerUpdateArgs} args - Arguments to update one Blogger.
     * @example
     * // Update one Blogger
     * const blogger = await prisma.blogger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BloggerUpdateArgs>(args: SelectSubset<T, BloggerUpdateArgs<ExtArgs>>): Prisma__BloggerClient<$Result.GetResult<Prisma.$BloggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bloggers.
     * @param {BloggerDeleteManyArgs} args - Arguments to filter Bloggers to delete.
     * @example
     * // Delete a few Bloggers
     * const { count } = await prisma.blogger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BloggerDeleteManyArgs>(args?: SelectSubset<T, BloggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bloggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bloggers
     * const blogger = await prisma.blogger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BloggerUpdateManyArgs>(args: SelectSubset<T, BloggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bloggers and returns the data updated in the database.
     * @param {BloggerUpdateManyAndReturnArgs} args - Arguments to update many Bloggers.
     * @example
     * // Update many Bloggers
     * const blogger = await prisma.blogger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bloggers and only return the `id`
     * const bloggerWithIdOnly = await prisma.blogger.updateManyAndReturn({
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
    updateManyAndReturn<T extends BloggerUpdateManyAndReturnArgs>(args: SelectSubset<T, BloggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blogger.
     * @param {BloggerUpsertArgs} args - Arguments to update or create a Blogger.
     * @example
     * // Update or create a Blogger
     * const blogger = await prisma.blogger.upsert({
     *   create: {
     *     // ... data to create a Blogger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blogger we want to update
     *   }
     * })
     */
    upsert<T extends BloggerUpsertArgs>(args: SelectSubset<T, BloggerUpsertArgs<ExtArgs>>): Prisma__BloggerClient<$Result.GetResult<Prisma.$BloggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bloggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloggerCountArgs} args - Arguments to filter Bloggers to count.
     * @example
     * // Count the number of Bloggers
     * const count = await prisma.blogger.count({
     *   where: {
     *     // ... the filter for the Bloggers we want to count
     *   }
     * })
    **/
    count<T extends BloggerCountArgs>(
      args?: Subset<T, BloggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BloggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blogger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BloggerAggregateArgs>(args: Subset<T, BloggerAggregateArgs>): Prisma.PrismaPromise<GetBloggerAggregateType<T>>

    /**
     * Group by Blogger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloggerGroupByArgs} args - Group by arguments.
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
      T extends BloggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BloggerGroupByArgs['orderBy'] }
        : { orderBy?: BloggerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BloggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blogger model
   */
  readonly fields: BloggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blogger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BloggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends ManagerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ManagerDefaultArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Blogger model
   */
  interface BloggerFieldRefs {
    readonly id: FieldRef<"Blogger", 'Int'>
    readonly name: FieldRef<"Blogger", 'String'>
    readonly link: FieldRef<"Blogger", 'String'>
    readonly subscribersCount: FieldRef<"Blogger", 'Int'>
    readonly info: FieldRef<"Blogger", 'String'>
    readonly priceSOM: FieldRef<"Blogger", 'Int'>
    readonly priceUSD: FieldRef<"Blogger", 'Int'>
    readonly phoneNumber: FieldRef<"Blogger", 'String'>
    readonly email: FieldRef<"Blogger", 'String'>
    readonly categories: FieldRef<"Blogger", 'SOURCE_CATEGORY[]'>
    readonly createdAt: FieldRef<"Blogger", 'DateTime'>
    readonly authorId: FieldRef<"Blogger", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Blogger findUnique
   */
  export type BloggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogger
     */
    select?: BloggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogger
     */
    omit?: BloggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloggerInclude<ExtArgs> | null
    /**
     * Filter, which Blogger to fetch.
     */
    where: BloggerWhereUniqueInput
  }

  /**
   * Blogger findUniqueOrThrow
   */
  export type BloggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogger
     */
    select?: BloggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogger
     */
    omit?: BloggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloggerInclude<ExtArgs> | null
    /**
     * Filter, which Blogger to fetch.
     */
    where: BloggerWhereUniqueInput
  }

  /**
   * Blogger findFirst
   */
  export type BloggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogger
     */
    select?: BloggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogger
     */
    omit?: BloggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloggerInclude<ExtArgs> | null
    /**
     * Filter, which Blogger to fetch.
     */
    where?: BloggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bloggers to fetch.
     */
    orderBy?: BloggerOrderByWithRelationInput | BloggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bloggers.
     */
    cursor?: BloggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bloggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bloggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bloggers.
     */
    distinct?: BloggerScalarFieldEnum | BloggerScalarFieldEnum[]
  }

  /**
   * Blogger findFirstOrThrow
   */
  export type BloggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogger
     */
    select?: BloggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogger
     */
    omit?: BloggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloggerInclude<ExtArgs> | null
    /**
     * Filter, which Blogger to fetch.
     */
    where?: BloggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bloggers to fetch.
     */
    orderBy?: BloggerOrderByWithRelationInput | BloggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bloggers.
     */
    cursor?: BloggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bloggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bloggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bloggers.
     */
    distinct?: BloggerScalarFieldEnum | BloggerScalarFieldEnum[]
  }

  /**
   * Blogger findMany
   */
  export type BloggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogger
     */
    select?: BloggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogger
     */
    omit?: BloggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloggerInclude<ExtArgs> | null
    /**
     * Filter, which Bloggers to fetch.
     */
    where?: BloggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bloggers to fetch.
     */
    orderBy?: BloggerOrderByWithRelationInput | BloggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bloggers.
     */
    cursor?: BloggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bloggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bloggers.
     */
    skip?: number
    distinct?: BloggerScalarFieldEnum | BloggerScalarFieldEnum[]
  }

  /**
   * Blogger create
   */
  export type BloggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogger
     */
    select?: BloggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogger
     */
    omit?: BloggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloggerInclude<ExtArgs> | null
    /**
     * The data needed to create a Blogger.
     */
    data: XOR<BloggerCreateInput, BloggerUncheckedCreateInput>
  }

  /**
   * Blogger createMany
   */
  export type BloggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bloggers.
     */
    data: BloggerCreateManyInput | BloggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blogger createManyAndReturn
   */
  export type BloggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogger
     */
    select?: BloggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blogger
     */
    omit?: BloggerOmit<ExtArgs> | null
    /**
     * The data used to create many Bloggers.
     */
    data: BloggerCreateManyInput | BloggerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloggerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blogger update
   */
  export type BloggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogger
     */
    select?: BloggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogger
     */
    omit?: BloggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloggerInclude<ExtArgs> | null
    /**
     * The data needed to update a Blogger.
     */
    data: XOR<BloggerUpdateInput, BloggerUncheckedUpdateInput>
    /**
     * Choose, which Blogger to update.
     */
    where: BloggerWhereUniqueInput
  }

  /**
   * Blogger updateMany
   */
  export type BloggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bloggers.
     */
    data: XOR<BloggerUpdateManyMutationInput, BloggerUncheckedUpdateManyInput>
    /**
     * Filter which Bloggers to update
     */
    where?: BloggerWhereInput
    /**
     * Limit how many Bloggers to update.
     */
    limit?: number
  }

  /**
   * Blogger updateManyAndReturn
   */
  export type BloggerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogger
     */
    select?: BloggerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blogger
     */
    omit?: BloggerOmit<ExtArgs> | null
    /**
     * The data used to update Bloggers.
     */
    data: XOR<BloggerUpdateManyMutationInput, BloggerUncheckedUpdateManyInput>
    /**
     * Filter which Bloggers to update
     */
    where?: BloggerWhereInput
    /**
     * Limit how many Bloggers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloggerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blogger upsert
   */
  export type BloggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogger
     */
    select?: BloggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogger
     */
    omit?: BloggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloggerInclude<ExtArgs> | null
    /**
     * The filter to search for the Blogger to update in case it exists.
     */
    where: BloggerWhereUniqueInput
    /**
     * In case the Blogger found by the `where` argument doesn't exist, create a new Blogger with this data.
     */
    create: XOR<BloggerCreateInput, BloggerUncheckedCreateInput>
    /**
     * In case the Blogger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BloggerUpdateInput, BloggerUncheckedUpdateInput>
  }

  /**
   * Blogger delete
   */
  export type BloggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogger
     */
    select?: BloggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogger
     */
    omit?: BloggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloggerInclude<ExtArgs> | null
    /**
     * Filter which Blogger to delete.
     */
    where: BloggerWhereUniqueInput
  }

  /**
   * Blogger deleteMany
   */
  export type BloggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bloggers to delete
     */
    where?: BloggerWhereInput
    /**
     * Limit how many Bloggers to delete.
     */
    limit?: number
  }

  /**
   * Blogger without action
   */
  export type BloggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogger
     */
    select?: BloggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogger
     */
    omit?: BloggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloggerInclude<ExtArgs> | null
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


  export const ManagerScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type ManagerScalarFieldEnum = (typeof ManagerScalarFieldEnum)[keyof typeof ManagerScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    userLink: 'userLink',
    phoneNumber: 'phoneNumber',
    email: 'email',
    homeAddress: 'homeAddress',
    leadStatus: 'leadStatus',
    taskImportance: 'taskImportance',
    taskUrgency: 'taskUrgency',
    taskStatus: 'taskStatus',
    legalAction: 'legalAction',
    problemShort: 'problemShort',
    problemFull: 'problemFull',
    nearestTask: 'nearestTask',
    nearestTaskDeadline: 'nearestTaskDeadline',
    timeOfPerformance: 'timeOfPerformance',
    priceSOM: 'priceSOM',
    priceUSD: 'priceUSD',
    courtInfo: 'courtInfo',
    statusInCourt: 'statusInCourt',
    refusalReason: 'refusalReason',
    createdAt: 'createdAt',
    assignmentTime: 'assignmentTime',
    authorId: 'authorId',
    sourceId: 'sourceId',
    opponentId: 'opponentId',
    managerId: 'managerId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SourceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    sourceLink: 'sourceLink',
    category: 'category',
    createdAt: 'createdAt',
    authorId: 'authorId'
  };

  export type SourceScalarFieldEnum = (typeof SourceScalarFieldEnum)[keyof typeof SourceScalarFieldEnum]


  export const OpponentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    link: 'link',
    info: 'info',
    createdAt: 'createdAt'
  };

  export type OpponentScalarFieldEnum = (typeof OpponentScalarFieldEnum)[keyof typeof OpponentScalarFieldEnum]


  export const BloggerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    link: 'link',
    subscribersCount: 'subscribersCount',
    info: 'info',
    priceSOM: 'priceSOM',
    priceUSD: 'priceUSD',
    phoneNumber: 'phoneNumber',
    email: 'email',
    categories: 'categories',
    createdAt: 'createdAt',
    authorId: 'authorId'
  };

  export type BloggerScalarFieldEnum = (typeof BloggerScalarFieldEnum)[keyof typeof BloggerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'ROLES'
   */
  export type EnumROLESFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLES'>
    


  /**
   * Reference to a field of type 'ROLES[]'
   */
  export type ListEnumROLESFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLES[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'LEAD_STATUS'
   */
  export type EnumLEAD_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LEAD_STATUS'>
    


  /**
   * Reference to a field of type 'LEAD_STATUS[]'
   */
  export type ListEnumLEAD_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LEAD_STATUS[]'>
    


  /**
   * Reference to a field of type 'TASK_IMPORTANCE'
   */
  export type EnumTASK_IMPORTANCEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TASK_IMPORTANCE'>
    


  /**
   * Reference to a field of type 'TASK_IMPORTANCE[]'
   */
  export type ListEnumTASK_IMPORTANCEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TASK_IMPORTANCE[]'>
    


  /**
   * Reference to a field of type 'TASK_URGENCY'
   */
  export type EnumTASK_URGENCYFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TASK_URGENCY'>
    


  /**
   * Reference to a field of type 'TASK_URGENCY[]'
   */
  export type ListEnumTASK_URGENCYFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TASK_URGENCY[]'>
    


  /**
   * Reference to a field of type 'TASK_STATUS'
   */
  export type EnumTASK_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TASK_STATUS'>
    


  /**
   * Reference to a field of type 'TASK_STATUS[]'
   */
  export type ListEnumTASK_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TASK_STATUS[]'>
    


  /**
   * Reference to a field of type 'LEGAL_ACTION'
   */
  export type EnumLEGAL_ACTIONFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LEGAL_ACTION'>
    


  /**
   * Reference to a field of type 'LEGAL_ACTION[]'
   */
  export type ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LEGAL_ACTION[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'STATUS_IN_COURT'
   */
  export type EnumSTATUS_IN_COURTFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STATUS_IN_COURT'>
    


  /**
   * Reference to a field of type 'STATUS_IN_COURT[]'
   */
  export type ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STATUS_IN_COURT[]'>
    


  /**
   * Reference to a field of type 'REFUSAL_REASON'
   */
  export type EnumREFUSAL_REASONFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'REFUSAL_REASON'>
    


  /**
   * Reference to a field of type 'REFUSAL_REASON[]'
   */
  export type ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'REFUSAL_REASON[]'>
    


  /**
   * Reference to a field of type 'SOURCE_CATEGORY'
   */
  export type EnumSOURCE_CATEGORYFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SOURCE_CATEGORY'>
    


  /**
   * Reference to a field of type 'SOURCE_CATEGORY[]'
   */
  export type ListEnumSOURCE_CATEGORYFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SOURCE_CATEGORY[]'>
    


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


  export type ManagerWhereInput = {
    AND?: ManagerWhereInput | ManagerWhereInput[]
    OR?: ManagerWhereInput[]
    NOT?: ManagerWhereInput | ManagerWhereInput[]
    id?: IntFilter<"Manager"> | number
    username?: StringFilter<"Manager"> | string
    password?: StringFilter<"Manager"> | string
    role?: EnumROLESFilter<"Manager"> | $Enums.ROLES
    createdAt?: DateTimeFilter<"Manager"> | Date | string
    authoredUsers?: UserListRelationFilter
    managedUsers?: UserListRelationFilter
    sources?: SourceListRelationFilter
    bloggers?: BloggerListRelationFilter
  }

  export type ManagerOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    authoredUsers?: UserOrderByRelationAggregateInput
    managedUsers?: UserOrderByRelationAggregateInput
    sources?: SourceOrderByRelationAggregateInput
    bloggers?: BloggerOrderByRelationAggregateInput
  }

  export type ManagerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: ManagerWhereInput | ManagerWhereInput[]
    OR?: ManagerWhereInput[]
    NOT?: ManagerWhereInput | ManagerWhereInput[]
    password?: StringFilter<"Manager"> | string
    role?: EnumROLESFilter<"Manager"> | $Enums.ROLES
    createdAt?: DateTimeFilter<"Manager"> | Date | string
    authoredUsers?: UserListRelationFilter
    managedUsers?: UserListRelationFilter
    sources?: SourceListRelationFilter
    bloggers?: BloggerListRelationFilter
  }, "id" | "username">

  export type ManagerOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: ManagerCountOrderByAggregateInput
    _avg?: ManagerAvgOrderByAggregateInput
    _max?: ManagerMaxOrderByAggregateInput
    _min?: ManagerMinOrderByAggregateInput
    _sum?: ManagerSumOrderByAggregateInput
  }

  export type ManagerScalarWhereWithAggregatesInput = {
    AND?: ManagerScalarWhereWithAggregatesInput | ManagerScalarWhereWithAggregatesInput[]
    OR?: ManagerScalarWhereWithAggregatesInput[]
    NOT?: ManagerScalarWhereWithAggregatesInput | ManagerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Manager"> | number
    username?: StringWithAggregatesFilter<"Manager"> | string
    password?: StringWithAggregatesFilter<"Manager"> | string
    role?: EnumROLESWithAggregatesFilter<"Manager"> | $Enums.ROLES
    createdAt?: DateTimeWithAggregatesFilter<"Manager"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    userLink?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    homeAddress?: StringFilter<"User"> | string
    leadStatus?: EnumLEAD_STATUSFilter<"User"> | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFilter<"User"> | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFilter<"User"> | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFilter<"User"> | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFilter<"User"> | $Enums.LEGAL_ACTION
    problemShort?: StringFilter<"User"> | string
    problemFull?: StringFilter<"User"> | string
    nearestTask?: StringFilter<"User"> | string
    nearestTaskDeadline?: DateTimeNullableFilter<"User"> | Date | string | null
    timeOfPerformance?: DateTimeNullableFilter<"User"> | Date | string | null
    priceSOM?: BigIntNullableFilter<"User"> | bigint | number | null
    priceUSD?: BigIntNullableFilter<"User"> | bigint | number | null
    courtInfo?: StringFilter<"User"> | string
    statusInCourt?: EnumSTATUS_IN_COURTFilter<"User"> | $Enums.STATUS_IN_COURT
    refusalReason?: EnumREFUSAL_REASONNullableFilter<"User"> | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    assignmentTime?: DateTimeNullableFilter<"User"> | Date | string | null
    authorId?: IntFilter<"User"> | number
    sourceId?: IntFilter<"User"> | number
    opponentId?: IntNullableFilter<"User"> | number | null
    managerId?: IntNullableFilter<"User"> | number | null
    author?: XOR<ManagerScalarRelationFilter, ManagerWhereInput>
    source?: XOR<SourceScalarRelationFilter, SourceWhereInput>
    opponent?: XOR<OpponentNullableScalarRelationFilter, OpponentWhereInput> | null
    manager?: XOR<ManagerNullableScalarRelationFilter, ManagerWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    userLink?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    homeAddress?: SortOrder
    leadStatus?: SortOrder
    taskImportance?: SortOrder
    taskUrgency?: SortOrder
    taskStatus?: SortOrder
    legalAction?: SortOrder
    problemShort?: SortOrder
    problemFull?: SortOrder
    nearestTask?: SortOrder
    nearestTaskDeadline?: SortOrderInput | SortOrder
    timeOfPerformance?: SortOrderInput | SortOrder
    priceSOM?: SortOrderInput | SortOrder
    priceUSD?: SortOrderInput | SortOrder
    courtInfo?: SortOrder
    statusInCourt?: SortOrder
    refusalReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    assignmentTime?: SortOrderInput | SortOrder
    authorId?: SortOrder
    sourceId?: SortOrder
    opponentId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    author?: ManagerOrderByWithRelationInput
    source?: SourceOrderByWithRelationInput
    opponent?: OpponentOrderByWithRelationInput
    manager?: ManagerOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userLink?: string
    phoneNumber?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    homeAddress?: StringFilter<"User"> | string
    leadStatus?: EnumLEAD_STATUSFilter<"User"> | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFilter<"User"> | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFilter<"User"> | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFilter<"User"> | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFilter<"User"> | $Enums.LEGAL_ACTION
    problemShort?: StringFilter<"User"> | string
    problemFull?: StringFilter<"User"> | string
    nearestTask?: StringFilter<"User"> | string
    nearestTaskDeadline?: DateTimeNullableFilter<"User"> | Date | string | null
    timeOfPerformance?: DateTimeNullableFilter<"User"> | Date | string | null
    priceSOM?: BigIntNullableFilter<"User"> | bigint | number | null
    priceUSD?: BigIntNullableFilter<"User"> | bigint | number | null
    courtInfo?: StringFilter<"User"> | string
    statusInCourt?: EnumSTATUS_IN_COURTFilter<"User"> | $Enums.STATUS_IN_COURT
    refusalReason?: EnumREFUSAL_REASONNullableFilter<"User"> | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    assignmentTime?: DateTimeNullableFilter<"User"> | Date | string | null
    authorId?: IntFilter<"User"> | number
    sourceId?: IntFilter<"User"> | number
    opponentId?: IntNullableFilter<"User"> | number | null
    managerId?: IntNullableFilter<"User"> | number | null
    author?: XOR<ManagerScalarRelationFilter, ManagerWhereInput>
    source?: XOR<SourceScalarRelationFilter, SourceWhereInput>
    opponent?: XOR<OpponentNullableScalarRelationFilter, OpponentWhereInput> | null
    manager?: XOR<ManagerNullableScalarRelationFilter, ManagerWhereInput> | null
  }, "id" | "userLink" | "phoneNumber" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    userLink?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    homeAddress?: SortOrder
    leadStatus?: SortOrder
    taskImportance?: SortOrder
    taskUrgency?: SortOrder
    taskStatus?: SortOrder
    legalAction?: SortOrder
    problemShort?: SortOrder
    problemFull?: SortOrder
    nearestTask?: SortOrder
    nearestTaskDeadline?: SortOrderInput | SortOrder
    timeOfPerformance?: SortOrderInput | SortOrder
    priceSOM?: SortOrderInput | SortOrder
    priceUSD?: SortOrderInput | SortOrder
    courtInfo?: SortOrder
    statusInCourt?: SortOrder
    refusalReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    assignmentTime?: SortOrderInput | SortOrder
    authorId?: SortOrder
    sourceId?: SortOrder
    opponentId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
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
    userLink?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    homeAddress?: StringWithAggregatesFilter<"User"> | string
    leadStatus?: EnumLEAD_STATUSWithAggregatesFilter<"User"> | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEWithAggregatesFilter<"User"> | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYWithAggregatesFilter<"User"> | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSWithAggregatesFilter<"User"> | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONWithAggregatesFilter<"User"> | $Enums.LEGAL_ACTION
    problemShort?: StringWithAggregatesFilter<"User"> | string
    problemFull?: StringWithAggregatesFilter<"User"> | string
    nearestTask?: StringWithAggregatesFilter<"User"> | string
    nearestTaskDeadline?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    timeOfPerformance?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    priceSOM?: BigIntNullableWithAggregatesFilter<"User"> | bigint | number | null
    priceUSD?: BigIntNullableWithAggregatesFilter<"User"> | bigint | number | null
    courtInfo?: StringWithAggregatesFilter<"User"> | string
    statusInCourt?: EnumSTATUS_IN_COURTWithAggregatesFilter<"User"> | $Enums.STATUS_IN_COURT
    refusalReason?: EnumREFUSAL_REASONNullableWithAggregatesFilter<"User"> | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    assignmentTime?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    authorId?: IntWithAggregatesFilter<"User"> | number
    sourceId?: IntWithAggregatesFilter<"User"> | number
    opponentId?: IntNullableWithAggregatesFilter<"User"> | number | null
    managerId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type SourceWhereInput = {
    AND?: SourceWhereInput | SourceWhereInput[]
    OR?: SourceWhereInput[]
    NOT?: SourceWhereInput | SourceWhereInput[]
    id?: IntFilter<"Source"> | number
    title?: StringFilter<"Source"> | string
    sourceLink?: StringNullableFilter<"Source"> | string | null
    category?: EnumSOURCE_CATEGORYFilter<"Source"> | $Enums.SOURCE_CATEGORY
    createdAt?: DateTimeFilter<"Source"> | Date | string
    authorId?: IntFilter<"Source"> | number
    author?: XOR<ManagerScalarRelationFilter, ManagerWhereInput>
    users?: UserListRelationFilter
  }

  export type SourceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    sourceLink?: SortOrderInput | SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    author?: ManagerOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
  }

  export type SourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    sourceLink?: string
    AND?: SourceWhereInput | SourceWhereInput[]
    OR?: SourceWhereInput[]
    NOT?: SourceWhereInput | SourceWhereInput[]
    category?: EnumSOURCE_CATEGORYFilter<"Source"> | $Enums.SOURCE_CATEGORY
    createdAt?: DateTimeFilter<"Source"> | Date | string
    authorId?: IntFilter<"Source"> | number
    author?: XOR<ManagerScalarRelationFilter, ManagerWhereInput>
    users?: UserListRelationFilter
  }, "id" | "title" | "sourceLink">

  export type SourceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    sourceLink?: SortOrderInput | SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    _count?: SourceCountOrderByAggregateInput
    _avg?: SourceAvgOrderByAggregateInput
    _max?: SourceMaxOrderByAggregateInput
    _min?: SourceMinOrderByAggregateInput
    _sum?: SourceSumOrderByAggregateInput
  }

  export type SourceScalarWhereWithAggregatesInput = {
    AND?: SourceScalarWhereWithAggregatesInput | SourceScalarWhereWithAggregatesInput[]
    OR?: SourceScalarWhereWithAggregatesInput[]
    NOT?: SourceScalarWhereWithAggregatesInput | SourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Source"> | number
    title?: StringWithAggregatesFilter<"Source"> | string
    sourceLink?: StringNullableWithAggregatesFilter<"Source"> | string | null
    category?: EnumSOURCE_CATEGORYWithAggregatesFilter<"Source"> | $Enums.SOURCE_CATEGORY
    createdAt?: DateTimeWithAggregatesFilter<"Source"> | Date | string
    authorId?: IntWithAggregatesFilter<"Source"> | number
  }

  export type OpponentWhereInput = {
    AND?: OpponentWhereInput | OpponentWhereInput[]
    OR?: OpponentWhereInput[]
    NOT?: OpponentWhereInput | OpponentWhereInput[]
    id?: IntFilter<"Opponent"> | number
    name?: StringFilter<"Opponent"> | string
    link?: StringNullableFilter<"Opponent"> | string | null
    info?: StringFilter<"Opponent"> | string
    createdAt?: DateTimeFilter<"Opponent"> | Date | string
    users?: UserListRelationFilter
  }

  export type OpponentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrderInput | SortOrder
    info?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type OpponentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    link?: string
    AND?: OpponentWhereInput | OpponentWhereInput[]
    OR?: OpponentWhereInput[]
    NOT?: OpponentWhereInput | OpponentWhereInput[]
    info?: StringFilter<"Opponent"> | string
    createdAt?: DateTimeFilter<"Opponent"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "name" | "link">

  export type OpponentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrderInput | SortOrder
    info?: SortOrder
    createdAt?: SortOrder
    _count?: OpponentCountOrderByAggregateInput
    _avg?: OpponentAvgOrderByAggregateInput
    _max?: OpponentMaxOrderByAggregateInput
    _min?: OpponentMinOrderByAggregateInput
    _sum?: OpponentSumOrderByAggregateInput
  }

  export type OpponentScalarWhereWithAggregatesInput = {
    AND?: OpponentScalarWhereWithAggregatesInput | OpponentScalarWhereWithAggregatesInput[]
    OR?: OpponentScalarWhereWithAggregatesInput[]
    NOT?: OpponentScalarWhereWithAggregatesInput | OpponentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Opponent"> | number
    name?: StringWithAggregatesFilter<"Opponent"> | string
    link?: StringNullableWithAggregatesFilter<"Opponent"> | string | null
    info?: StringWithAggregatesFilter<"Opponent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Opponent"> | Date | string
  }

  export type BloggerWhereInput = {
    AND?: BloggerWhereInput | BloggerWhereInput[]
    OR?: BloggerWhereInput[]
    NOT?: BloggerWhereInput | BloggerWhereInput[]
    id?: IntFilter<"Blogger"> | number
    name?: StringFilter<"Blogger"> | string
    link?: StringFilter<"Blogger"> | string
    subscribersCount?: IntFilter<"Blogger"> | number
    info?: StringFilter<"Blogger"> | string
    priceSOM?: IntNullableFilter<"Blogger"> | number | null
    priceUSD?: IntNullableFilter<"Blogger"> | number | null
    phoneNumber?: StringNullableFilter<"Blogger"> | string | null
    email?: StringNullableFilter<"Blogger"> | string | null
    categories?: EnumSOURCE_CATEGORYNullableListFilter<"Blogger">
    createdAt?: DateTimeFilter<"Blogger"> | Date | string
    authorId?: IntFilter<"Blogger"> | number
    author?: XOR<ManagerScalarRelationFilter, ManagerWhereInput>
  }

  export type BloggerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    subscribersCount?: SortOrder
    info?: SortOrder
    priceSOM?: SortOrderInput | SortOrder
    priceUSD?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    categories?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    author?: ManagerOrderByWithRelationInput
  }

  export type BloggerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    link?: string
    phoneNumber?: string
    email?: string
    AND?: BloggerWhereInput | BloggerWhereInput[]
    OR?: BloggerWhereInput[]
    NOT?: BloggerWhereInput | BloggerWhereInput[]
    subscribersCount?: IntFilter<"Blogger"> | number
    info?: StringFilter<"Blogger"> | string
    priceSOM?: IntNullableFilter<"Blogger"> | number | null
    priceUSD?: IntNullableFilter<"Blogger"> | number | null
    categories?: EnumSOURCE_CATEGORYNullableListFilter<"Blogger">
    createdAt?: DateTimeFilter<"Blogger"> | Date | string
    authorId?: IntFilter<"Blogger"> | number
    author?: XOR<ManagerScalarRelationFilter, ManagerWhereInput>
  }, "id" | "name" | "link" | "phoneNumber" | "email">

  export type BloggerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    subscribersCount?: SortOrder
    info?: SortOrder
    priceSOM?: SortOrderInput | SortOrder
    priceUSD?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    categories?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    _count?: BloggerCountOrderByAggregateInput
    _avg?: BloggerAvgOrderByAggregateInput
    _max?: BloggerMaxOrderByAggregateInput
    _min?: BloggerMinOrderByAggregateInput
    _sum?: BloggerSumOrderByAggregateInput
  }

  export type BloggerScalarWhereWithAggregatesInput = {
    AND?: BloggerScalarWhereWithAggregatesInput | BloggerScalarWhereWithAggregatesInput[]
    OR?: BloggerScalarWhereWithAggregatesInput[]
    NOT?: BloggerScalarWhereWithAggregatesInput | BloggerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Blogger"> | number
    name?: StringWithAggregatesFilter<"Blogger"> | string
    link?: StringWithAggregatesFilter<"Blogger"> | string
    subscribersCount?: IntWithAggregatesFilter<"Blogger"> | number
    info?: StringWithAggregatesFilter<"Blogger"> | string
    priceSOM?: IntNullableWithAggregatesFilter<"Blogger"> | number | null
    priceUSD?: IntNullableWithAggregatesFilter<"Blogger"> | number | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Blogger"> | string | null
    email?: StringNullableWithAggregatesFilter<"Blogger"> | string | null
    categories?: EnumSOURCE_CATEGORYNullableListFilter<"Blogger">
    createdAt?: DateTimeWithAggregatesFilter<"Blogger"> | Date | string
    authorId?: IntWithAggregatesFilter<"Blogger"> | number
  }

  export type ManagerCreateInput = {
    username: string
    password: string
    role: $Enums.ROLES
    createdAt?: Date | string
    authoredUsers?: UserCreateNestedManyWithoutAuthorInput
    managedUsers?: UserCreateNestedManyWithoutManagerInput
    sources?: SourceCreateNestedManyWithoutAuthorInput
    bloggers?: BloggerCreateNestedManyWithoutAuthorInput
  }

  export type ManagerUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role: $Enums.ROLES
    createdAt?: Date | string
    authoredUsers?: UserUncheckedCreateNestedManyWithoutAuthorInput
    managedUsers?: UserUncheckedCreateNestedManyWithoutManagerInput
    sources?: SourceUncheckedCreateNestedManyWithoutAuthorInput
    bloggers?: BloggerUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type ManagerUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authoredUsers?: UserUpdateManyWithoutAuthorNestedInput
    managedUsers?: UserUpdateManyWithoutManagerNestedInput
    sources?: SourceUpdateManyWithoutAuthorNestedInput
    bloggers?: BloggerUpdateManyWithoutAuthorNestedInput
  }

  export type ManagerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authoredUsers?: UserUncheckedUpdateManyWithoutAuthorNestedInput
    managedUsers?: UserUncheckedUpdateManyWithoutManagerNestedInput
    sources?: SourceUncheckedUpdateManyWithoutAuthorNestedInput
    bloggers?: BloggerUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ManagerCreateManyInput = {
    id?: number
    username: string
    password: string
    role: $Enums.ROLES
    createdAt?: Date | string
  }

  export type ManagerUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    username: string
    userLink?: string | null
    phoneNumber?: string | null
    email?: string | null
    homeAddress: string
    leadStatus?: $Enums.LEAD_STATUS
    taskImportance?: $Enums.TASK_IMPORTANCE
    taskUrgency?: $Enums.TASK_URGENCY
    taskStatus?: $Enums.TASK_STATUS
    legalAction: $Enums.LEGAL_ACTION
    problemShort: string
    problemFull: string
    nearestTask?: string
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    courtInfo?: string
    statusInCourt: $Enums.STATUS_IN_COURT
    refusalReason?: $Enums.REFUSAL_REASON | null
    createdAt?: Date | string
    assignmentTime?: Date | string | null
    author: ManagerCreateNestedOneWithoutAuthoredUsersInput
    source: SourceCreateNestedOneWithoutUsersInput
    opponent?: OpponentCreateNestedOneWithoutUsersInput
    manager?: ManagerCreateNestedOneWithoutManagedUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    userLink?: string | null
    phoneNumber?: string | null
    email?: string | null
    homeAddress: string
    leadStatus?: $Enums.LEAD_STATUS
    taskImportance?: $Enums.TASK_IMPORTANCE
    taskUrgency?: $Enums.TASK_URGENCY
    taskStatus?: $Enums.TASK_STATUS
    legalAction: $Enums.LEGAL_ACTION
    problemShort: string
    problemFull: string
    nearestTask?: string
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    courtInfo?: string
    statusInCourt: $Enums.STATUS_IN_COURT
    refusalReason?: $Enums.REFUSAL_REASON | null
    createdAt?: Date | string
    assignmentTime?: Date | string | null
    authorId: number
    sourceId: number
    opponentId?: number | null
    managerId?: number | null
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: StringFieldUpdateOperationsInput | string
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFieldUpdateOperationsInput | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFieldUpdateOperationsInput | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFieldUpdateOperationsInput | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION
    problemShort?: StringFieldUpdateOperationsInput | string
    problemFull?: StringFieldUpdateOperationsInput | string
    nearestTask?: StringFieldUpdateOperationsInput | string
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    courtInfo?: StringFieldUpdateOperationsInput | string
    statusInCourt?: EnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: ManagerUpdateOneRequiredWithoutAuthoredUsersNestedInput
    source?: SourceUpdateOneRequiredWithoutUsersNestedInput
    opponent?: OpponentUpdateOneWithoutUsersNestedInput
    manager?: ManagerUpdateOneWithoutManagedUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: StringFieldUpdateOperationsInput | string
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFieldUpdateOperationsInput | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFieldUpdateOperationsInput | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFieldUpdateOperationsInput | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION
    problemShort?: StringFieldUpdateOperationsInput | string
    problemFull?: StringFieldUpdateOperationsInput | string
    nearestTask?: StringFieldUpdateOperationsInput | string
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    courtInfo?: StringFieldUpdateOperationsInput | string
    statusInCourt?: EnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    userLink?: string | null
    phoneNumber?: string | null
    email?: string | null
    homeAddress: string
    leadStatus?: $Enums.LEAD_STATUS
    taskImportance?: $Enums.TASK_IMPORTANCE
    taskUrgency?: $Enums.TASK_URGENCY
    taskStatus?: $Enums.TASK_STATUS
    legalAction: $Enums.LEGAL_ACTION
    problemShort: string
    problemFull: string
    nearestTask?: string
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    courtInfo?: string
    statusInCourt: $Enums.STATUS_IN_COURT
    refusalReason?: $Enums.REFUSAL_REASON | null
    createdAt?: Date | string
    assignmentTime?: Date | string | null
    authorId: number
    sourceId: number
    opponentId?: number | null
    managerId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: StringFieldUpdateOperationsInput | string
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFieldUpdateOperationsInput | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFieldUpdateOperationsInput | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFieldUpdateOperationsInput | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION
    problemShort?: StringFieldUpdateOperationsInput | string
    problemFull?: StringFieldUpdateOperationsInput | string
    nearestTask?: StringFieldUpdateOperationsInput | string
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    courtInfo?: StringFieldUpdateOperationsInput | string
    statusInCourt?: EnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: StringFieldUpdateOperationsInput | string
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFieldUpdateOperationsInput | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFieldUpdateOperationsInput | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFieldUpdateOperationsInput | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION
    problemShort?: StringFieldUpdateOperationsInput | string
    problemFull?: StringFieldUpdateOperationsInput | string
    nearestTask?: StringFieldUpdateOperationsInput | string
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    courtInfo?: StringFieldUpdateOperationsInput | string
    statusInCourt?: EnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SourceCreateInput = {
    title: string
    sourceLink?: string | null
    category: $Enums.SOURCE_CATEGORY
    createdAt?: Date | string
    author: ManagerCreateNestedOneWithoutSourcesInput
    users?: UserCreateNestedManyWithoutSourceInput
  }

  export type SourceUncheckedCreateInput = {
    id?: number
    title: string
    sourceLink?: string | null
    category: $Enums.SOURCE_CATEGORY
    createdAt?: Date | string
    authorId: number
    users?: UserUncheckedCreateNestedManyWithoutSourceInput
  }

  export type SourceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    sourceLink?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumSOURCE_CATEGORYFieldUpdateOperationsInput | $Enums.SOURCE_CATEGORY
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: ManagerUpdateOneRequiredWithoutSourcesNestedInput
    users?: UserUpdateManyWithoutSourceNestedInput
  }

  export type SourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    sourceLink?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumSOURCE_CATEGORYFieldUpdateOperationsInput | $Enums.SOURCE_CATEGORY
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutSourceNestedInput
  }

  export type SourceCreateManyInput = {
    id?: number
    title: string
    sourceLink?: string | null
    category: $Enums.SOURCE_CATEGORY
    createdAt?: Date | string
    authorId: number
  }

  export type SourceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    sourceLink?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumSOURCE_CATEGORYFieldUpdateOperationsInput | $Enums.SOURCE_CATEGORY
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    sourceLink?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumSOURCE_CATEGORYFieldUpdateOperationsInput | $Enums.SOURCE_CATEGORY
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type OpponentCreateInput = {
    name: string
    link?: string | null
    info?: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutOpponentInput
  }

  export type OpponentUncheckedCreateInput = {
    id?: number
    name: string
    link?: string | null
    info?: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOpponentInput
  }

  export type OpponentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    info?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOpponentNestedInput
  }

  export type OpponentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    info?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOpponentNestedInput
  }

  export type OpponentCreateManyInput = {
    id?: number
    name: string
    link?: string | null
    info?: string
    createdAt?: Date | string
  }

  export type OpponentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    info?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpponentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    info?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloggerCreateInput = {
    name: string
    link: string
    subscribersCount: number
    info?: string
    priceSOM?: number | null
    priceUSD?: number | null
    phoneNumber?: string | null
    email?: string | null
    categories?: BloggerCreatecategoriesInput | $Enums.SOURCE_CATEGORY[]
    createdAt?: Date | string
    author: ManagerCreateNestedOneWithoutBloggersInput
  }

  export type BloggerUncheckedCreateInput = {
    id?: number
    name: string
    link: string
    subscribersCount: number
    info?: string
    priceSOM?: number | null
    priceUSD?: number | null
    phoneNumber?: string | null
    email?: string | null
    categories?: BloggerCreatecategoriesInput | $Enums.SOURCE_CATEGORY[]
    createdAt?: Date | string
    authorId: number
  }

  export type BloggerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    subscribersCount?: IntFieldUpdateOperationsInput | number
    info?: StringFieldUpdateOperationsInput | string
    priceSOM?: NullableIntFieldUpdateOperationsInput | number | null
    priceUSD?: NullableIntFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: BloggerUpdatecategoriesInput | $Enums.SOURCE_CATEGORY[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: ManagerUpdateOneRequiredWithoutBloggersNestedInput
  }

  export type BloggerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    subscribersCount?: IntFieldUpdateOperationsInput | number
    info?: StringFieldUpdateOperationsInput | string
    priceSOM?: NullableIntFieldUpdateOperationsInput | number | null
    priceUSD?: NullableIntFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: BloggerUpdatecategoriesInput | $Enums.SOURCE_CATEGORY[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type BloggerCreateManyInput = {
    id?: number
    name: string
    link: string
    subscribersCount: number
    info?: string
    priceSOM?: number | null
    priceUSD?: number | null
    phoneNumber?: string | null
    email?: string | null
    categories?: BloggerCreatecategoriesInput | $Enums.SOURCE_CATEGORY[]
    createdAt?: Date | string
    authorId: number
  }

  export type BloggerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    subscribersCount?: IntFieldUpdateOperationsInput | number
    info?: StringFieldUpdateOperationsInput | string
    priceSOM?: NullableIntFieldUpdateOperationsInput | number | null
    priceUSD?: NullableIntFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: BloggerUpdatecategoriesInput | $Enums.SOURCE_CATEGORY[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloggerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    subscribersCount?: IntFieldUpdateOperationsInput | number
    info?: StringFieldUpdateOperationsInput | string
    priceSOM?: NullableIntFieldUpdateOperationsInput | number | null
    priceUSD?: NullableIntFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: BloggerUpdatecategoriesInput | $Enums.SOURCE_CATEGORY[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
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

  export type EnumROLESFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLES | EnumROLESFieldRefInput<$PrismaModel>
    in?: $Enums.ROLES[] | ListEnumROLESFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLES[] | ListEnumROLESFieldRefInput<$PrismaModel>
    not?: NestedEnumROLESFilter<$PrismaModel> | $Enums.ROLES
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SourceListRelationFilter = {
    every?: SourceWhereInput
    some?: SourceWhereInput
    none?: SourceWhereInput
  }

  export type BloggerListRelationFilter = {
    every?: BloggerWhereInput
    some?: BloggerWhereInput
    none?: BloggerWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BloggerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManagerCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type ManagerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ManagerMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type ManagerMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type ManagerSumOrderByAggregateInput = {
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

  export type EnumROLESWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLES | EnumROLESFieldRefInput<$PrismaModel>
    in?: $Enums.ROLES[] | ListEnumROLESFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLES[] | ListEnumROLESFieldRefInput<$PrismaModel>
    not?: NestedEnumROLESWithAggregatesFilter<$PrismaModel> | $Enums.ROLES
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLESFilter<$PrismaModel>
    _max?: NestedEnumROLESFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type EnumLEAD_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.LEAD_STATUS | EnumLEAD_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.LEAD_STATUS[] | ListEnumLEAD_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEAD_STATUS[] | ListEnumLEAD_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumLEAD_STATUSFilter<$PrismaModel> | $Enums.LEAD_STATUS
  }

  export type EnumTASK_IMPORTANCEFilter<$PrismaModel = never> = {
    equals?: $Enums.TASK_IMPORTANCE | EnumTASK_IMPORTANCEFieldRefInput<$PrismaModel>
    in?: $Enums.TASK_IMPORTANCE[] | ListEnumTASK_IMPORTANCEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TASK_IMPORTANCE[] | ListEnumTASK_IMPORTANCEFieldRefInput<$PrismaModel>
    not?: NestedEnumTASK_IMPORTANCEFilter<$PrismaModel> | $Enums.TASK_IMPORTANCE
  }

  export type EnumTASK_URGENCYFilter<$PrismaModel = never> = {
    equals?: $Enums.TASK_URGENCY | EnumTASK_URGENCYFieldRefInput<$PrismaModel>
    in?: $Enums.TASK_URGENCY[] | ListEnumTASK_URGENCYFieldRefInput<$PrismaModel>
    notIn?: $Enums.TASK_URGENCY[] | ListEnumTASK_URGENCYFieldRefInput<$PrismaModel>
    not?: NestedEnumTASK_URGENCYFilter<$PrismaModel> | $Enums.TASK_URGENCY
  }

  export type EnumTASK_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.TASK_STATUS | EnumTASK_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.TASK_STATUS[] | ListEnumTASK_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.TASK_STATUS[] | ListEnumTASK_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumTASK_STATUSFilter<$PrismaModel> | $Enums.TASK_STATUS
  }

  export type EnumLEGAL_ACTIONFilter<$PrismaModel = never> = {
    equals?: $Enums.LEGAL_ACTION | EnumLEGAL_ACTIONFieldRefInput<$PrismaModel>
    in?: $Enums.LEGAL_ACTION[] | ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEGAL_ACTION[] | ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel>
    not?: NestedEnumLEGAL_ACTIONFilter<$PrismaModel> | $Enums.LEGAL_ACTION
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type EnumSTATUS_IN_COURTFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS_IN_COURT | EnumSTATUS_IN_COURTFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS_IN_COURT[] | ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS_IN_COURT[] | ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUS_IN_COURTFilter<$PrismaModel> | $Enums.STATUS_IN_COURT
  }

  export type EnumREFUSAL_REASONNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.REFUSAL_REASON | EnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    in?: $Enums.REFUSAL_REASON[] | ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.REFUSAL_REASON[] | ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    not?: NestedEnumREFUSAL_REASONNullableFilter<$PrismaModel> | $Enums.REFUSAL_REASON | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ManagerScalarRelationFilter = {
    is?: ManagerWhereInput
    isNot?: ManagerWhereInput
  }

  export type SourceScalarRelationFilter = {
    is?: SourceWhereInput
    isNot?: SourceWhereInput
  }

  export type OpponentNullableScalarRelationFilter = {
    is?: OpponentWhereInput | null
    isNot?: OpponentWhereInput | null
  }

  export type ManagerNullableScalarRelationFilter = {
    is?: ManagerWhereInput | null
    isNot?: ManagerWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    userLink?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    homeAddress?: SortOrder
    leadStatus?: SortOrder
    taskImportance?: SortOrder
    taskUrgency?: SortOrder
    taskStatus?: SortOrder
    legalAction?: SortOrder
    problemShort?: SortOrder
    problemFull?: SortOrder
    nearestTask?: SortOrder
    nearestTaskDeadline?: SortOrder
    timeOfPerformance?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    courtInfo?: SortOrder
    statusInCourt?: SortOrder
    refusalReason?: SortOrder
    createdAt?: SortOrder
    assignmentTime?: SortOrder
    authorId?: SortOrder
    sourceId?: SortOrder
    opponentId?: SortOrder
    managerId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    authorId?: SortOrder
    sourceId?: SortOrder
    opponentId?: SortOrder
    managerId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    userLink?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    homeAddress?: SortOrder
    leadStatus?: SortOrder
    taskImportance?: SortOrder
    taskUrgency?: SortOrder
    taskStatus?: SortOrder
    legalAction?: SortOrder
    problemShort?: SortOrder
    problemFull?: SortOrder
    nearestTask?: SortOrder
    nearestTaskDeadline?: SortOrder
    timeOfPerformance?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    courtInfo?: SortOrder
    statusInCourt?: SortOrder
    refusalReason?: SortOrder
    createdAt?: SortOrder
    assignmentTime?: SortOrder
    authorId?: SortOrder
    sourceId?: SortOrder
    opponentId?: SortOrder
    managerId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    userLink?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    homeAddress?: SortOrder
    leadStatus?: SortOrder
    taskImportance?: SortOrder
    taskUrgency?: SortOrder
    taskStatus?: SortOrder
    legalAction?: SortOrder
    problemShort?: SortOrder
    problemFull?: SortOrder
    nearestTask?: SortOrder
    nearestTaskDeadline?: SortOrder
    timeOfPerformance?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    courtInfo?: SortOrder
    statusInCourt?: SortOrder
    refusalReason?: SortOrder
    createdAt?: SortOrder
    assignmentTime?: SortOrder
    authorId?: SortOrder
    sourceId?: SortOrder
    opponentId?: SortOrder
    managerId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    authorId?: SortOrder
    sourceId?: SortOrder
    opponentId?: SortOrder
    managerId?: SortOrder
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

  export type EnumLEAD_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LEAD_STATUS | EnumLEAD_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.LEAD_STATUS[] | ListEnumLEAD_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEAD_STATUS[] | ListEnumLEAD_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumLEAD_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.LEAD_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLEAD_STATUSFilter<$PrismaModel>
    _max?: NestedEnumLEAD_STATUSFilter<$PrismaModel>
  }

  export type EnumTASK_IMPORTANCEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TASK_IMPORTANCE | EnumTASK_IMPORTANCEFieldRefInput<$PrismaModel>
    in?: $Enums.TASK_IMPORTANCE[] | ListEnumTASK_IMPORTANCEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TASK_IMPORTANCE[] | ListEnumTASK_IMPORTANCEFieldRefInput<$PrismaModel>
    not?: NestedEnumTASK_IMPORTANCEWithAggregatesFilter<$PrismaModel> | $Enums.TASK_IMPORTANCE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTASK_IMPORTANCEFilter<$PrismaModel>
    _max?: NestedEnumTASK_IMPORTANCEFilter<$PrismaModel>
  }

  export type EnumTASK_URGENCYWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TASK_URGENCY | EnumTASK_URGENCYFieldRefInput<$PrismaModel>
    in?: $Enums.TASK_URGENCY[] | ListEnumTASK_URGENCYFieldRefInput<$PrismaModel>
    notIn?: $Enums.TASK_URGENCY[] | ListEnumTASK_URGENCYFieldRefInput<$PrismaModel>
    not?: NestedEnumTASK_URGENCYWithAggregatesFilter<$PrismaModel> | $Enums.TASK_URGENCY
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTASK_URGENCYFilter<$PrismaModel>
    _max?: NestedEnumTASK_URGENCYFilter<$PrismaModel>
  }

  export type EnumTASK_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TASK_STATUS | EnumTASK_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.TASK_STATUS[] | ListEnumTASK_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.TASK_STATUS[] | ListEnumTASK_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumTASK_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.TASK_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTASK_STATUSFilter<$PrismaModel>
    _max?: NestedEnumTASK_STATUSFilter<$PrismaModel>
  }

  export type EnumLEGAL_ACTIONWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LEGAL_ACTION | EnumLEGAL_ACTIONFieldRefInput<$PrismaModel>
    in?: $Enums.LEGAL_ACTION[] | ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEGAL_ACTION[] | ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel>
    not?: NestedEnumLEGAL_ACTIONWithAggregatesFilter<$PrismaModel> | $Enums.LEGAL_ACTION
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLEGAL_ACTIONFilter<$PrismaModel>
    _max?: NestedEnumLEGAL_ACTIONFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type EnumSTATUS_IN_COURTWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS_IN_COURT | EnumSTATUS_IN_COURTFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS_IN_COURT[] | ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS_IN_COURT[] | ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUS_IN_COURTWithAggregatesFilter<$PrismaModel> | $Enums.STATUS_IN_COURT
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTATUS_IN_COURTFilter<$PrismaModel>
    _max?: NestedEnumSTATUS_IN_COURTFilter<$PrismaModel>
  }

  export type EnumREFUSAL_REASONNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.REFUSAL_REASON | EnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    in?: $Enums.REFUSAL_REASON[] | ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.REFUSAL_REASON[] | ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    not?: NestedEnumREFUSAL_REASONNullableWithAggregatesFilter<$PrismaModel> | $Enums.REFUSAL_REASON | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumREFUSAL_REASONNullableFilter<$PrismaModel>
    _max?: NestedEnumREFUSAL_REASONNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSOURCE_CATEGORYFilter<$PrismaModel = never> = {
    equals?: $Enums.SOURCE_CATEGORY | EnumSOURCE_CATEGORYFieldRefInput<$PrismaModel>
    in?: $Enums.SOURCE_CATEGORY[] | ListEnumSOURCE_CATEGORYFieldRefInput<$PrismaModel>
    notIn?: $Enums.SOURCE_CATEGORY[] | ListEnumSOURCE_CATEGORYFieldRefInput<$PrismaModel>
    not?: NestedEnumSOURCE_CATEGORYFilter<$PrismaModel> | $Enums.SOURCE_CATEGORY
  }

  export type SourceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sourceLink?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type SourceAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type SourceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sourceLink?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type SourceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sourceLink?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type SourceSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type EnumSOURCE_CATEGORYWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SOURCE_CATEGORY | EnumSOURCE_CATEGORYFieldRefInput<$PrismaModel>
    in?: $Enums.SOURCE_CATEGORY[] | ListEnumSOURCE_CATEGORYFieldRefInput<$PrismaModel>
    notIn?: $Enums.SOURCE_CATEGORY[] | ListEnumSOURCE_CATEGORYFieldRefInput<$PrismaModel>
    not?: NestedEnumSOURCE_CATEGORYWithAggregatesFilter<$PrismaModel> | $Enums.SOURCE_CATEGORY
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSOURCE_CATEGORYFilter<$PrismaModel>
    _max?: NestedEnumSOURCE_CATEGORYFilter<$PrismaModel>
  }

  export type OpponentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    info?: SortOrder
    createdAt?: SortOrder
  }

  export type OpponentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OpponentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    info?: SortOrder
    createdAt?: SortOrder
  }

  export type OpponentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    info?: SortOrder
    createdAt?: SortOrder
  }

  export type OpponentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSOURCE_CATEGORYNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.SOURCE_CATEGORY[] | ListEnumSOURCE_CATEGORYFieldRefInput<$PrismaModel> | null
    has?: $Enums.SOURCE_CATEGORY | EnumSOURCE_CATEGORYFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.SOURCE_CATEGORY[] | ListEnumSOURCE_CATEGORYFieldRefInput<$PrismaModel>
    hasSome?: $Enums.SOURCE_CATEGORY[] | ListEnumSOURCE_CATEGORYFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BloggerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    subscribersCount?: SortOrder
    info?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    categories?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type BloggerAvgOrderByAggregateInput = {
    id?: SortOrder
    subscribersCount?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    authorId?: SortOrder
  }

  export type BloggerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    subscribersCount?: SortOrder
    info?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type BloggerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    subscribersCount?: SortOrder
    info?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type BloggerSumOrderByAggregateInput = {
    id?: SortOrder
    subscribersCount?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    authorId?: SortOrder
  }

  export type UserCreateNestedManyWithoutAuthorInput = {
    create?: XOR<UserCreateWithoutAuthorInput, UserUncheckedCreateWithoutAuthorInput> | UserCreateWithoutAuthorInput[] | UserUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAuthorInput | UserCreateOrConnectWithoutAuthorInput[]
    createMany?: UserCreateManyAuthorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SourceCreateNestedManyWithoutAuthorInput = {
    create?: XOR<SourceCreateWithoutAuthorInput, SourceUncheckedCreateWithoutAuthorInput> | SourceCreateWithoutAuthorInput[] | SourceUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SourceCreateOrConnectWithoutAuthorInput | SourceCreateOrConnectWithoutAuthorInput[]
    createMany?: SourceCreateManyAuthorInputEnvelope
    connect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
  }

  export type BloggerCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BloggerCreateWithoutAuthorInput, BloggerUncheckedCreateWithoutAuthorInput> | BloggerCreateWithoutAuthorInput[] | BloggerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BloggerCreateOrConnectWithoutAuthorInput | BloggerCreateOrConnectWithoutAuthorInput[]
    createMany?: BloggerCreateManyAuthorInputEnvelope
    connect?: BloggerWhereUniqueInput | BloggerWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<UserCreateWithoutAuthorInput, UserUncheckedCreateWithoutAuthorInput> | UserCreateWithoutAuthorInput[] | UserUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAuthorInput | UserCreateOrConnectWithoutAuthorInput[]
    createMany?: UserCreateManyAuthorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SourceUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<SourceCreateWithoutAuthorInput, SourceUncheckedCreateWithoutAuthorInput> | SourceCreateWithoutAuthorInput[] | SourceUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SourceCreateOrConnectWithoutAuthorInput | SourceCreateOrConnectWithoutAuthorInput[]
    createMany?: SourceCreateManyAuthorInputEnvelope
    connect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
  }

  export type BloggerUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BloggerCreateWithoutAuthorInput, BloggerUncheckedCreateWithoutAuthorInput> | BloggerCreateWithoutAuthorInput[] | BloggerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BloggerCreateOrConnectWithoutAuthorInput | BloggerCreateOrConnectWithoutAuthorInput[]
    createMany?: BloggerCreateManyAuthorInputEnvelope
    connect?: BloggerWhereUniqueInput | BloggerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumROLESFieldUpdateOperationsInput = {
    set?: $Enums.ROLES
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<UserCreateWithoutAuthorInput, UserUncheckedCreateWithoutAuthorInput> | UserCreateWithoutAuthorInput[] | UserUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAuthorInput | UserCreateOrConnectWithoutAuthorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAuthorInput | UserUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: UserCreateManyAuthorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAuthorInput | UserUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAuthorInput | UserUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SourceUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<SourceCreateWithoutAuthorInput, SourceUncheckedCreateWithoutAuthorInput> | SourceCreateWithoutAuthorInput[] | SourceUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SourceCreateOrConnectWithoutAuthorInput | SourceCreateOrConnectWithoutAuthorInput[]
    upsert?: SourceUpsertWithWhereUniqueWithoutAuthorInput | SourceUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: SourceCreateManyAuthorInputEnvelope
    set?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    disconnect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    delete?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    connect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    update?: SourceUpdateWithWhereUniqueWithoutAuthorInput | SourceUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: SourceUpdateManyWithWhereWithoutAuthorInput | SourceUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: SourceScalarWhereInput | SourceScalarWhereInput[]
  }

  export type BloggerUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BloggerCreateWithoutAuthorInput, BloggerUncheckedCreateWithoutAuthorInput> | BloggerCreateWithoutAuthorInput[] | BloggerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BloggerCreateOrConnectWithoutAuthorInput | BloggerCreateOrConnectWithoutAuthorInput[]
    upsert?: BloggerUpsertWithWhereUniqueWithoutAuthorInput | BloggerUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BloggerCreateManyAuthorInputEnvelope
    set?: BloggerWhereUniqueInput | BloggerWhereUniqueInput[]
    disconnect?: BloggerWhereUniqueInput | BloggerWhereUniqueInput[]
    delete?: BloggerWhereUniqueInput | BloggerWhereUniqueInput[]
    connect?: BloggerWhereUniqueInput | BloggerWhereUniqueInput[]
    update?: BloggerUpdateWithWhereUniqueWithoutAuthorInput | BloggerUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BloggerUpdateManyWithWhereWithoutAuthorInput | BloggerUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BloggerScalarWhereInput | BloggerScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<UserCreateWithoutAuthorInput, UserUncheckedCreateWithoutAuthorInput> | UserCreateWithoutAuthorInput[] | UserUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAuthorInput | UserCreateOrConnectWithoutAuthorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAuthorInput | UserUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: UserCreateManyAuthorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAuthorInput | UserUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAuthorInput | UserUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SourceUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<SourceCreateWithoutAuthorInput, SourceUncheckedCreateWithoutAuthorInput> | SourceCreateWithoutAuthorInput[] | SourceUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SourceCreateOrConnectWithoutAuthorInput | SourceCreateOrConnectWithoutAuthorInput[]
    upsert?: SourceUpsertWithWhereUniqueWithoutAuthorInput | SourceUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: SourceCreateManyAuthorInputEnvelope
    set?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    disconnect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    delete?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    connect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    update?: SourceUpdateWithWhereUniqueWithoutAuthorInput | SourceUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: SourceUpdateManyWithWhereWithoutAuthorInput | SourceUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: SourceScalarWhereInput | SourceScalarWhereInput[]
  }

  export type BloggerUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BloggerCreateWithoutAuthorInput, BloggerUncheckedCreateWithoutAuthorInput> | BloggerCreateWithoutAuthorInput[] | BloggerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BloggerCreateOrConnectWithoutAuthorInput | BloggerCreateOrConnectWithoutAuthorInput[]
    upsert?: BloggerUpsertWithWhereUniqueWithoutAuthorInput | BloggerUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BloggerCreateManyAuthorInputEnvelope
    set?: BloggerWhereUniqueInput | BloggerWhereUniqueInput[]
    disconnect?: BloggerWhereUniqueInput | BloggerWhereUniqueInput[]
    delete?: BloggerWhereUniqueInput | BloggerWhereUniqueInput[]
    connect?: BloggerWhereUniqueInput | BloggerWhereUniqueInput[]
    update?: BloggerUpdateWithWhereUniqueWithoutAuthorInput | BloggerUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BloggerUpdateManyWithWhereWithoutAuthorInput | BloggerUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BloggerScalarWhereInput | BloggerScalarWhereInput[]
  }

  export type ManagerCreateNestedOneWithoutAuthoredUsersInput = {
    create?: XOR<ManagerCreateWithoutAuthoredUsersInput, ManagerUncheckedCreateWithoutAuthoredUsersInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutAuthoredUsersInput
    connect?: ManagerWhereUniqueInput
  }

  export type SourceCreateNestedOneWithoutUsersInput = {
    create?: XOR<SourceCreateWithoutUsersInput, SourceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SourceCreateOrConnectWithoutUsersInput
    connect?: SourceWhereUniqueInput
  }

  export type OpponentCreateNestedOneWithoutUsersInput = {
    create?: XOR<OpponentCreateWithoutUsersInput, OpponentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OpponentCreateOrConnectWithoutUsersInput
    connect?: OpponentWhereUniqueInput
  }

  export type ManagerCreateNestedOneWithoutManagedUsersInput = {
    create?: XOR<ManagerCreateWithoutManagedUsersInput, ManagerUncheckedCreateWithoutManagedUsersInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutManagedUsersInput
    connect?: ManagerWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumLEAD_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.LEAD_STATUS
  }

  export type EnumTASK_IMPORTANCEFieldUpdateOperationsInput = {
    set?: $Enums.TASK_IMPORTANCE
  }

  export type EnumTASK_URGENCYFieldUpdateOperationsInput = {
    set?: $Enums.TASK_URGENCY
  }

  export type EnumTASK_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.TASK_STATUS
  }

  export type EnumLEGAL_ACTIONFieldUpdateOperationsInput = {
    set?: $Enums.LEGAL_ACTION
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumSTATUS_IN_COURTFieldUpdateOperationsInput = {
    set?: $Enums.STATUS_IN_COURT
  }

  export type NullableEnumREFUSAL_REASONFieldUpdateOperationsInput = {
    set?: $Enums.REFUSAL_REASON | null
  }

  export type ManagerUpdateOneRequiredWithoutAuthoredUsersNestedInput = {
    create?: XOR<ManagerCreateWithoutAuthoredUsersInput, ManagerUncheckedCreateWithoutAuthoredUsersInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutAuthoredUsersInput
    upsert?: ManagerUpsertWithoutAuthoredUsersInput
    connect?: ManagerWhereUniqueInput
    update?: XOR<XOR<ManagerUpdateToOneWithWhereWithoutAuthoredUsersInput, ManagerUpdateWithoutAuthoredUsersInput>, ManagerUncheckedUpdateWithoutAuthoredUsersInput>
  }

  export type SourceUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<SourceCreateWithoutUsersInput, SourceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SourceCreateOrConnectWithoutUsersInput
    upsert?: SourceUpsertWithoutUsersInput
    connect?: SourceWhereUniqueInput
    update?: XOR<XOR<SourceUpdateToOneWithWhereWithoutUsersInput, SourceUpdateWithoutUsersInput>, SourceUncheckedUpdateWithoutUsersInput>
  }

  export type OpponentUpdateOneWithoutUsersNestedInput = {
    create?: XOR<OpponentCreateWithoutUsersInput, OpponentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OpponentCreateOrConnectWithoutUsersInput
    upsert?: OpponentUpsertWithoutUsersInput
    disconnect?: OpponentWhereInput | boolean
    delete?: OpponentWhereInput | boolean
    connect?: OpponentWhereUniqueInput
    update?: XOR<XOR<OpponentUpdateToOneWithWhereWithoutUsersInput, OpponentUpdateWithoutUsersInput>, OpponentUncheckedUpdateWithoutUsersInput>
  }

  export type ManagerUpdateOneWithoutManagedUsersNestedInput = {
    create?: XOR<ManagerCreateWithoutManagedUsersInput, ManagerUncheckedCreateWithoutManagedUsersInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutManagedUsersInput
    upsert?: ManagerUpsertWithoutManagedUsersInput
    disconnect?: ManagerWhereInput | boolean
    delete?: ManagerWhereInput | boolean
    connect?: ManagerWhereUniqueInput
    update?: XOR<XOR<ManagerUpdateToOneWithWhereWithoutManagedUsersInput, ManagerUpdateWithoutManagedUsersInput>, ManagerUncheckedUpdateWithoutManagedUsersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ManagerCreateNestedOneWithoutSourcesInput = {
    create?: XOR<ManagerCreateWithoutSourcesInput, ManagerUncheckedCreateWithoutSourcesInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutSourcesInput
    connect?: ManagerWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutSourceInput = {
    create?: XOR<UserCreateWithoutSourceInput, UserUncheckedCreateWithoutSourceInput> | UserCreateWithoutSourceInput[] | UserUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSourceInput | UserCreateOrConnectWithoutSourceInput[]
    createMany?: UserCreateManySourceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSourceInput = {
    create?: XOR<UserCreateWithoutSourceInput, UserUncheckedCreateWithoutSourceInput> | UserCreateWithoutSourceInput[] | UserUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSourceInput | UserCreateOrConnectWithoutSourceInput[]
    createMany?: UserCreateManySourceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumSOURCE_CATEGORYFieldUpdateOperationsInput = {
    set?: $Enums.SOURCE_CATEGORY
  }

  export type ManagerUpdateOneRequiredWithoutSourcesNestedInput = {
    create?: XOR<ManagerCreateWithoutSourcesInput, ManagerUncheckedCreateWithoutSourcesInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutSourcesInput
    upsert?: ManagerUpsertWithoutSourcesInput
    connect?: ManagerWhereUniqueInput
    update?: XOR<XOR<ManagerUpdateToOneWithWhereWithoutSourcesInput, ManagerUpdateWithoutSourcesInput>, ManagerUncheckedUpdateWithoutSourcesInput>
  }

  export type UserUpdateManyWithoutSourceNestedInput = {
    create?: XOR<UserCreateWithoutSourceInput, UserUncheckedCreateWithoutSourceInput> | UserCreateWithoutSourceInput[] | UserUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSourceInput | UserCreateOrConnectWithoutSourceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSourceInput | UserUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: UserCreateManySourceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSourceInput | UserUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSourceInput | UserUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSourceNestedInput = {
    create?: XOR<UserCreateWithoutSourceInput, UserUncheckedCreateWithoutSourceInput> | UserCreateWithoutSourceInput[] | UserUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSourceInput | UserCreateOrConnectWithoutSourceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSourceInput | UserUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: UserCreateManySourceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSourceInput | UserUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSourceInput | UserUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutOpponentInput = {
    create?: XOR<UserCreateWithoutOpponentInput, UserUncheckedCreateWithoutOpponentInput> | UserCreateWithoutOpponentInput[] | UserUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOpponentInput | UserCreateOrConnectWithoutOpponentInput[]
    createMany?: UserCreateManyOpponentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOpponentInput = {
    create?: XOR<UserCreateWithoutOpponentInput, UserUncheckedCreateWithoutOpponentInput> | UserCreateWithoutOpponentInput[] | UserUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOpponentInput | UserCreateOrConnectWithoutOpponentInput[]
    createMany?: UserCreateManyOpponentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutOpponentNestedInput = {
    create?: XOR<UserCreateWithoutOpponentInput, UserUncheckedCreateWithoutOpponentInput> | UserCreateWithoutOpponentInput[] | UserUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOpponentInput | UserCreateOrConnectWithoutOpponentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOpponentInput | UserUpsertWithWhereUniqueWithoutOpponentInput[]
    createMany?: UserCreateManyOpponentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOpponentInput | UserUpdateWithWhereUniqueWithoutOpponentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOpponentInput | UserUpdateManyWithWhereWithoutOpponentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOpponentNestedInput = {
    create?: XOR<UserCreateWithoutOpponentInput, UserUncheckedCreateWithoutOpponentInput> | UserCreateWithoutOpponentInput[] | UserUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOpponentInput | UserCreateOrConnectWithoutOpponentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOpponentInput | UserUpsertWithWhereUniqueWithoutOpponentInput[]
    createMany?: UserCreateManyOpponentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOpponentInput | UserUpdateWithWhereUniqueWithoutOpponentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOpponentInput | UserUpdateManyWithWhereWithoutOpponentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BloggerCreatecategoriesInput = {
    set: $Enums.SOURCE_CATEGORY[]
  }

  export type ManagerCreateNestedOneWithoutBloggersInput = {
    create?: XOR<ManagerCreateWithoutBloggersInput, ManagerUncheckedCreateWithoutBloggersInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutBloggersInput
    connect?: ManagerWhereUniqueInput
  }

  export type BloggerUpdatecategoriesInput = {
    set?: $Enums.SOURCE_CATEGORY[]
    push?: $Enums.SOURCE_CATEGORY | $Enums.SOURCE_CATEGORY[]
  }

  export type ManagerUpdateOneRequiredWithoutBloggersNestedInput = {
    create?: XOR<ManagerCreateWithoutBloggersInput, ManagerUncheckedCreateWithoutBloggersInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutBloggersInput
    upsert?: ManagerUpsertWithoutBloggersInput
    connect?: ManagerWhereUniqueInput
    update?: XOR<XOR<ManagerUpdateToOneWithWhereWithoutBloggersInput, ManagerUpdateWithoutBloggersInput>, ManagerUncheckedUpdateWithoutBloggersInput>
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

  export type NestedEnumROLESFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLES | EnumROLESFieldRefInput<$PrismaModel>
    in?: $Enums.ROLES[] | ListEnumROLESFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLES[] | ListEnumROLESFieldRefInput<$PrismaModel>
    not?: NestedEnumROLESFilter<$PrismaModel> | $Enums.ROLES
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedEnumROLESWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLES | EnumROLESFieldRefInput<$PrismaModel>
    in?: $Enums.ROLES[] | ListEnumROLESFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLES[] | ListEnumROLESFieldRefInput<$PrismaModel>
    not?: NestedEnumROLESWithAggregatesFilter<$PrismaModel> | $Enums.ROLES
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLESFilter<$PrismaModel>
    _max?: NestedEnumROLESFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedEnumLEAD_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.LEAD_STATUS | EnumLEAD_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.LEAD_STATUS[] | ListEnumLEAD_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEAD_STATUS[] | ListEnumLEAD_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumLEAD_STATUSFilter<$PrismaModel> | $Enums.LEAD_STATUS
  }

  export type NestedEnumTASK_IMPORTANCEFilter<$PrismaModel = never> = {
    equals?: $Enums.TASK_IMPORTANCE | EnumTASK_IMPORTANCEFieldRefInput<$PrismaModel>
    in?: $Enums.TASK_IMPORTANCE[] | ListEnumTASK_IMPORTANCEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TASK_IMPORTANCE[] | ListEnumTASK_IMPORTANCEFieldRefInput<$PrismaModel>
    not?: NestedEnumTASK_IMPORTANCEFilter<$PrismaModel> | $Enums.TASK_IMPORTANCE
  }

  export type NestedEnumTASK_URGENCYFilter<$PrismaModel = never> = {
    equals?: $Enums.TASK_URGENCY | EnumTASK_URGENCYFieldRefInput<$PrismaModel>
    in?: $Enums.TASK_URGENCY[] | ListEnumTASK_URGENCYFieldRefInput<$PrismaModel>
    notIn?: $Enums.TASK_URGENCY[] | ListEnumTASK_URGENCYFieldRefInput<$PrismaModel>
    not?: NestedEnumTASK_URGENCYFilter<$PrismaModel> | $Enums.TASK_URGENCY
  }

  export type NestedEnumTASK_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.TASK_STATUS | EnumTASK_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.TASK_STATUS[] | ListEnumTASK_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.TASK_STATUS[] | ListEnumTASK_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumTASK_STATUSFilter<$PrismaModel> | $Enums.TASK_STATUS
  }

  export type NestedEnumLEGAL_ACTIONFilter<$PrismaModel = never> = {
    equals?: $Enums.LEGAL_ACTION | EnumLEGAL_ACTIONFieldRefInput<$PrismaModel>
    in?: $Enums.LEGAL_ACTION[] | ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEGAL_ACTION[] | ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel>
    not?: NestedEnumLEGAL_ACTIONFilter<$PrismaModel> | $Enums.LEGAL_ACTION
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumSTATUS_IN_COURTFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS_IN_COURT | EnumSTATUS_IN_COURTFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS_IN_COURT[] | ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS_IN_COURT[] | ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUS_IN_COURTFilter<$PrismaModel> | $Enums.STATUS_IN_COURT
  }

  export type NestedEnumREFUSAL_REASONNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.REFUSAL_REASON | EnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    in?: $Enums.REFUSAL_REASON[] | ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.REFUSAL_REASON[] | ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    not?: NestedEnumREFUSAL_REASONNullableFilter<$PrismaModel> | $Enums.REFUSAL_REASON | null
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

  export type NestedEnumLEAD_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LEAD_STATUS | EnumLEAD_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.LEAD_STATUS[] | ListEnumLEAD_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEAD_STATUS[] | ListEnumLEAD_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumLEAD_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.LEAD_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLEAD_STATUSFilter<$PrismaModel>
    _max?: NestedEnumLEAD_STATUSFilter<$PrismaModel>
  }

  export type NestedEnumTASK_IMPORTANCEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TASK_IMPORTANCE | EnumTASK_IMPORTANCEFieldRefInput<$PrismaModel>
    in?: $Enums.TASK_IMPORTANCE[] | ListEnumTASK_IMPORTANCEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TASK_IMPORTANCE[] | ListEnumTASK_IMPORTANCEFieldRefInput<$PrismaModel>
    not?: NestedEnumTASK_IMPORTANCEWithAggregatesFilter<$PrismaModel> | $Enums.TASK_IMPORTANCE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTASK_IMPORTANCEFilter<$PrismaModel>
    _max?: NestedEnumTASK_IMPORTANCEFilter<$PrismaModel>
  }

  export type NestedEnumTASK_URGENCYWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TASK_URGENCY | EnumTASK_URGENCYFieldRefInput<$PrismaModel>
    in?: $Enums.TASK_URGENCY[] | ListEnumTASK_URGENCYFieldRefInput<$PrismaModel>
    notIn?: $Enums.TASK_URGENCY[] | ListEnumTASK_URGENCYFieldRefInput<$PrismaModel>
    not?: NestedEnumTASK_URGENCYWithAggregatesFilter<$PrismaModel> | $Enums.TASK_URGENCY
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTASK_URGENCYFilter<$PrismaModel>
    _max?: NestedEnumTASK_URGENCYFilter<$PrismaModel>
  }

  export type NestedEnumTASK_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TASK_STATUS | EnumTASK_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.TASK_STATUS[] | ListEnumTASK_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.TASK_STATUS[] | ListEnumTASK_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumTASK_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.TASK_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTASK_STATUSFilter<$PrismaModel>
    _max?: NestedEnumTASK_STATUSFilter<$PrismaModel>
  }

  export type NestedEnumLEGAL_ACTIONWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LEGAL_ACTION | EnumLEGAL_ACTIONFieldRefInput<$PrismaModel>
    in?: $Enums.LEGAL_ACTION[] | ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEGAL_ACTION[] | ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel>
    not?: NestedEnumLEGAL_ACTIONWithAggregatesFilter<$PrismaModel> | $Enums.LEGAL_ACTION
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLEGAL_ACTIONFilter<$PrismaModel>
    _max?: NestedEnumLEGAL_ACTIONFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSTATUS_IN_COURTWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS_IN_COURT | EnumSTATUS_IN_COURTFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS_IN_COURT[] | ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS_IN_COURT[] | ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUS_IN_COURTWithAggregatesFilter<$PrismaModel> | $Enums.STATUS_IN_COURT
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTATUS_IN_COURTFilter<$PrismaModel>
    _max?: NestedEnumSTATUS_IN_COURTFilter<$PrismaModel>
  }

  export type NestedEnumREFUSAL_REASONNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.REFUSAL_REASON | EnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    in?: $Enums.REFUSAL_REASON[] | ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.REFUSAL_REASON[] | ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    not?: NestedEnumREFUSAL_REASONNullableWithAggregatesFilter<$PrismaModel> | $Enums.REFUSAL_REASON | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumREFUSAL_REASONNullableFilter<$PrismaModel>
    _max?: NestedEnumREFUSAL_REASONNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumSOURCE_CATEGORYFilter<$PrismaModel = never> = {
    equals?: $Enums.SOURCE_CATEGORY | EnumSOURCE_CATEGORYFieldRefInput<$PrismaModel>
    in?: $Enums.SOURCE_CATEGORY[] | ListEnumSOURCE_CATEGORYFieldRefInput<$PrismaModel>
    notIn?: $Enums.SOURCE_CATEGORY[] | ListEnumSOURCE_CATEGORYFieldRefInput<$PrismaModel>
    not?: NestedEnumSOURCE_CATEGORYFilter<$PrismaModel> | $Enums.SOURCE_CATEGORY
  }

  export type NestedEnumSOURCE_CATEGORYWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SOURCE_CATEGORY | EnumSOURCE_CATEGORYFieldRefInput<$PrismaModel>
    in?: $Enums.SOURCE_CATEGORY[] | ListEnumSOURCE_CATEGORYFieldRefInput<$PrismaModel>
    notIn?: $Enums.SOURCE_CATEGORY[] | ListEnumSOURCE_CATEGORYFieldRefInput<$PrismaModel>
    not?: NestedEnumSOURCE_CATEGORYWithAggregatesFilter<$PrismaModel> | $Enums.SOURCE_CATEGORY
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSOURCE_CATEGORYFilter<$PrismaModel>
    _max?: NestedEnumSOURCE_CATEGORYFilter<$PrismaModel>
  }

  export type UserCreateWithoutAuthorInput = {
    username: string
    userLink?: string | null
    phoneNumber?: string | null
    email?: string | null
    homeAddress: string
    leadStatus?: $Enums.LEAD_STATUS
    taskImportance?: $Enums.TASK_IMPORTANCE
    taskUrgency?: $Enums.TASK_URGENCY
    taskStatus?: $Enums.TASK_STATUS
    legalAction: $Enums.LEGAL_ACTION
    problemShort: string
    problemFull: string
    nearestTask?: string
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    courtInfo?: string
    statusInCourt: $Enums.STATUS_IN_COURT
    refusalReason?: $Enums.REFUSAL_REASON | null
    createdAt?: Date | string
    assignmentTime?: Date | string | null
    source: SourceCreateNestedOneWithoutUsersInput
    opponent?: OpponentCreateNestedOneWithoutUsersInput
    manager?: ManagerCreateNestedOneWithoutManagedUsersInput
  }

  export type UserUncheckedCreateWithoutAuthorInput = {
    id?: number
    username: string
    userLink?: string | null
    phoneNumber?: string | null
    email?: string | null
    homeAddress: string
    leadStatus?: $Enums.LEAD_STATUS
    taskImportance?: $Enums.TASK_IMPORTANCE
    taskUrgency?: $Enums.TASK_URGENCY
    taskStatus?: $Enums.TASK_STATUS
    legalAction: $Enums.LEGAL_ACTION
    problemShort: string
    problemFull: string
    nearestTask?: string
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    courtInfo?: string
    statusInCourt: $Enums.STATUS_IN_COURT
    refusalReason?: $Enums.REFUSAL_REASON | null
    createdAt?: Date | string
    assignmentTime?: Date | string | null
    sourceId: number
    opponentId?: number | null
    managerId?: number | null
  }

  export type UserCreateOrConnectWithoutAuthorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthorInput, UserUncheckedCreateWithoutAuthorInput>
  }

  export type UserCreateManyAuthorInputEnvelope = {
    data: UserCreateManyAuthorInput | UserCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutManagerInput = {
    username: string
    userLink?: string | null
    phoneNumber?: string | null
    email?: string | null
    homeAddress: string
    leadStatus?: $Enums.LEAD_STATUS
    taskImportance?: $Enums.TASK_IMPORTANCE
    taskUrgency?: $Enums.TASK_URGENCY
    taskStatus?: $Enums.TASK_STATUS
    legalAction: $Enums.LEGAL_ACTION
    problemShort: string
    problemFull: string
    nearestTask?: string
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    courtInfo?: string
    statusInCourt: $Enums.STATUS_IN_COURT
    refusalReason?: $Enums.REFUSAL_REASON | null
    createdAt?: Date | string
    assignmentTime?: Date | string | null
    author: ManagerCreateNestedOneWithoutAuthoredUsersInput
    source: SourceCreateNestedOneWithoutUsersInput
    opponent?: OpponentCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutManagerInput = {
    id?: number
    username: string
    userLink?: string | null
    phoneNumber?: string | null
    email?: string | null
    homeAddress: string
    leadStatus?: $Enums.LEAD_STATUS
    taskImportance?: $Enums.TASK_IMPORTANCE
    taskUrgency?: $Enums.TASK_URGENCY
    taskStatus?: $Enums.TASK_STATUS
    legalAction: $Enums.LEGAL_ACTION
    problemShort: string
    problemFull: string
    nearestTask?: string
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    courtInfo?: string
    statusInCourt: $Enums.STATUS_IN_COURT
    refusalReason?: $Enums.REFUSAL_REASON | null
    createdAt?: Date | string
    assignmentTime?: Date | string | null
    authorId: number
    sourceId: number
    opponentId?: number | null
  }

  export type UserCreateOrConnectWithoutManagerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserCreateManyManagerInputEnvelope = {
    data: UserCreateManyManagerInput | UserCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type SourceCreateWithoutAuthorInput = {
    title: string
    sourceLink?: string | null
    category: $Enums.SOURCE_CATEGORY
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutSourceInput
  }

  export type SourceUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    sourceLink?: string | null
    category: $Enums.SOURCE_CATEGORY
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutSourceInput
  }

  export type SourceCreateOrConnectWithoutAuthorInput = {
    where: SourceWhereUniqueInput
    create: XOR<SourceCreateWithoutAuthorInput, SourceUncheckedCreateWithoutAuthorInput>
  }

  export type SourceCreateManyAuthorInputEnvelope = {
    data: SourceCreateManyAuthorInput | SourceCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type BloggerCreateWithoutAuthorInput = {
    name: string
    link: string
    subscribersCount: number
    info?: string
    priceSOM?: number | null
    priceUSD?: number | null
    phoneNumber?: string | null
    email?: string | null
    categories?: BloggerCreatecategoriesInput | $Enums.SOURCE_CATEGORY[]
    createdAt?: Date | string
  }

  export type BloggerUncheckedCreateWithoutAuthorInput = {
    id?: number
    name: string
    link: string
    subscribersCount: number
    info?: string
    priceSOM?: number | null
    priceUSD?: number | null
    phoneNumber?: string | null
    email?: string | null
    categories?: BloggerCreatecategoriesInput | $Enums.SOURCE_CATEGORY[]
    createdAt?: Date | string
  }

  export type BloggerCreateOrConnectWithoutAuthorInput = {
    where: BloggerWhereUniqueInput
    create: XOR<BloggerCreateWithoutAuthorInput, BloggerUncheckedCreateWithoutAuthorInput>
  }

  export type BloggerCreateManyAuthorInputEnvelope = {
    data: BloggerCreateManyAuthorInput | BloggerCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutAuthorInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAuthorInput, UserUncheckedUpdateWithoutAuthorInput>
    create: XOR<UserCreateWithoutAuthorInput, UserUncheckedCreateWithoutAuthorInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAuthorInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAuthorInput, UserUncheckedUpdateWithoutAuthorInput>
  }

  export type UserUpdateManyWithWhereWithoutAuthorInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAuthorInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    userLink?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    homeAddress?: StringFilter<"User"> | string
    leadStatus?: EnumLEAD_STATUSFilter<"User"> | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFilter<"User"> | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFilter<"User"> | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFilter<"User"> | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFilter<"User"> | $Enums.LEGAL_ACTION
    problemShort?: StringFilter<"User"> | string
    problemFull?: StringFilter<"User"> | string
    nearestTask?: StringFilter<"User"> | string
    nearestTaskDeadline?: DateTimeNullableFilter<"User"> | Date | string | null
    timeOfPerformance?: DateTimeNullableFilter<"User"> | Date | string | null
    priceSOM?: BigIntNullableFilter<"User"> | bigint | number | null
    priceUSD?: BigIntNullableFilter<"User"> | bigint | number | null
    courtInfo?: StringFilter<"User"> | string
    statusInCourt?: EnumSTATUS_IN_COURTFilter<"User"> | $Enums.STATUS_IN_COURT
    refusalReason?: EnumREFUSAL_REASONNullableFilter<"User"> | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    assignmentTime?: DateTimeNullableFilter<"User"> | Date | string | null
    authorId?: IntFilter<"User"> | number
    sourceId?: IntFilter<"User"> | number
    opponentId?: IntNullableFilter<"User"> | number | null
    managerId?: IntNullableFilter<"User"> | number | null
  }

  export type UserUpsertWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserUpdateWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
  }

  export type UserUpdateManyWithWhereWithoutManagerInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutManagerInput>
  }

  export type SourceUpsertWithWhereUniqueWithoutAuthorInput = {
    where: SourceWhereUniqueInput
    update: XOR<SourceUpdateWithoutAuthorInput, SourceUncheckedUpdateWithoutAuthorInput>
    create: XOR<SourceCreateWithoutAuthorInput, SourceUncheckedCreateWithoutAuthorInput>
  }

  export type SourceUpdateWithWhereUniqueWithoutAuthorInput = {
    where: SourceWhereUniqueInput
    data: XOR<SourceUpdateWithoutAuthorInput, SourceUncheckedUpdateWithoutAuthorInput>
  }

  export type SourceUpdateManyWithWhereWithoutAuthorInput = {
    where: SourceScalarWhereInput
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyWithoutAuthorInput>
  }

  export type SourceScalarWhereInput = {
    AND?: SourceScalarWhereInput | SourceScalarWhereInput[]
    OR?: SourceScalarWhereInput[]
    NOT?: SourceScalarWhereInput | SourceScalarWhereInput[]
    id?: IntFilter<"Source"> | number
    title?: StringFilter<"Source"> | string
    sourceLink?: StringNullableFilter<"Source"> | string | null
    category?: EnumSOURCE_CATEGORYFilter<"Source"> | $Enums.SOURCE_CATEGORY
    createdAt?: DateTimeFilter<"Source"> | Date | string
    authorId?: IntFilter<"Source"> | number
  }

  export type BloggerUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BloggerWhereUniqueInput
    update: XOR<BloggerUpdateWithoutAuthorInput, BloggerUncheckedUpdateWithoutAuthorInput>
    create: XOR<BloggerCreateWithoutAuthorInput, BloggerUncheckedCreateWithoutAuthorInput>
  }

  export type BloggerUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BloggerWhereUniqueInput
    data: XOR<BloggerUpdateWithoutAuthorInput, BloggerUncheckedUpdateWithoutAuthorInput>
  }

  export type BloggerUpdateManyWithWhereWithoutAuthorInput = {
    where: BloggerScalarWhereInput
    data: XOR<BloggerUpdateManyMutationInput, BloggerUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BloggerScalarWhereInput = {
    AND?: BloggerScalarWhereInput | BloggerScalarWhereInput[]
    OR?: BloggerScalarWhereInput[]
    NOT?: BloggerScalarWhereInput | BloggerScalarWhereInput[]
    id?: IntFilter<"Blogger"> | number
    name?: StringFilter<"Blogger"> | string
    link?: StringFilter<"Blogger"> | string
    subscribersCount?: IntFilter<"Blogger"> | number
    info?: StringFilter<"Blogger"> | string
    priceSOM?: IntNullableFilter<"Blogger"> | number | null
    priceUSD?: IntNullableFilter<"Blogger"> | number | null
    phoneNumber?: StringNullableFilter<"Blogger"> | string | null
    email?: StringNullableFilter<"Blogger"> | string | null
    categories?: EnumSOURCE_CATEGORYNullableListFilter<"Blogger">
    createdAt?: DateTimeFilter<"Blogger"> | Date | string
    authorId?: IntFilter<"Blogger"> | number
  }

  export type ManagerCreateWithoutAuthoredUsersInput = {
    username: string
    password: string
    role: $Enums.ROLES
    createdAt?: Date | string
    managedUsers?: UserCreateNestedManyWithoutManagerInput
    sources?: SourceCreateNestedManyWithoutAuthorInput
    bloggers?: BloggerCreateNestedManyWithoutAuthorInput
  }

  export type ManagerUncheckedCreateWithoutAuthoredUsersInput = {
    id?: number
    username: string
    password: string
    role: $Enums.ROLES
    createdAt?: Date | string
    managedUsers?: UserUncheckedCreateNestedManyWithoutManagerInput
    sources?: SourceUncheckedCreateNestedManyWithoutAuthorInput
    bloggers?: BloggerUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type ManagerCreateOrConnectWithoutAuthoredUsersInput = {
    where: ManagerWhereUniqueInput
    create: XOR<ManagerCreateWithoutAuthoredUsersInput, ManagerUncheckedCreateWithoutAuthoredUsersInput>
  }

  export type SourceCreateWithoutUsersInput = {
    title: string
    sourceLink?: string | null
    category: $Enums.SOURCE_CATEGORY
    createdAt?: Date | string
    author: ManagerCreateNestedOneWithoutSourcesInput
  }

  export type SourceUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    sourceLink?: string | null
    category: $Enums.SOURCE_CATEGORY
    createdAt?: Date | string
    authorId: number
  }

  export type SourceCreateOrConnectWithoutUsersInput = {
    where: SourceWhereUniqueInput
    create: XOR<SourceCreateWithoutUsersInput, SourceUncheckedCreateWithoutUsersInput>
  }

  export type OpponentCreateWithoutUsersInput = {
    name: string
    link?: string | null
    info?: string
    createdAt?: Date | string
  }

  export type OpponentUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    link?: string | null
    info?: string
    createdAt?: Date | string
  }

  export type OpponentCreateOrConnectWithoutUsersInput = {
    where: OpponentWhereUniqueInput
    create: XOR<OpponentCreateWithoutUsersInput, OpponentUncheckedCreateWithoutUsersInput>
  }

  export type ManagerCreateWithoutManagedUsersInput = {
    username: string
    password: string
    role: $Enums.ROLES
    createdAt?: Date | string
    authoredUsers?: UserCreateNestedManyWithoutAuthorInput
    sources?: SourceCreateNestedManyWithoutAuthorInput
    bloggers?: BloggerCreateNestedManyWithoutAuthorInput
  }

  export type ManagerUncheckedCreateWithoutManagedUsersInput = {
    id?: number
    username: string
    password: string
    role: $Enums.ROLES
    createdAt?: Date | string
    authoredUsers?: UserUncheckedCreateNestedManyWithoutAuthorInput
    sources?: SourceUncheckedCreateNestedManyWithoutAuthorInput
    bloggers?: BloggerUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type ManagerCreateOrConnectWithoutManagedUsersInput = {
    where: ManagerWhereUniqueInput
    create: XOR<ManagerCreateWithoutManagedUsersInput, ManagerUncheckedCreateWithoutManagedUsersInput>
  }

  export type ManagerUpsertWithoutAuthoredUsersInput = {
    update: XOR<ManagerUpdateWithoutAuthoredUsersInput, ManagerUncheckedUpdateWithoutAuthoredUsersInput>
    create: XOR<ManagerCreateWithoutAuthoredUsersInput, ManagerUncheckedCreateWithoutAuthoredUsersInput>
    where?: ManagerWhereInput
  }

  export type ManagerUpdateToOneWithWhereWithoutAuthoredUsersInput = {
    where?: ManagerWhereInput
    data: XOR<ManagerUpdateWithoutAuthoredUsersInput, ManagerUncheckedUpdateWithoutAuthoredUsersInput>
  }

  export type ManagerUpdateWithoutAuthoredUsersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedUsers?: UserUpdateManyWithoutManagerNestedInput
    sources?: SourceUpdateManyWithoutAuthorNestedInput
    bloggers?: BloggerUpdateManyWithoutAuthorNestedInput
  }

  export type ManagerUncheckedUpdateWithoutAuthoredUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedUsers?: UserUncheckedUpdateManyWithoutManagerNestedInput
    sources?: SourceUncheckedUpdateManyWithoutAuthorNestedInput
    bloggers?: BloggerUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type SourceUpsertWithoutUsersInput = {
    update: XOR<SourceUpdateWithoutUsersInput, SourceUncheckedUpdateWithoutUsersInput>
    create: XOR<SourceCreateWithoutUsersInput, SourceUncheckedCreateWithoutUsersInput>
    where?: SourceWhereInput
  }

  export type SourceUpdateToOneWithWhereWithoutUsersInput = {
    where?: SourceWhereInput
    data: XOR<SourceUpdateWithoutUsersInput, SourceUncheckedUpdateWithoutUsersInput>
  }

  export type SourceUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    sourceLink?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumSOURCE_CATEGORYFieldUpdateOperationsInput | $Enums.SOURCE_CATEGORY
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: ManagerUpdateOneRequiredWithoutSourcesNestedInput
  }

  export type SourceUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    sourceLink?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumSOURCE_CATEGORYFieldUpdateOperationsInput | $Enums.SOURCE_CATEGORY
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type OpponentUpsertWithoutUsersInput = {
    update: XOR<OpponentUpdateWithoutUsersInput, OpponentUncheckedUpdateWithoutUsersInput>
    create: XOR<OpponentCreateWithoutUsersInput, OpponentUncheckedCreateWithoutUsersInput>
    where?: OpponentWhereInput
  }

  export type OpponentUpdateToOneWithWhereWithoutUsersInput = {
    where?: OpponentWhereInput
    data: XOR<OpponentUpdateWithoutUsersInput, OpponentUncheckedUpdateWithoutUsersInput>
  }

  export type OpponentUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    info?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpponentUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    info?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerUpsertWithoutManagedUsersInput = {
    update: XOR<ManagerUpdateWithoutManagedUsersInput, ManagerUncheckedUpdateWithoutManagedUsersInput>
    create: XOR<ManagerCreateWithoutManagedUsersInput, ManagerUncheckedCreateWithoutManagedUsersInput>
    where?: ManagerWhereInput
  }

  export type ManagerUpdateToOneWithWhereWithoutManagedUsersInput = {
    where?: ManagerWhereInput
    data: XOR<ManagerUpdateWithoutManagedUsersInput, ManagerUncheckedUpdateWithoutManagedUsersInput>
  }

  export type ManagerUpdateWithoutManagedUsersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authoredUsers?: UserUpdateManyWithoutAuthorNestedInput
    sources?: SourceUpdateManyWithoutAuthorNestedInput
    bloggers?: BloggerUpdateManyWithoutAuthorNestedInput
  }

  export type ManagerUncheckedUpdateWithoutManagedUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authoredUsers?: UserUncheckedUpdateManyWithoutAuthorNestedInput
    sources?: SourceUncheckedUpdateManyWithoutAuthorNestedInput
    bloggers?: BloggerUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ManagerCreateWithoutSourcesInput = {
    username: string
    password: string
    role: $Enums.ROLES
    createdAt?: Date | string
    authoredUsers?: UserCreateNestedManyWithoutAuthorInput
    managedUsers?: UserCreateNestedManyWithoutManagerInput
    bloggers?: BloggerCreateNestedManyWithoutAuthorInput
  }

  export type ManagerUncheckedCreateWithoutSourcesInput = {
    id?: number
    username: string
    password: string
    role: $Enums.ROLES
    createdAt?: Date | string
    authoredUsers?: UserUncheckedCreateNestedManyWithoutAuthorInput
    managedUsers?: UserUncheckedCreateNestedManyWithoutManagerInput
    bloggers?: BloggerUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type ManagerCreateOrConnectWithoutSourcesInput = {
    where: ManagerWhereUniqueInput
    create: XOR<ManagerCreateWithoutSourcesInput, ManagerUncheckedCreateWithoutSourcesInput>
  }

  export type UserCreateWithoutSourceInput = {
    username: string
    userLink?: string | null
    phoneNumber?: string | null
    email?: string | null
    homeAddress: string
    leadStatus?: $Enums.LEAD_STATUS
    taskImportance?: $Enums.TASK_IMPORTANCE
    taskUrgency?: $Enums.TASK_URGENCY
    taskStatus?: $Enums.TASK_STATUS
    legalAction: $Enums.LEGAL_ACTION
    problemShort: string
    problemFull: string
    nearestTask?: string
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    courtInfo?: string
    statusInCourt: $Enums.STATUS_IN_COURT
    refusalReason?: $Enums.REFUSAL_REASON | null
    createdAt?: Date | string
    assignmentTime?: Date | string | null
    author: ManagerCreateNestedOneWithoutAuthoredUsersInput
    opponent?: OpponentCreateNestedOneWithoutUsersInput
    manager?: ManagerCreateNestedOneWithoutManagedUsersInput
  }

  export type UserUncheckedCreateWithoutSourceInput = {
    id?: number
    username: string
    userLink?: string | null
    phoneNumber?: string | null
    email?: string | null
    homeAddress: string
    leadStatus?: $Enums.LEAD_STATUS
    taskImportance?: $Enums.TASK_IMPORTANCE
    taskUrgency?: $Enums.TASK_URGENCY
    taskStatus?: $Enums.TASK_STATUS
    legalAction: $Enums.LEGAL_ACTION
    problemShort: string
    problemFull: string
    nearestTask?: string
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    courtInfo?: string
    statusInCourt: $Enums.STATUS_IN_COURT
    refusalReason?: $Enums.REFUSAL_REASON | null
    createdAt?: Date | string
    assignmentTime?: Date | string | null
    authorId: number
    opponentId?: number | null
    managerId?: number | null
  }

  export type UserCreateOrConnectWithoutSourceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSourceInput, UserUncheckedCreateWithoutSourceInput>
  }

  export type UserCreateManySourceInputEnvelope = {
    data: UserCreateManySourceInput | UserCreateManySourceInput[]
    skipDuplicates?: boolean
  }

  export type ManagerUpsertWithoutSourcesInput = {
    update: XOR<ManagerUpdateWithoutSourcesInput, ManagerUncheckedUpdateWithoutSourcesInput>
    create: XOR<ManagerCreateWithoutSourcesInput, ManagerUncheckedCreateWithoutSourcesInput>
    where?: ManagerWhereInput
  }

  export type ManagerUpdateToOneWithWhereWithoutSourcesInput = {
    where?: ManagerWhereInput
    data: XOR<ManagerUpdateWithoutSourcesInput, ManagerUncheckedUpdateWithoutSourcesInput>
  }

  export type ManagerUpdateWithoutSourcesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authoredUsers?: UserUpdateManyWithoutAuthorNestedInput
    managedUsers?: UserUpdateManyWithoutManagerNestedInput
    bloggers?: BloggerUpdateManyWithoutAuthorNestedInput
  }

  export type ManagerUncheckedUpdateWithoutSourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authoredUsers?: UserUncheckedUpdateManyWithoutAuthorNestedInput
    managedUsers?: UserUncheckedUpdateManyWithoutManagerNestedInput
    bloggers?: BloggerUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutSourceInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSourceInput, UserUncheckedUpdateWithoutSourceInput>
    create: XOR<UserCreateWithoutSourceInput, UserUncheckedCreateWithoutSourceInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSourceInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSourceInput, UserUncheckedUpdateWithoutSourceInput>
  }

  export type UserUpdateManyWithWhereWithoutSourceInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSourceInput>
  }

  export type UserCreateWithoutOpponentInput = {
    username: string
    userLink?: string | null
    phoneNumber?: string | null
    email?: string | null
    homeAddress: string
    leadStatus?: $Enums.LEAD_STATUS
    taskImportance?: $Enums.TASK_IMPORTANCE
    taskUrgency?: $Enums.TASK_URGENCY
    taskStatus?: $Enums.TASK_STATUS
    legalAction: $Enums.LEGAL_ACTION
    problemShort: string
    problemFull: string
    nearestTask?: string
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    courtInfo?: string
    statusInCourt: $Enums.STATUS_IN_COURT
    refusalReason?: $Enums.REFUSAL_REASON | null
    createdAt?: Date | string
    assignmentTime?: Date | string | null
    author: ManagerCreateNestedOneWithoutAuthoredUsersInput
    source: SourceCreateNestedOneWithoutUsersInput
    manager?: ManagerCreateNestedOneWithoutManagedUsersInput
  }

  export type UserUncheckedCreateWithoutOpponentInput = {
    id?: number
    username: string
    userLink?: string | null
    phoneNumber?: string | null
    email?: string | null
    homeAddress: string
    leadStatus?: $Enums.LEAD_STATUS
    taskImportance?: $Enums.TASK_IMPORTANCE
    taskUrgency?: $Enums.TASK_URGENCY
    taskStatus?: $Enums.TASK_STATUS
    legalAction: $Enums.LEGAL_ACTION
    problemShort: string
    problemFull: string
    nearestTask?: string
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    courtInfo?: string
    statusInCourt: $Enums.STATUS_IN_COURT
    refusalReason?: $Enums.REFUSAL_REASON | null
    createdAt?: Date | string
    assignmentTime?: Date | string | null
    authorId: number
    sourceId: number
    managerId?: number | null
  }

  export type UserCreateOrConnectWithoutOpponentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOpponentInput, UserUncheckedCreateWithoutOpponentInput>
  }

  export type UserCreateManyOpponentInputEnvelope = {
    data: UserCreateManyOpponentInput | UserCreateManyOpponentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOpponentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOpponentInput, UserUncheckedUpdateWithoutOpponentInput>
    create: XOR<UserCreateWithoutOpponentInput, UserUncheckedCreateWithoutOpponentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOpponentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOpponentInput, UserUncheckedUpdateWithoutOpponentInput>
  }

  export type UserUpdateManyWithWhereWithoutOpponentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOpponentInput>
  }

  export type ManagerCreateWithoutBloggersInput = {
    username: string
    password: string
    role: $Enums.ROLES
    createdAt?: Date | string
    authoredUsers?: UserCreateNestedManyWithoutAuthorInput
    managedUsers?: UserCreateNestedManyWithoutManagerInput
    sources?: SourceCreateNestedManyWithoutAuthorInput
  }

  export type ManagerUncheckedCreateWithoutBloggersInput = {
    id?: number
    username: string
    password: string
    role: $Enums.ROLES
    createdAt?: Date | string
    authoredUsers?: UserUncheckedCreateNestedManyWithoutAuthorInput
    managedUsers?: UserUncheckedCreateNestedManyWithoutManagerInput
    sources?: SourceUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type ManagerCreateOrConnectWithoutBloggersInput = {
    where: ManagerWhereUniqueInput
    create: XOR<ManagerCreateWithoutBloggersInput, ManagerUncheckedCreateWithoutBloggersInput>
  }

  export type ManagerUpsertWithoutBloggersInput = {
    update: XOR<ManagerUpdateWithoutBloggersInput, ManagerUncheckedUpdateWithoutBloggersInput>
    create: XOR<ManagerCreateWithoutBloggersInput, ManagerUncheckedCreateWithoutBloggersInput>
    where?: ManagerWhereInput
  }

  export type ManagerUpdateToOneWithWhereWithoutBloggersInput = {
    where?: ManagerWhereInput
    data: XOR<ManagerUpdateWithoutBloggersInput, ManagerUncheckedUpdateWithoutBloggersInput>
  }

  export type ManagerUpdateWithoutBloggersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authoredUsers?: UserUpdateManyWithoutAuthorNestedInput
    managedUsers?: UserUpdateManyWithoutManagerNestedInput
    sources?: SourceUpdateManyWithoutAuthorNestedInput
  }

  export type ManagerUncheckedUpdateWithoutBloggersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authoredUsers?: UserUncheckedUpdateManyWithoutAuthorNestedInput
    managedUsers?: UserUncheckedUpdateManyWithoutManagerNestedInput
    sources?: SourceUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyAuthorInput = {
    id?: number
    username: string
    userLink?: string | null
    phoneNumber?: string | null
    email?: string | null
    homeAddress: string
    leadStatus?: $Enums.LEAD_STATUS
    taskImportance?: $Enums.TASK_IMPORTANCE
    taskUrgency?: $Enums.TASK_URGENCY
    taskStatus?: $Enums.TASK_STATUS
    legalAction: $Enums.LEGAL_ACTION
    problemShort: string
    problemFull: string
    nearestTask?: string
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    courtInfo?: string
    statusInCourt: $Enums.STATUS_IN_COURT
    refusalReason?: $Enums.REFUSAL_REASON | null
    createdAt?: Date | string
    assignmentTime?: Date | string | null
    sourceId: number
    opponentId?: number | null
    managerId?: number | null
  }

  export type UserCreateManyManagerInput = {
    id?: number
    username: string
    userLink?: string | null
    phoneNumber?: string | null
    email?: string | null
    homeAddress: string
    leadStatus?: $Enums.LEAD_STATUS
    taskImportance?: $Enums.TASK_IMPORTANCE
    taskUrgency?: $Enums.TASK_URGENCY
    taskStatus?: $Enums.TASK_STATUS
    legalAction: $Enums.LEGAL_ACTION
    problemShort: string
    problemFull: string
    nearestTask?: string
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    courtInfo?: string
    statusInCourt: $Enums.STATUS_IN_COURT
    refusalReason?: $Enums.REFUSAL_REASON | null
    createdAt?: Date | string
    assignmentTime?: Date | string | null
    authorId: number
    sourceId: number
    opponentId?: number | null
  }

  export type SourceCreateManyAuthorInput = {
    id?: number
    title: string
    sourceLink?: string | null
    category: $Enums.SOURCE_CATEGORY
    createdAt?: Date | string
  }

  export type BloggerCreateManyAuthorInput = {
    id?: number
    name: string
    link: string
    subscribersCount: number
    info?: string
    priceSOM?: number | null
    priceUSD?: number | null
    phoneNumber?: string | null
    email?: string | null
    categories?: BloggerCreatecategoriesInput | $Enums.SOURCE_CATEGORY[]
    createdAt?: Date | string
  }

  export type UserUpdateWithoutAuthorInput = {
    username?: StringFieldUpdateOperationsInput | string
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: StringFieldUpdateOperationsInput | string
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFieldUpdateOperationsInput | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFieldUpdateOperationsInput | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFieldUpdateOperationsInput | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION
    problemShort?: StringFieldUpdateOperationsInput | string
    problemFull?: StringFieldUpdateOperationsInput | string
    nearestTask?: StringFieldUpdateOperationsInput | string
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    courtInfo?: StringFieldUpdateOperationsInput | string
    statusInCourt?: EnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: SourceUpdateOneRequiredWithoutUsersNestedInput
    opponent?: OpponentUpdateOneWithoutUsersNestedInput
    manager?: ManagerUpdateOneWithoutManagedUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: StringFieldUpdateOperationsInput | string
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFieldUpdateOperationsInput | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFieldUpdateOperationsInput | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFieldUpdateOperationsInput | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION
    problemShort?: StringFieldUpdateOperationsInput | string
    problemFull?: StringFieldUpdateOperationsInput | string
    nearestTask?: StringFieldUpdateOperationsInput | string
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    courtInfo?: StringFieldUpdateOperationsInput | string
    statusInCourt?: EnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: StringFieldUpdateOperationsInput | string
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFieldUpdateOperationsInput | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFieldUpdateOperationsInput | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFieldUpdateOperationsInput | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION
    problemShort?: StringFieldUpdateOperationsInput | string
    problemFull?: StringFieldUpdateOperationsInput | string
    nearestTask?: StringFieldUpdateOperationsInput | string
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    courtInfo?: StringFieldUpdateOperationsInput | string
    statusInCourt?: EnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpdateWithoutManagerInput = {
    username?: StringFieldUpdateOperationsInput | string
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: StringFieldUpdateOperationsInput | string
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFieldUpdateOperationsInput | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFieldUpdateOperationsInput | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFieldUpdateOperationsInput | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION
    problemShort?: StringFieldUpdateOperationsInput | string
    problemFull?: StringFieldUpdateOperationsInput | string
    nearestTask?: StringFieldUpdateOperationsInput | string
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    courtInfo?: StringFieldUpdateOperationsInput | string
    statusInCourt?: EnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: ManagerUpdateOneRequiredWithoutAuthoredUsersNestedInput
    source?: SourceUpdateOneRequiredWithoutUsersNestedInput
    opponent?: OpponentUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: StringFieldUpdateOperationsInput | string
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFieldUpdateOperationsInput | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFieldUpdateOperationsInput | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFieldUpdateOperationsInput | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION
    problemShort?: StringFieldUpdateOperationsInput | string
    problemFull?: StringFieldUpdateOperationsInput | string
    nearestTask?: StringFieldUpdateOperationsInput | string
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    courtInfo?: StringFieldUpdateOperationsInput | string
    statusInCourt?: EnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: StringFieldUpdateOperationsInput | string
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFieldUpdateOperationsInput | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFieldUpdateOperationsInput | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFieldUpdateOperationsInput | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION
    problemShort?: StringFieldUpdateOperationsInput | string
    problemFull?: StringFieldUpdateOperationsInput | string
    nearestTask?: StringFieldUpdateOperationsInput | string
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    courtInfo?: StringFieldUpdateOperationsInput | string
    statusInCourt?: EnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SourceUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    sourceLink?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumSOURCE_CATEGORYFieldUpdateOperationsInput | $Enums.SOURCE_CATEGORY
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutSourceNestedInput
  }

  export type SourceUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    sourceLink?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumSOURCE_CATEGORYFieldUpdateOperationsInput | $Enums.SOURCE_CATEGORY
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutSourceNestedInput
  }

  export type SourceUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    sourceLink?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumSOURCE_CATEGORYFieldUpdateOperationsInput | $Enums.SOURCE_CATEGORY
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloggerUpdateWithoutAuthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    subscribersCount?: IntFieldUpdateOperationsInput | number
    info?: StringFieldUpdateOperationsInput | string
    priceSOM?: NullableIntFieldUpdateOperationsInput | number | null
    priceUSD?: NullableIntFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: BloggerUpdatecategoriesInput | $Enums.SOURCE_CATEGORY[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloggerUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    subscribersCount?: IntFieldUpdateOperationsInput | number
    info?: StringFieldUpdateOperationsInput | string
    priceSOM?: NullableIntFieldUpdateOperationsInput | number | null
    priceUSD?: NullableIntFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: BloggerUpdatecategoriesInput | $Enums.SOURCE_CATEGORY[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloggerUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    subscribersCount?: IntFieldUpdateOperationsInput | number
    info?: StringFieldUpdateOperationsInput | string
    priceSOM?: NullableIntFieldUpdateOperationsInput | number | null
    priceUSD?: NullableIntFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: BloggerUpdatecategoriesInput | $Enums.SOURCE_CATEGORY[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManySourceInput = {
    id?: number
    username: string
    userLink?: string | null
    phoneNumber?: string | null
    email?: string | null
    homeAddress: string
    leadStatus?: $Enums.LEAD_STATUS
    taskImportance?: $Enums.TASK_IMPORTANCE
    taskUrgency?: $Enums.TASK_URGENCY
    taskStatus?: $Enums.TASK_STATUS
    legalAction: $Enums.LEGAL_ACTION
    problemShort: string
    problemFull: string
    nearestTask?: string
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    courtInfo?: string
    statusInCourt: $Enums.STATUS_IN_COURT
    refusalReason?: $Enums.REFUSAL_REASON | null
    createdAt?: Date | string
    assignmentTime?: Date | string | null
    authorId: number
    opponentId?: number | null
    managerId?: number | null
  }

  export type UserUpdateWithoutSourceInput = {
    username?: StringFieldUpdateOperationsInput | string
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: StringFieldUpdateOperationsInput | string
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFieldUpdateOperationsInput | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFieldUpdateOperationsInput | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFieldUpdateOperationsInput | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION
    problemShort?: StringFieldUpdateOperationsInput | string
    problemFull?: StringFieldUpdateOperationsInput | string
    nearestTask?: StringFieldUpdateOperationsInput | string
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    courtInfo?: StringFieldUpdateOperationsInput | string
    statusInCourt?: EnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: ManagerUpdateOneRequiredWithoutAuthoredUsersNestedInput
    opponent?: OpponentUpdateOneWithoutUsersNestedInput
    manager?: ManagerUpdateOneWithoutManagedUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: StringFieldUpdateOperationsInput | string
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFieldUpdateOperationsInput | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFieldUpdateOperationsInput | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFieldUpdateOperationsInput | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION
    problemShort?: StringFieldUpdateOperationsInput | string
    problemFull?: StringFieldUpdateOperationsInput | string
    nearestTask?: StringFieldUpdateOperationsInput | string
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    courtInfo?: StringFieldUpdateOperationsInput | string
    statusInCourt?: EnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyWithoutSourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: StringFieldUpdateOperationsInput | string
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFieldUpdateOperationsInput | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFieldUpdateOperationsInput | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFieldUpdateOperationsInput | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION
    problemShort?: StringFieldUpdateOperationsInput | string
    problemFull?: StringFieldUpdateOperationsInput | string
    nearestTask?: StringFieldUpdateOperationsInput | string
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    courtInfo?: StringFieldUpdateOperationsInput | string
    statusInCourt?: EnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateManyOpponentInput = {
    id?: number
    username: string
    userLink?: string | null
    phoneNumber?: string | null
    email?: string | null
    homeAddress: string
    leadStatus?: $Enums.LEAD_STATUS
    taskImportance?: $Enums.TASK_IMPORTANCE
    taskUrgency?: $Enums.TASK_URGENCY
    taskStatus?: $Enums.TASK_STATUS
    legalAction: $Enums.LEGAL_ACTION
    problemShort: string
    problemFull: string
    nearestTask?: string
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    courtInfo?: string
    statusInCourt: $Enums.STATUS_IN_COURT
    refusalReason?: $Enums.REFUSAL_REASON | null
    createdAt?: Date | string
    assignmentTime?: Date | string | null
    authorId: number
    sourceId: number
    managerId?: number | null
  }

  export type UserUpdateWithoutOpponentInput = {
    username?: StringFieldUpdateOperationsInput | string
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: StringFieldUpdateOperationsInput | string
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFieldUpdateOperationsInput | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFieldUpdateOperationsInput | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFieldUpdateOperationsInput | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION
    problemShort?: StringFieldUpdateOperationsInput | string
    problemFull?: StringFieldUpdateOperationsInput | string
    nearestTask?: StringFieldUpdateOperationsInput | string
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    courtInfo?: StringFieldUpdateOperationsInput | string
    statusInCourt?: EnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: ManagerUpdateOneRequiredWithoutAuthoredUsersNestedInput
    source?: SourceUpdateOneRequiredWithoutUsersNestedInput
    manager?: ManagerUpdateOneWithoutManagedUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutOpponentInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: StringFieldUpdateOperationsInput | string
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFieldUpdateOperationsInput | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFieldUpdateOperationsInput | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFieldUpdateOperationsInput | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION
    problemShort?: StringFieldUpdateOperationsInput | string
    problemFull?: StringFieldUpdateOperationsInput | string
    nearestTask?: StringFieldUpdateOperationsInput | string
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    courtInfo?: StringFieldUpdateOperationsInput | string
    statusInCourt?: EnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyWithoutOpponentInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: StringFieldUpdateOperationsInput | string
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    taskImportance?: EnumTASK_IMPORTANCEFieldUpdateOperationsInput | $Enums.TASK_IMPORTANCE
    taskUrgency?: EnumTASK_URGENCYFieldUpdateOperationsInput | $Enums.TASK_URGENCY
    taskStatus?: EnumTASK_STATUSFieldUpdateOperationsInput | $Enums.TASK_STATUS
    legalAction?: EnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION
    problemShort?: StringFieldUpdateOperationsInput | string
    problemFull?: StringFieldUpdateOperationsInput | string
    nearestTask?: StringFieldUpdateOperationsInput | string
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    courtInfo?: StringFieldUpdateOperationsInput | string
    statusInCourt?: EnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
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