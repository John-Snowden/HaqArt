
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
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>
/**
 * Model Case
 * 
 */
export type Case = $Result.DefaultSelection<Prisma.$CasePayload>
/**
 * Model Origin
 * 
 */
export type Origin = $Result.DefaultSelection<Prisma.$OriginPayload>
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
 * Model Call
 * 
 */
export type Call = $Result.DefaultSelection<Prisma.$CallPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const APPOINTMENT_STATUS: {
  DONE: 'DONE',
  MISSED: 'MISSED'
};

export type APPOINTMENT_STATUS = (typeof APPOINTMENT_STATUS)[keyof typeof APPOINTMENT_STATUS]


export const CALL_STATUS: {
  DONE: 'DONE',
  MISSED: 'MISSED'
};

export type CALL_STATUS = (typeof CALL_STATUS)[keyof typeof CALL_STATUS]


export const LEAD_STATUS: {
  ADDED_TO_DB: 'ADDED_TO_DB',
  CONTACT_SHARED: 'CONTACT_SHARED',
  CLIENT: 'CLIENT',
  RETURNING_CLIENT: 'RETURNING_CLIENT'
};

export type LEAD_STATUS = (typeof LEAD_STATUS)[keyof typeof LEAD_STATUS]


export const CASE_STATUS: {
  UNASSIGNED: 'UNASSIGNED',
  PENDING_START: 'PENDING_START',
  IN_PROGRESS: 'IN_PROGRESS',
  BLOCKED: 'BLOCKED',
  PENDING_CHECK: 'PENDING_CHECK',
  DONE: 'DONE',
  WE_REFUSED: 'WE_REFUSED',
  PERSON_REFUSED: 'PERSON_REFUSED'
};

export type CASE_STATUS = (typeof CASE_STATUS)[keyof typeof CASE_STATUS]


export const URGENCY: {
  ONE: 'ONE',
  TWO: 'TWO',
  THREE: 'THREE',
  FOUR: 'FOUR',
  FIVE: 'FIVE'
};

export type URGENCY = (typeof URGENCY)[keyof typeof URGENCY]


export const IMPORTANCE: {
  ONE: 'ONE',
  TWO: 'TWO',
  THREE: 'THREE'
};

export type IMPORTANCE = (typeof IMPORTANCE)[keyof typeof IMPORTANCE]


export const ROLE: {
  DEV: 'DEV',
  OWNER: 'OWNER',
  CEO: 'CEO',
  SMM_MANAGER: 'SMM_MANAGER',
  SALES_MANAGER: 'SALES_MANAGER',
  ACCOUNT_MANAGER: 'ACCOUNT_MANAGER',
  LAWYER: 'LAWYER',
  BOT: 'BOT'
};

export type ROLE = (typeof ROLE)[keyof typeof ROLE]


export const LEGAL_ACTION: {
  CONSULTATION: 'CONSULTATION',
  FILING: 'FILING',
  COURT_PARTICIPATION: 'COURT_PARTICIPATION',
  APPOINTMENT: 'APPOINTMENT',
  NEGOTIATIONS: 'NEGOTIATIONS',
  CLAIM: 'CLAIM',
  LAWYER_REQUEST: 'LAWYER_REQUEST'
};

export type LEGAL_ACTION = (typeof LEGAL_ACTION)[keyof typeof LEGAL_ACTION]


export const STATUS_IN_COURT: {
  POSTPONED: 'POSTPONED',
  PAUSED: 'PAUSED',
  JUDGE_ON_VACATION: 'JUDGE_ON_VACATION',
  REASSIGNED: 'REASSIGNED',
  NEGOTIATIONS: 'NEGOTIATIONS',
  RETURNED: 'RETURNED'
};

export type STATUS_IN_COURT = (typeof STATUS_IN_COURT)[keyof typeof STATUS_IN_COURT]


export const REFUSAL_REASON: {
  CHOSE_COMPETITOR: 'CHOSE_COMPETITOR',
  IRRELEVANT_SERVICES: 'IRRELEVANT_SERVICES',
  TOO_EXPENSIVE: 'TOO_EXPENSIVE'
};

export type REFUSAL_REASON = (typeof REFUSAL_REASON)[keyof typeof REFUSAL_REASON]


export const CASE_CATEGORY: {
  REAL_ESTATE: 'REAL_ESTATE',
  FOREIGNERS: 'FOREIGNERS',
  CARS: 'CARS',
  LOANS: 'LOANS',
  OTHER: 'OTHER'
};

export type CASE_CATEGORY = (typeof CASE_CATEGORY)[keyof typeof CASE_CATEGORY]

}

export type APPOINTMENT_STATUS = $Enums.APPOINTMENT_STATUS

export const APPOINTMENT_STATUS: typeof $Enums.APPOINTMENT_STATUS

export type CALL_STATUS = $Enums.CALL_STATUS

export const CALL_STATUS: typeof $Enums.CALL_STATUS

export type LEAD_STATUS = $Enums.LEAD_STATUS

export const LEAD_STATUS: typeof $Enums.LEAD_STATUS

export type CASE_STATUS = $Enums.CASE_STATUS

export const CASE_STATUS: typeof $Enums.CASE_STATUS

export type URGENCY = $Enums.URGENCY

export const URGENCY: typeof $Enums.URGENCY

export type IMPORTANCE = $Enums.IMPORTANCE

export const IMPORTANCE: typeof $Enums.IMPORTANCE

export type ROLE = $Enums.ROLE

export const ROLE: typeof $Enums.ROLE

export type LEGAL_ACTION = $Enums.LEGAL_ACTION

export const LEGAL_ACTION: typeof $Enums.LEGAL_ACTION

export type STATUS_IN_COURT = $Enums.STATUS_IN_COURT

export const STATUS_IN_COURT: typeof $Enums.STATUS_IN_COURT

export type REFUSAL_REASON = $Enums.REFUSAL_REASON

export const REFUSAL_REASON: typeof $Enums.REFUSAL_REASON

export type CASE_CATEGORY = $Enums.CASE_CATEGORY

export const CASE_CATEGORY: typeof $Enums.CASE_CATEGORY

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
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
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
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
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.case`: Exposes CRUD operations for the **Case** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cases
    * const cases = await prisma.case.findMany()
    * ```
    */
  get case(): Prisma.CaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.origin`: Exposes CRUD operations for the **Origin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Origins
    * const origins = await prisma.origin.findMany()
    * ```
    */
  get origin(): Prisma.OriginDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.call`: Exposes CRUD operations for the **Call** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calls
    * const calls = await prisma.call.findMany()
    * ```
    */
  get call(): Prisma.CallDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;
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
    Employee: 'Employee',
    Person: 'Person',
    Case: 'Case',
    Origin: 'Origin',
    Opponent: 'Opponent',
    Blogger: 'Blogger',
    Call: 'Call',
    Appointment: 'Appointment'
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
      modelProps: "employee" | "person" | "case" | "origin" | "opponent" | "blogger" | "call" | "appointment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      Case: {
        payload: Prisma.$CasePayload<ExtArgs>
        fields: Prisma.CaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          findFirst: {
            args: Prisma.CaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          findMany: {
            args: Prisma.CaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>[]
          }
          create: {
            args: Prisma.CaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          createMany: {
            args: Prisma.CaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>[]
          }
          delete: {
            args: Prisma.CaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          update: {
            args: Prisma.CaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          deleteMany: {
            args: Prisma.CaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>[]
          }
          upsert: {
            args: Prisma.CaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          aggregate: {
            args: Prisma.CaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCase>
          }
          groupBy: {
            args: Prisma.CaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaseCountArgs<ExtArgs>
            result: $Utils.Optional<CaseCountAggregateOutputType> | number
          }
        }
      }
      Origin: {
        payload: Prisma.$OriginPayload<ExtArgs>
        fields: Prisma.OriginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OriginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OriginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          findFirst: {
            args: Prisma.OriginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OriginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          findMany: {
            args: Prisma.OriginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>[]
          }
          create: {
            args: Prisma.OriginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          createMany: {
            args: Prisma.OriginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OriginCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>[]
          }
          delete: {
            args: Prisma.OriginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          update: {
            args: Prisma.OriginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          deleteMany: {
            args: Prisma.OriginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OriginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OriginUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>[]
          }
          upsert: {
            args: Prisma.OriginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          aggregate: {
            args: Prisma.OriginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrigin>
          }
          groupBy: {
            args: Prisma.OriginGroupByArgs<ExtArgs>
            result: $Utils.Optional<OriginGroupByOutputType>[]
          }
          count: {
            args: Prisma.OriginCountArgs<ExtArgs>
            result: $Utils.Optional<OriginCountAggregateOutputType> | number
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
      Call: {
        payload: Prisma.$CallPayload<ExtArgs>
        fields: Prisma.CallFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CallFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CallFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          findFirst: {
            args: Prisma.CallFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CallFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          findMany: {
            args: Prisma.CallFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>[]
          }
          create: {
            args: Prisma.CallCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          createMany: {
            args: Prisma.CallCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CallCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>[]
          }
          delete: {
            args: Prisma.CallDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          update: {
            args: Prisma.CallUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          deleteMany: {
            args: Prisma.CallDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CallUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CallUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>[]
          }
          upsert: {
            args: Prisma.CallUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          aggregate: {
            args: Prisma.CallAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCall>
          }
          groupBy: {
            args: Prisma.CallGroupByArgs<ExtArgs>
            result: $Utils.Optional<CallGroupByOutputType>[]
          }
          count: {
            args: Prisma.CallCountArgs<ExtArgs>
            result: $Utils.Optional<CallCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
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
    employee?: EmployeeOmit
    person?: PersonOmit
    case?: CaseOmit
    origin?: OriginOmit
    opponent?: OpponentOmit
    blogger?: BloggerOmit
    call?: CallOmit
    appointment?: AppointmentOmit
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
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    authoredBloggers: number
    authoredOrigins: number
    authoredPersons: number
    authoredCases: number
    managedCases: number
    authoredOpponents: number
    authoredCalls: number
    authoredAppointments: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authoredBloggers?: boolean | EmployeeCountOutputTypeCountAuthoredBloggersArgs
    authoredOrigins?: boolean | EmployeeCountOutputTypeCountAuthoredOriginsArgs
    authoredPersons?: boolean | EmployeeCountOutputTypeCountAuthoredPersonsArgs
    authoredCases?: boolean | EmployeeCountOutputTypeCountAuthoredCasesArgs
    managedCases?: boolean | EmployeeCountOutputTypeCountManagedCasesArgs
    authoredOpponents?: boolean | EmployeeCountOutputTypeCountAuthoredOpponentsArgs
    authoredCalls?: boolean | EmployeeCountOutputTypeCountAuthoredCallsArgs
    authoredAppointments?: boolean | EmployeeCountOutputTypeCountAuthoredAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountAuthoredBloggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloggerWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountAuthoredOriginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OriginWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountAuthoredPersonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountAuthoredCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountManagedCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountAuthoredOpponentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpponentWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountAuthoredCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountAuthoredAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    cases: number
    calls: number
    appointments: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | PersonCountOutputTypeCountCasesArgs
    calls?: boolean | PersonCountOutputTypeCountCallsArgs
    appointments?: boolean | PersonCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type CaseCountOutputType
   */

  export type CaseCountOutputType = {
    appointments: number
    calls: number
  }

  export type CaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | CaseCountOutputTypeCountAppointmentsArgs
    calls?: boolean | CaseCountOutputTypeCountCallsArgs
  }

  // Custom InputTypes
  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseCountOutputType
     */
    select?: CaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeCountCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallWhereInput
  }


  /**
   * Count Type OriginCountOutputType
   */

  export type OriginCountOutputType = {
    persons: number
  }

  export type OriginCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persons?: boolean | OriginCountOutputTypeCountPersonsArgs
  }

  // Custom InputTypes
  /**
   * OriginCountOutputType without action
   */
  export type OriginCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginCountOutputType
     */
    select?: OriginCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OriginCountOutputType without action
   */
  export type OriginCountOutputTypeCountPersonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
  }


  /**
   * Count Type OpponentCountOutputType
   */

  export type OpponentCountOutputType = {
    cases: number
  }

  export type OpponentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | OpponentCountOutputTypeCountCasesArgs
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
  export type OpponentCountOutputTypeCountCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    username: string | null
    password: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    username: string | null
    password: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    createdAt: number
    username: number
    password: number
    roles: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    createdAt?: true
    username?: true
    password?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    username?: true
    password?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    createdAt?: true
    username?: true
    password?: true
    roles?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    createdAt: Date
    username: string
    password: string
    roles: $Enums.ROLE[]
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    username?: boolean
    password?: boolean
    roles?: boolean
    authoredBloggers?: boolean | Employee$authoredBloggersArgs<ExtArgs>
    authoredOrigins?: boolean | Employee$authoredOriginsArgs<ExtArgs>
    authoredPersons?: boolean | Employee$authoredPersonsArgs<ExtArgs>
    authoredCases?: boolean | Employee$authoredCasesArgs<ExtArgs>
    managedCases?: boolean | Employee$managedCasesArgs<ExtArgs>
    authoredOpponents?: boolean | Employee$authoredOpponentsArgs<ExtArgs>
    authoredCalls?: boolean | Employee$authoredCallsArgs<ExtArgs>
    authoredAppointments?: boolean | Employee$authoredAppointmentsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    username?: boolean
    password?: boolean
    roles?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    username?: boolean
    password?: boolean
    roles?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    username?: boolean
    password?: boolean
    roles?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "username" | "password" | "roles", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authoredBloggers?: boolean | Employee$authoredBloggersArgs<ExtArgs>
    authoredOrigins?: boolean | Employee$authoredOriginsArgs<ExtArgs>
    authoredPersons?: boolean | Employee$authoredPersonsArgs<ExtArgs>
    authoredCases?: boolean | Employee$authoredCasesArgs<ExtArgs>
    managedCases?: boolean | Employee$managedCasesArgs<ExtArgs>
    authoredOpponents?: boolean | Employee$authoredOpponentsArgs<ExtArgs>
    authoredCalls?: boolean | Employee$authoredCallsArgs<ExtArgs>
    authoredAppointments?: boolean | Employee$authoredAppointmentsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      authoredBloggers: Prisma.$BloggerPayload<ExtArgs>[]
      authoredOrigins: Prisma.$OriginPayload<ExtArgs>[]
      authoredPersons: Prisma.$PersonPayload<ExtArgs>[]
      authoredCases: Prisma.$CasePayload<ExtArgs>[]
      managedCases: Prisma.$CasePayload<ExtArgs>[]
      authoredOpponents: Prisma.$OpponentPayload<ExtArgs>[]
      authoredCalls: Prisma.$CallPayload<ExtArgs>[]
      authoredAppointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      username: string
      password: string
      roles: $Enums.ROLE[]
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authoredBloggers<T extends Employee$authoredBloggersArgs<ExtArgs> = {}>(args?: Subset<T, Employee$authoredBloggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authoredOrigins<T extends Employee$authoredOriginsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$authoredOriginsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authoredPersons<T extends Employee$authoredPersonsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$authoredPersonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authoredCases<T extends Employee$authoredCasesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$authoredCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    managedCases<T extends Employee$managedCasesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$managedCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authoredOpponents<T extends Employee$authoredOpponentsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$authoredOpponentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authoredCalls<T extends Employee$authoredCallsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$authoredCallsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authoredAppointments<T extends Employee$authoredAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$authoredAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'Int'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly username: FieldRef<"Employee", 'String'>
    readonly password: FieldRef<"Employee", 'String'>
    readonly roles: FieldRef<"Employee", 'ROLE[]'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.authoredBloggers
   */
  export type Employee$authoredBloggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Employee.authoredOrigins
   */
  export type Employee$authoredOriginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    where?: OriginWhereInput
    orderBy?: OriginOrderByWithRelationInput | OriginOrderByWithRelationInput[]
    cursor?: OriginWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OriginScalarFieldEnum | OriginScalarFieldEnum[]
  }

  /**
   * Employee.authoredPersons
   */
  export type Employee$authoredPersonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Employee.authoredCases
   */
  export type Employee$authoredCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    cursor?: CaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Employee.managedCases
   */
  export type Employee$managedCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    cursor?: CaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Employee.authoredOpponents
   */
  export type Employee$authoredOpponentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: OpponentOrderByWithRelationInput | OpponentOrderByWithRelationInput[]
    cursor?: OpponentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpponentScalarFieldEnum | OpponentScalarFieldEnum[]
  }

  /**
   * Employee.authoredCalls
   */
  export type Employee$authoredCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    where?: CallWhereInput
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    cursor?: CallWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CallScalarFieldEnum | CallScalarFieldEnum[]
  }

  /**
   * Employee.authoredAppointments
   */
  export type Employee$authoredAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    originId: number | null
  }

  export type PersonSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    originId: number | null
  }

  export type PersonMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    phoneNumber: string | null
    link: string | null
    email: string | null
    homeAddress: string | null
    authorId: number | null
    originId: number | null
    leadStatus: $Enums.LEAD_STATUS | null
  }

  export type PersonMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    phoneNumber: string | null
    link: string | null
    email: string | null
    homeAddress: string | null
    authorId: number | null
    originId: number | null
    leadStatus: $Enums.LEAD_STATUS | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    phoneNumber: number
    link: number
    email: number
    homeAddress: number
    authorId: number
    originId: number
    leadStatus: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    id?: true
    authorId?: true
    originId?: true
  }

  export type PersonSumAggregateInputType = {
    id?: true
    authorId?: true
    originId?: true
  }

  export type PersonMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    phoneNumber?: true
    link?: true
    email?: true
    homeAddress?: true
    authorId?: true
    originId?: true
    leadStatus?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    phoneNumber?: true
    link?: true
    email?: true
    homeAddress?: true
    authorId?: true
    originId?: true
    leadStatus?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    phoneNumber?: true
    link?: true
    email?: true
    homeAddress?: true
    authorId?: true
    originId?: true
    leadStatus?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: number
    createdAt: Date
    name: string
    phoneNumber: string | null
    link: string | null
    email: string | null
    homeAddress: string | null
    authorId: number
    originId: number
    leadStatus: $Enums.LEAD_STATUS
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    phoneNumber?: boolean
    link?: boolean
    email?: boolean
    homeAddress?: boolean
    authorId?: boolean
    originId?: boolean
    leadStatus?: boolean
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    origin?: boolean | OriginDefaultArgs<ExtArgs>
    cases?: boolean | Person$casesArgs<ExtArgs>
    calls?: boolean | Person$callsArgs<ExtArgs>
    appointments?: boolean | Person$appointmentsArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    phoneNumber?: boolean
    link?: boolean
    email?: boolean
    homeAddress?: boolean
    authorId?: boolean
    originId?: boolean
    leadStatus?: boolean
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    origin?: boolean | OriginDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    phoneNumber?: boolean
    link?: boolean
    email?: boolean
    homeAddress?: boolean
    authorId?: boolean
    originId?: boolean
    leadStatus?: boolean
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    origin?: boolean | OriginDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    phoneNumber?: boolean
    link?: boolean
    email?: boolean
    homeAddress?: boolean
    authorId?: boolean
    originId?: boolean
    leadStatus?: boolean
  }

  export type PersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "phoneNumber" | "link" | "email" | "homeAddress" | "authorId" | "originId" | "leadStatus", ExtArgs["result"]["person"]>
  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    origin?: boolean | OriginDefaultArgs<ExtArgs>
    cases?: boolean | Person$casesArgs<ExtArgs>
    calls?: boolean | Person$callsArgs<ExtArgs>
    appointments?: boolean | Person$appointmentsArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    origin?: boolean | OriginDefaultArgs<ExtArgs>
  }
  export type PersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    origin?: boolean | OriginDefaultArgs<ExtArgs>
  }

  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      author: Prisma.$EmployeePayload<ExtArgs>
      origin: Prisma.$OriginPayload<ExtArgs>
      cases: Prisma.$CasePayload<ExtArgs>[]
      calls: Prisma.$CallPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      name: string
      phoneNumber: string | null
      link: string | null
      email: string | null
      homeAddress: string | null
      authorId: number
      originId: number
      leadStatus: $Enums.LEAD_STATUS
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonFindUniqueArgs>(args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonFindFirstArgs>(args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonFindManyArgs>(args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends PersonCreateArgs>(args: SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {PersonCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCreateManyArgs>(args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {PersonCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `id`
     * const personWithIdOnly = await prisma.person.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends PersonDeleteArgs>(args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonUpdateArgs>(args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonDeleteManyArgs>(args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonUpdateManyArgs>(args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {PersonUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `id`
     * const personWithIdOnly = await prisma.person.updateManyAndReturn({
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
    updateManyAndReturn<T extends PersonUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends PersonUpsertArgs>(args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
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
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    origin<T extends OriginDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OriginDefaultArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cases<T extends Person$casesArgs<ExtArgs> = {}>(args?: Subset<T, Person$casesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calls<T extends Person$callsArgs<ExtArgs> = {}>(args?: Subset<T, Person$callsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends Person$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Person$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Person model
   */
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'Int'>
    readonly createdAt: FieldRef<"Person", 'DateTime'>
    readonly name: FieldRef<"Person", 'String'>
    readonly phoneNumber: FieldRef<"Person", 'String'>
    readonly link: FieldRef<"Person", 'String'>
    readonly email: FieldRef<"Person", 'String'>
    readonly homeAddress: FieldRef<"Person", 'String'>
    readonly authorId: FieldRef<"Person", 'Int'>
    readonly originId: FieldRef<"Person", 'Int'>
    readonly leadStatus: FieldRef<"Person", 'LEAD_STATUS'>
  }
    

  // Custom InputTypes
  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }

  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person createManyAndReturn
   */
  export type PersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person updateManyAndReturn
   */
  export type PersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }

  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to delete.
     */
    limit?: number
  }

  /**
   * Person.cases
   */
  export type Person$casesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    cursor?: CaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Person.calls
   */
  export type Person$callsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    where?: CallWhereInput
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    cursor?: CallWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CallScalarFieldEnum | CallScalarFieldEnum[]
  }

  /**
   * Person.appointments
   */
  export type Person$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
  }


  /**
   * Model Case
   */

  export type AggregateCase = {
    _count: CaseCountAggregateOutputType | null
    _avg: CaseAvgAggregateOutputType | null
    _sum: CaseSumAggregateOutputType | null
    _min: CaseMinAggregateOutputType | null
    _max: CaseMaxAggregateOutputType | null
  }

  export type CaseAvgAggregateOutputType = {
    id: number | null
    priceSOM: number | null
    priceUSD: number | null
    personId: number | null
    authorId: number | null
    opponentId: number | null
    managerId: number | null
  }

  export type CaseSumAggregateOutputType = {
    id: number | null
    priceSOM: bigint | null
    priceUSD: bigint | null
    personId: number | null
    authorId: number | null
    opponentId: number | null
    managerId: number | null
  }

  export type CaseMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    caseImportance: $Enums.IMPORTANCE | null
    caseUrgency: $Enums.URGENCY | null
    caseStatus: $Enums.CASE_STATUS | null
    problemShort: string | null
    problemFull: string | null
    nearestTask: string | null
    courtInfo: string | null
    nearestTaskDeadline: Date | null
    timeOfPerformance: Date | null
    assignmentTime: Date | null
    nextDialDate: Date | null
    lastDialDate: Date | null
    refusalReason: $Enums.REFUSAL_REASON | null
    legalAction: $Enums.LEGAL_ACTION | null
    statusInCourt: $Enums.STATUS_IN_COURT | null
    priceSOM: bigint | null
    priceUSD: bigint | null
    personId: number | null
    authorId: number | null
    opponentId: number | null
    managerId: number | null
  }

  export type CaseMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    caseImportance: $Enums.IMPORTANCE | null
    caseUrgency: $Enums.URGENCY | null
    caseStatus: $Enums.CASE_STATUS | null
    problemShort: string | null
    problemFull: string | null
    nearestTask: string | null
    courtInfo: string | null
    nearestTaskDeadline: Date | null
    timeOfPerformance: Date | null
    assignmentTime: Date | null
    nextDialDate: Date | null
    lastDialDate: Date | null
    refusalReason: $Enums.REFUSAL_REASON | null
    legalAction: $Enums.LEGAL_ACTION | null
    statusInCourt: $Enums.STATUS_IN_COURT | null
    priceSOM: bigint | null
    priceUSD: bigint | null
    personId: number | null
    authorId: number | null
    opponentId: number | null
    managerId: number | null
  }

  export type CaseCountAggregateOutputType = {
    id: number
    createdAt: number
    caseImportance: number
    caseUrgency: number
    caseStatus: number
    categories: number
    problemShort: number
    problemFull: number
    nearestTask: number
    courtInfo: number
    nearestTaskDeadline: number
    timeOfPerformance: number
    assignmentTime: number
    nextDialDate: number
    lastDialDate: number
    refusalReason: number
    legalAction: number
    statusInCourt: number
    priceSOM: number
    priceUSD: number
    personId: number
    authorId: number
    opponentId: number
    managerId: number
    _all: number
  }


  export type CaseAvgAggregateInputType = {
    id?: true
    priceSOM?: true
    priceUSD?: true
    personId?: true
    authorId?: true
    opponentId?: true
    managerId?: true
  }

  export type CaseSumAggregateInputType = {
    id?: true
    priceSOM?: true
    priceUSD?: true
    personId?: true
    authorId?: true
    opponentId?: true
    managerId?: true
  }

  export type CaseMinAggregateInputType = {
    id?: true
    createdAt?: true
    caseImportance?: true
    caseUrgency?: true
    caseStatus?: true
    problemShort?: true
    problemFull?: true
    nearestTask?: true
    courtInfo?: true
    nearestTaskDeadline?: true
    timeOfPerformance?: true
    assignmentTime?: true
    nextDialDate?: true
    lastDialDate?: true
    refusalReason?: true
    legalAction?: true
    statusInCourt?: true
    priceSOM?: true
    priceUSD?: true
    personId?: true
    authorId?: true
    opponentId?: true
    managerId?: true
  }

  export type CaseMaxAggregateInputType = {
    id?: true
    createdAt?: true
    caseImportance?: true
    caseUrgency?: true
    caseStatus?: true
    problemShort?: true
    problemFull?: true
    nearestTask?: true
    courtInfo?: true
    nearestTaskDeadline?: true
    timeOfPerformance?: true
    assignmentTime?: true
    nextDialDate?: true
    lastDialDate?: true
    refusalReason?: true
    legalAction?: true
    statusInCourt?: true
    priceSOM?: true
    priceUSD?: true
    personId?: true
    authorId?: true
    opponentId?: true
    managerId?: true
  }

  export type CaseCountAggregateInputType = {
    id?: true
    createdAt?: true
    caseImportance?: true
    caseUrgency?: true
    caseStatus?: true
    categories?: true
    problemShort?: true
    problemFull?: true
    nearestTask?: true
    courtInfo?: true
    nearestTaskDeadline?: true
    timeOfPerformance?: true
    assignmentTime?: true
    nextDialDate?: true
    lastDialDate?: true
    refusalReason?: true
    legalAction?: true
    statusInCourt?: true
    priceSOM?: true
    priceUSD?: true
    personId?: true
    authorId?: true
    opponentId?: true
    managerId?: true
    _all?: true
  }

  export type CaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Case to aggregate.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cases
    **/
    _count?: true | CaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaseMaxAggregateInputType
  }

  export type GetCaseAggregateType<T extends CaseAggregateArgs> = {
        [P in keyof T & keyof AggregateCase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCase[P]>
      : GetScalarType<T[P], AggregateCase[P]>
  }




  export type CaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithAggregationInput | CaseOrderByWithAggregationInput[]
    by: CaseScalarFieldEnum[] | CaseScalarFieldEnum
    having?: CaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaseCountAggregateInputType | true
    _avg?: CaseAvgAggregateInputType
    _sum?: CaseSumAggregateInputType
    _min?: CaseMinAggregateInputType
    _max?: CaseMaxAggregateInputType
  }

  export type CaseGroupByOutputType = {
    id: number
    createdAt: Date
    caseImportance: $Enums.IMPORTANCE
    caseUrgency: $Enums.URGENCY
    caseStatus: $Enums.CASE_STATUS
    categories: $Enums.CASE_CATEGORY[]
    problemShort: string | null
    problemFull: string | null
    nearestTask: string | null
    courtInfo: string | null
    nearestTaskDeadline: Date | null
    timeOfPerformance: Date | null
    assignmentTime: Date | null
    nextDialDate: Date | null
    lastDialDate: Date | null
    refusalReason: $Enums.REFUSAL_REASON | null
    legalAction: $Enums.LEGAL_ACTION | null
    statusInCourt: $Enums.STATUS_IN_COURT | null
    priceSOM: bigint | null
    priceUSD: bigint | null
    personId: number
    authorId: number
    opponentId: number | null
    managerId: number | null
    _count: CaseCountAggregateOutputType | null
    _avg: CaseAvgAggregateOutputType | null
    _sum: CaseSumAggregateOutputType | null
    _min: CaseMinAggregateOutputType | null
    _max: CaseMaxAggregateOutputType | null
  }

  type GetCaseGroupByPayload<T extends CaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaseGroupByOutputType[P]>
            : GetScalarType<T[P], CaseGroupByOutputType[P]>
        }
      >
    >


  export type CaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    caseImportance?: boolean
    caseUrgency?: boolean
    caseStatus?: boolean
    categories?: boolean
    problemShort?: boolean
    problemFull?: boolean
    nearestTask?: boolean
    courtInfo?: boolean
    nearestTaskDeadline?: boolean
    timeOfPerformance?: boolean
    assignmentTime?: boolean
    nextDialDate?: boolean
    lastDialDate?: boolean
    refusalReason?: boolean
    legalAction?: boolean
    statusInCourt?: boolean
    priceSOM?: boolean
    priceUSD?: boolean
    personId?: boolean
    authorId?: boolean
    opponentId?: boolean
    managerId?: boolean
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    manager?: boolean | Case$managerArgs<ExtArgs>
    opponent?: boolean | Case$opponentArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
    appointments?: boolean | Case$appointmentsArgs<ExtArgs>
    calls?: boolean | Case$callsArgs<ExtArgs>
    _count?: boolean | CaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["case"]>

  export type CaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    caseImportance?: boolean
    caseUrgency?: boolean
    caseStatus?: boolean
    categories?: boolean
    problemShort?: boolean
    problemFull?: boolean
    nearestTask?: boolean
    courtInfo?: boolean
    nearestTaskDeadline?: boolean
    timeOfPerformance?: boolean
    assignmentTime?: boolean
    nextDialDate?: boolean
    lastDialDate?: boolean
    refusalReason?: boolean
    legalAction?: boolean
    statusInCourt?: boolean
    priceSOM?: boolean
    priceUSD?: boolean
    personId?: boolean
    authorId?: boolean
    opponentId?: boolean
    managerId?: boolean
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    manager?: boolean | Case$managerArgs<ExtArgs>
    opponent?: boolean | Case$opponentArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["case"]>

  export type CaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    caseImportance?: boolean
    caseUrgency?: boolean
    caseStatus?: boolean
    categories?: boolean
    problemShort?: boolean
    problemFull?: boolean
    nearestTask?: boolean
    courtInfo?: boolean
    nearestTaskDeadline?: boolean
    timeOfPerformance?: boolean
    assignmentTime?: boolean
    nextDialDate?: boolean
    lastDialDate?: boolean
    refusalReason?: boolean
    legalAction?: boolean
    statusInCourt?: boolean
    priceSOM?: boolean
    priceUSD?: boolean
    personId?: boolean
    authorId?: boolean
    opponentId?: boolean
    managerId?: boolean
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    manager?: boolean | Case$managerArgs<ExtArgs>
    opponent?: boolean | Case$opponentArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["case"]>

  export type CaseSelectScalar = {
    id?: boolean
    createdAt?: boolean
    caseImportance?: boolean
    caseUrgency?: boolean
    caseStatus?: boolean
    categories?: boolean
    problemShort?: boolean
    problemFull?: boolean
    nearestTask?: boolean
    courtInfo?: boolean
    nearestTaskDeadline?: boolean
    timeOfPerformance?: boolean
    assignmentTime?: boolean
    nextDialDate?: boolean
    lastDialDate?: boolean
    refusalReason?: boolean
    legalAction?: boolean
    statusInCourt?: boolean
    priceSOM?: boolean
    priceUSD?: boolean
    personId?: boolean
    authorId?: boolean
    opponentId?: boolean
    managerId?: boolean
  }

  export type CaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "caseImportance" | "caseUrgency" | "caseStatus" | "categories" | "problemShort" | "problemFull" | "nearestTask" | "courtInfo" | "nearestTaskDeadline" | "timeOfPerformance" | "assignmentTime" | "nextDialDate" | "lastDialDate" | "refusalReason" | "legalAction" | "statusInCourt" | "priceSOM" | "priceUSD" | "personId" | "authorId" | "opponentId" | "managerId", ExtArgs["result"]["case"]>
  export type CaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    manager?: boolean | Case$managerArgs<ExtArgs>
    opponent?: boolean | Case$opponentArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
    appointments?: boolean | Case$appointmentsArgs<ExtArgs>
    calls?: boolean | Case$callsArgs<ExtArgs>
    _count?: boolean | CaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    manager?: boolean | Case$managerArgs<ExtArgs>
    opponent?: boolean | Case$opponentArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type CaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    manager?: boolean | Case$managerArgs<ExtArgs>
    opponent?: boolean | Case$opponentArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $CasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Case"
    objects: {
      author: Prisma.$EmployeePayload<ExtArgs>
      manager: Prisma.$EmployeePayload<ExtArgs> | null
      opponent: Prisma.$OpponentPayload<ExtArgs> | null
      person: Prisma.$PersonPayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      calls: Prisma.$CallPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      caseImportance: $Enums.IMPORTANCE
      caseUrgency: $Enums.URGENCY
      caseStatus: $Enums.CASE_STATUS
      categories: $Enums.CASE_CATEGORY[]
      problemShort: string | null
      problemFull: string | null
      nearestTask: string | null
      courtInfo: string | null
      nearestTaskDeadline: Date | null
      timeOfPerformance: Date | null
      assignmentTime: Date | null
      nextDialDate: Date | null
      lastDialDate: Date | null
      refusalReason: $Enums.REFUSAL_REASON | null
      legalAction: $Enums.LEGAL_ACTION | null
      statusInCourt: $Enums.STATUS_IN_COURT | null
      priceSOM: bigint | null
      priceUSD: bigint | null
      personId: number
      authorId: number
      opponentId: number | null
      managerId: number | null
    }, ExtArgs["result"]["case"]>
    composites: {}
  }

  type CaseGetPayload<S extends boolean | null | undefined | CaseDefaultArgs> = $Result.GetResult<Prisma.$CasePayload, S>

  type CaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaseCountAggregateInputType | true
    }

  export interface CaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Case'], meta: { name: 'Case' } }
    /**
     * Find zero or one Case that matches the filter.
     * @param {CaseFindUniqueArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaseFindUniqueArgs>(args: SelectSubset<T, CaseFindUniqueArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Case that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaseFindUniqueOrThrowArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaseFindUniqueOrThrowArgs>(args: SelectSubset<T, CaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Case that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindFirstArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaseFindFirstArgs>(args?: SelectSubset<T, CaseFindFirstArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Case that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindFirstOrThrowArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaseFindFirstOrThrowArgs>(args?: SelectSubset<T, CaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cases
     * const cases = await prisma.case.findMany()
     * 
     * // Get first 10 Cases
     * const cases = await prisma.case.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caseWithIdOnly = await prisma.case.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaseFindManyArgs>(args?: SelectSubset<T, CaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Case.
     * @param {CaseCreateArgs} args - Arguments to create a Case.
     * @example
     * // Create one Case
     * const Case = await prisma.case.create({
     *   data: {
     *     // ... data to create a Case
     *   }
     * })
     * 
     */
    create<T extends CaseCreateArgs>(args: SelectSubset<T, CaseCreateArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cases.
     * @param {CaseCreateManyArgs} args - Arguments to create many Cases.
     * @example
     * // Create many Cases
     * const case = await prisma.case.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaseCreateManyArgs>(args?: SelectSubset<T, CaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cases and returns the data saved in the database.
     * @param {CaseCreateManyAndReturnArgs} args - Arguments to create many Cases.
     * @example
     * // Create many Cases
     * const case = await prisma.case.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cases and only return the `id`
     * const caseWithIdOnly = await prisma.case.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaseCreateManyAndReturnArgs>(args?: SelectSubset<T, CaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Case.
     * @param {CaseDeleteArgs} args - Arguments to delete one Case.
     * @example
     * // Delete one Case
     * const Case = await prisma.case.delete({
     *   where: {
     *     // ... filter to delete one Case
     *   }
     * })
     * 
     */
    delete<T extends CaseDeleteArgs>(args: SelectSubset<T, CaseDeleteArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Case.
     * @param {CaseUpdateArgs} args - Arguments to update one Case.
     * @example
     * // Update one Case
     * const case = await prisma.case.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaseUpdateArgs>(args: SelectSubset<T, CaseUpdateArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cases.
     * @param {CaseDeleteManyArgs} args - Arguments to filter Cases to delete.
     * @example
     * // Delete a few Cases
     * const { count } = await prisma.case.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaseDeleteManyArgs>(args?: SelectSubset<T, CaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cases
     * const case = await prisma.case.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaseUpdateManyArgs>(args: SelectSubset<T, CaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cases and returns the data updated in the database.
     * @param {CaseUpdateManyAndReturnArgs} args - Arguments to update many Cases.
     * @example
     * // Update many Cases
     * const case = await prisma.case.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cases and only return the `id`
     * const caseWithIdOnly = await prisma.case.updateManyAndReturn({
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
    updateManyAndReturn<T extends CaseUpdateManyAndReturnArgs>(args: SelectSubset<T, CaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Case.
     * @param {CaseUpsertArgs} args - Arguments to update or create a Case.
     * @example
     * // Update or create a Case
     * const case = await prisma.case.upsert({
     *   create: {
     *     // ... data to create a Case
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Case we want to update
     *   }
     * })
     */
    upsert<T extends CaseUpsertArgs>(args: SelectSubset<T, CaseUpsertArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseCountArgs} args - Arguments to filter Cases to count.
     * @example
     * // Count the number of Cases
     * const count = await prisma.case.count({
     *   where: {
     *     // ... the filter for the Cases we want to count
     *   }
     * })
    **/
    count<T extends CaseCountArgs>(
      args?: Subset<T, CaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CaseAggregateArgs>(args: Subset<T, CaseAggregateArgs>): Prisma.PrismaPromise<GetCaseAggregateType<T>>

    /**
     * Group by Case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseGroupByArgs} args - Group by arguments.
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
      T extends CaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaseGroupByArgs['orderBy'] }
        : { orderBy?: CaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Case model
   */
  readonly fields: CaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Case.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    manager<T extends Case$managerArgs<ExtArgs> = {}>(args?: Subset<T, Case$managerArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    opponent<T extends Case$opponentArgs<ExtArgs> = {}>(args?: Subset<T, Case$opponentArgs<ExtArgs>>): Prisma__OpponentClient<$Result.GetResult<Prisma.$OpponentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends Case$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Case$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calls<T extends Case$callsArgs<ExtArgs> = {}>(args?: Subset<T, Case$callsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Case model
   */
  interface CaseFieldRefs {
    readonly id: FieldRef<"Case", 'Int'>
    readonly createdAt: FieldRef<"Case", 'DateTime'>
    readonly caseImportance: FieldRef<"Case", 'IMPORTANCE'>
    readonly caseUrgency: FieldRef<"Case", 'URGENCY'>
    readonly caseStatus: FieldRef<"Case", 'CASE_STATUS'>
    readonly categories: FieldRef<"Case", 'CASE_CATEGORY[]'>
    readonly problemShort: FieldRef<"Case", 'String'>
    readonly problemFull: FieldRef<"Case", 'String'>
    readonly nearestTask: FieldRef<"Case", 'String'>
    readonly courtInfo: FieldRef<"Case", 'String'>
    readonly nearestTaskDeadline: FieldRef<"Case", 'DateTime'>
    readonly timeOfPerformance: FieldRef<"Case", 'DateTime'>
    readonly assignmentTime: FieldRef<"Case", 'DateTime'>
    readonly nextDialDate: FieldRef<"Case", 'DateTime'>
    readonly lastDialDate: FieldRef<"Case", 'DateTime'>
    readonly refusalReason: FieldRef<"Case", 'REFUSAL_REASON'>
    readonly legalAction: FieldRef<"Case", 'LEGAL_ACTION'>
    readonly statusInCourt: FieldRef<"Case", 'STATUS_IN_COURT'>
    readonly priceSOM: FieldRef<"Case", 'BigInt'>
    readonly priceUSD: FieldRef<"Case", 'BigInt'>
    readonly personId: FieldRef<"Case", 'Int'>
    readonly authorId: FieldRef<"Case", 'Int'>
    readonly opponentId: FieldRef<"Case", 'Int'>
    readonly managerId: FieldRef<"Case", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Case findUnique
   */
  export type CaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case findUniqueOrThrow
   */
  export type CaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case findFirst
   */
  export type CaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cases.
     */
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case findFirstOrThrow
   */
  export type CaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cases.
     */
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case findMany
   */
  export type CaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Cases to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case create
   */
  export type CaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Case.
     */
    data: XOR<CaseCreateInput, CaseUncheckedCreateInput>
  }

  /**
   * Case createMany
   */
  export type CaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cases.
     */
    data: CaseCreateManyInput | CaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Case createManyAndReturn
   */
  export type CaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * The data used to create many Cases.
     */
    data: CaseCreateManyInput | CaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Case update
   */
  export type CaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Case.
     */
    data: XOR<CaseUpdateInput, CaseUncheckedUpdateInput>
    /**
     * Choose, which Case to update.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case updateMany
   */
  export type CaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cases.
     */
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyInput>
    /**
     * Filter which Cases to update
     */
    where?: CaseWhereInput
    /**
     * Limit how many Cases to update.
     */
    limit?: number
  }

  /**
   * Case updateManyAndReturn
   */
  export type CaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * The data used to update Cases.
     */
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyInput>
    /**
     * Filter which Cases to update
     */
    where?: CaseWhereInput
    /**
     * Limit how many Cases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Case upsert
   */
  export type CaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Case to update in case it exists.
     */
    where: CaseWhereUniqueInput
    /**
     * In case the Case found by the `where` argument doesn't exist, create a new Case with this data.
     */
    create: XOR<CaseCreateInput, CaseUncheckedCreateInput>
    /**
     * In case the Case was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaseUpdateInput, CaseUncheckedUpdateInput>
  }

  /**
   * Case delete
   */
  export type CaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter which Case to delete.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case deleteMany
   */
  export type CaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cases to delete
     */
    where?: CaseWhereInput
    /**
     * Limit how many Cases to delete.
     */
    limit?: number
  }

  /**
   * Case.manager
   */
  export type Case$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Case.opponent
   */
  export type Case$opponentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Case.appointments
   */
  export type Case$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Case.calls
   */
  export type Case$callsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    where?: CallWhereInput
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    cursor?: CallWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CallScalarFieldEnum | CallScalarFieldEnum[]
  }

  /**
   * Case without action
   */
  export type CaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
  }


  /**
   * Model Origin
   */

  export type AggregateOrigin = {
    _count: OriginCountAggregateOutputType | null
    _avg: OriginAvgAggregateOutputType | null
    _sum: OriginSumAggregateOutputType | null
    _min: OriginMinAggregateOutputType | null
    _max: OriginMaxAggregateOutputType | null
  }

  export type OriginAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type OriginSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type OriginMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    link: string | null
    authorId: number | null
  }

  export type OriginMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    link: string | null
    authorId: number | null
  }

  export type OriginCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    link: number
    categories: number
    authorId: number
    _all: number
  }


  export type OriginAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type OriginSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type OriginMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    link?: true
    authorId?: true
  }

  export type OriginMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    link?: true
    authorId?: true
  }

  export type OriginCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    link?: true
    categories?: true
    authorId?: true
    _all?: true
  }

  export type OriginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Origin to aggregate.
     */
    where?: OriginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Origins to fetch.
     */
    orderBy?: OriginOrderByWithRelationInput | OriginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OriginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Origins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Origins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Origins
    **/
    _count?: true | OriginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OriginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OriginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OriginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OriginMaxAggregateInputType
  }

  export type GetOriginAggregateType<T extends OriginAggregateArgs> = {
        [P in keyof T & keyof AggregateOrigin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrigin[P]>
      : GetScalarType<T[P], AggregateOrigin[P]>
  }




  export type OriginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OriginWhereInput
    orderBy?: OriginOrderByWithAggregationInput | OriginOrderByWithAggregationInput[]
    by: OriginScalarFieldEnum[] | OriginScalarFieldEnum
    having?: OriginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OriginCountAggregateInputType | true
    _avg?: OriginAvgAggregateInputType
    _sum?: OriginSumAggregateInputType
    _min?: OriginMinAggregateInputType
    _max?: OriginMaxAggregateInputType
  }

  export type OriginGroupByOutputType = {
    id: number
    createdAt: Date
    title: string
    link: string | null
    categories: $Enums.CASE_CATEGORY[]
    authorId: number
    _count: OriginCountAggregateOutputType | null
    _avg: OriginAvgAggregateOutputType | null
    _sum: OriginSumAggregateOutputType | null
    _min: OriginMinAggregateOutputType | null
    _max: OriginMaxAggregateOutputType | null
  }

  type GetOriginGroupByPayload<T extends OriginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OriginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OriginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OriginGroupByOutputType[P]>
            : GetScalarType<T[P], OriginGroupByOutputType[P]>
        }
      >
    >


  export type OriginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    link?: boolean
    categories?: boolean
    authorId?: boolean
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    persons?: boolean | Origin$personsArgs<ExtArgs>
    _count?: boolean | OriginCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["origin"]>

  export type OriginSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    link?: boolean
    categories?: boolean
    authorId?: boolean
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["origin"]>

  export type OriginSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    link?: boolean
    categories?: boolean
    authorId?: boolean
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["origin"]>

  export type OriginSelectScalar = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
    link?: boolean
    categories?: boolean
    authorId?: boolean
  }

  export type OriginOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "title" | "link" | "categories" | "authorId", ExtArgs["result"]["origin"]>
  export type OriginInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    persons?: boolean | Origin$personsArgs<ExtArgs>
    _count?: boolean | OriginCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OriginIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type OriginIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $OriginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Origin"
    objects: {
      author: Prisma.$EmployeePayload<ExtArgs>
      persons: Prisma.$PersonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      title: string
      link: string | null
      categories: $Enums.CASE_CATEGORY[]
      authorId: number
    }, ExtArgs["result"]["origin"]>
    composites: {}
  }

  type OriginGetPayload<S extends boolean | null | undefined | OriginDefaultArgs> = $Result.GetResult<Prisma.$OriginPayload, S>

  type OriginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OriginFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OriginCountAggregateInputType | true
    }

  export interface OriginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Origin'], meta: { name: 'Origin' } }
    /**
     * Find zero or one Origin that matches the filter.
     * @param {OriginFindUniqueArgs} args - Arguments to find a Origin
     * @example
     * // Get one Origin
     * const origin = await prisma.origin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OriginFindUniqueArgs>(args: SelectSubset<T, OriginFindUniqueArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Origin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OriginFindUniqueOrThrowArgs} args - Arguments to find a Origin
     * @example
     * // Get one Origin
     * const origin = await prisma.origin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OriginFindUniqueOrThrowArgs>(args: SelectSubset<T, OriginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Origin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginFindFirstArgs} args - Arguments to find a Origin
     * @example
     * // Get one Origin
     * const origin = await prisma.origin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OriginFindFirstArgs>(args?: SelectSubset<T, OriginFindFirstArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Origin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginFindFirstOrThrowArgs} args - Arguments to find a Origin
     * @example
     * // Get one Origin
     * const origin = await prisma.origin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OriginFindFirstOrThrowArgs>(args?: SelectSubset<T, OriginFindFirstOrThrowArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Origins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Origins
     * const origins = await prisma.origin.findMany()
     * 
     * // Get first 10 Origins
     * const origins = await prisma.origin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const originWithIdOnly = await prisma.origin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OriginFindManyArgs>(args?: SelectSubset<T, OriginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Origin.
     * @param {OriginCreateArgs} args - Arguments to create a Origin.
     * @example
     * // Create one Origin
     * const Origin = await prisma.origin.create({
     *   data: {
     *     // ... data to create a Origin
     *   }
     * })
     * 
     */
    create<T extends OriginCreateArgs>(args: SelectSubset<T, OriginCreateArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Origins.
     * @param {OriginCreateManyArgs} args - Arguments to create many Origins.
     * @example
     * // Create many Origins
     * const origin = await prisma.origin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OriginCreateManyArgs>(args?: SelectSubset<T, OriginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Origins and returns the data saved in the database.
     * @param {OriginCreateManyAndReturnArgs} args - Arguments to create many Origins.
     * @example
     * // Create many Origins
     * const origin = await prisma.origin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Origins and only return the `id`
     * const originWithIdOnly = await prisma.origin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OriginCreateManyAndReturnArgs>(args?: SelectSubset<T, OriginCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Origin.
     * @param {OriginDeleteArgs} args - Arguments to delete one Origin.
     * @example
     * // Delete one Origin
     * const Origin = await prisma.origin.delete({
     *   where: {
     *     // ... filter to delete one Origin
     *   }
     * })
     * 
     */
    delete<T extends OriginDeleteArgs>(args: SelectSubset<T, OriginDeleteArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Origin.
     * @param {OriginUpdateArgs} args - Arguments to update one Origin.
     * @example
     * // Update one Origin
     * const origin = await prisma.origin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OriginUpdateArgs>(args: SelectSubset<T, OriginUpdateArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Origins.
     * @param {OriginDeleteManyArgs} args - Arguments to filter Origins to delete.
     * @example
     * // Delete a few Origins
     * const { count } = await prisma.origin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OriginDeleteManyArgs>(args?: SelectSubset<T, OriginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Origins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Origins
     * const origin = await prisma.origin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OriginUpdateManyArgs>(args: SelectSubset<T, OriginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Origins and returns the data updated in the database.
     * @param {OriginUpdateManyAndReturnArgs} args - Arguments to update many Origins.
     * @example
     * // Update many Origins
     * const origin = await prisma.origin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Origins and only return the `id`
     * const originWithIdOnly = await prisma.origin.updateManyAndReturn({
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
    updateManyAndReturn<T extends OriginUpdateManyAndReturnArgs>(args: SelectSubset<T, OriginUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Origin.
     * @param {OriginUpsertArgs} args - Arguments to update or create a Origin.
     * @example
     * // Update or create a Origin
     * const origin = await prisma.origin.upsert({
     *   create: {
     *     // ... data to create a Origin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Origin we want to update
     *   }
     * })
     */
    upsert<T extends OriginUpsertArgs>(args: SelectSubset<T, OriginUpsertArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Origins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginCountArgs} args - Arguments to filter Origins to count.
     * @example
     * // Count the number of Origins
     * const count = await prisma.origin.count({
     *   where: {
     *     // ... the filter for the Origins we want to count
     *   }
     * })
    **/
    count<T extends OriginCountArgs>(
      args?: Subset<T, OriginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OriginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Origin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OriginAggregateArgs>(args: Subset<T, OriginAggregateArgs>): Prisma.PrismaPromise<GetOriginAggregateType<T>>

    /**
     * Group by Origin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginGroupByArgs} args - Group by arguments.
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
      T extends OriginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OriginGroupByArgs['orderBy'] }
        : { orderBy?: OriginGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OriginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOriginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Origin model
   */
  readonly fields: OriginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Origin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OriginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    persons<T extends Origin$personsArgs<ExtArgs> = {}>(args?: Subset<T, Origin$personsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Origin model
   */
  interface OriginFieldRefs {
    readonly id: FieldRef<"Origin", 'Int'>
    readonly createdAt: FieldRef<"Origin", 'DateTime'>
    readonly title: FieldRef<"Origin", 'String'>
    readonly link: FieldRef<"Origin", 'String'>
    readonly categories: FieldRef<"Origin", 'CASE_CATEGORY[]'>
    readonly authorId: FieldRef<"Origin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Origin findUnique
   */
  export type OriginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter, which Origin to fetch.
     */
    where: OriginWhereUniqueInput
  }

  /**
   * Origin findUniqueOrThrow
   */
  export type OriginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter, which Origin to fetch.
     */
    where: OriginWhereUniqueInput
  }

  /**
   * Origin findFirst
   */
  export type OriginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter, which Origin to fetch.
     */
    where?: OriginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Origins to fetch.
     */
    orderBy?: OriginOrderByWithRelationInput | OriginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Origins.
     */
    cursor?: OriginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Origins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Origins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Origins.
     */
    distinct?: OriginScalarFieldEnum | OriginScalarFieldEnum[]
  }

  /**
   * Origin findFirstOrThrow
   */
  export type OriginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter, which Origin to fetch.
     */
    where?: OriginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Origins to fetch.
     */
    orderBy?: OriginOrderByWithRelationInput | OriginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Origins.
     */
    cursor?: OriginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Origins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Origins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Origins.
     */
    distinct?: OriginScalarFieldEnum | OriginScalarFieldEnum[]
  }

  /**
   * Origin findMany
   */
  export type OriginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter, which Origins to fetch.
     */
    where?: OriginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Origins to fetch.
     */
    orderBy?: OriginOrderByWithRelationInput | OriginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Origins.
     */
    cursor?: OriginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Origins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Origins.
     */
    skip?: number
    distinct?: OriginScalarFieldEnum | OriginScalarFieldEnum[]
  }

  /**
   * Origin create
   */
  export type OriginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * The data needed to create a Origin.
     */
    data: XOR<OriginCreateInput, OriginUncheckedCreateInput>
  }

  /**
   * Origin createMany
   */
  export type OriginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Origins.
     */
    data: OriginCreateManyInput | OriginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Origin createManyAndReturn
   */
  export type OriginCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * The data used to create many Origins.
     */
    data: OriginCreateManyInput | OriginCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Origin update
   */
  export type OriginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * The data needed to update a Origin.
     */
    data: XOR<OriginUpdateInput, OriginUncheckedUpdateInput>
    /**
     * Choose, which Origin to update.
     */
    where: OriginWhereUniqueInput
  }

  /**
   * Origin updateMany
   */
  export type OriginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Origins.
     */
    data: XOR<OriginUpdateManyMutationInput, OriginUncheckedUpdateManyInput>
    /**
     * Filter which Origins to update
     */
    where?: OriginWhereInput
    /**
     * Limit how many Origins to update.
     */
    limit?: number
  }

  /**
   * Origin updateManyAndReturn
   */
  export type OriginUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * The data used to update Origins.
     */
    data: XOR<OriginUpdateManyMutationInput, OriginUncheckedUpdateManyInput>
    /**
     * Filter which Origins to update
     */
    where?: OriginWhereInput
    /**
     * Limit how many Origins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Origin upsert
   */
  export type OriginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * The filter to search for the Origin to update in case it exists.
     */
    where: OriginWhereUniqueInput
    /**
     * In case the Origin found by the `where` argument doesn't exist, create a new Origin with this data.
     */
    create: XOR<OriginCreateInput, OriginUncheckedCreateInput>
    /**
     * In case the Origin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OriginUpdateInput, OriginUncheckedUpdateInput>
  }

  /**
   * Origin delete
   */
  export type OriginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter which Origin to delete.
     */
    where: OriginWhereUniqueInput
  }

  /**
   * Origin deleteMany
   */
  export type OriginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Origins to delete
     */
    where?: OriginWhereInput
    /**
     * Limit how many Origins to delete.
     */
    limit?: number
  }

  /**
   * Origin.persons
   */
  export type Origin$personsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Origin without action
   */
  export type OriginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
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
    authorId: number | null
  }

  export type OpponentSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type OpponentMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    link: string | null
    info: string | null
    authorId: number | null
  }

  export type OpponentMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    link: string | null
    info: string | null
    authorId: number | null
  }

  export type OpponentCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    link: number
    info: number
    authorId: number
    _all: number
  }


  export type OpponentAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type OpponentSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type OpponentMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    link?: true
    info?: true
    authorId?: true
  }

  export type OpponentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    link?: true
    info?: true
    authorId?: true
  }

  export type OpponentCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    link?: true
    info?: true
    authorId?: true
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
    createdAt: Date
    name: string
    link: string | null
    info: string | null
    authorId: number
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
    createdAt?: boolean
    name?: boolean
    link?: boolean
    info?: boolean
    authorId?: boolean
    cases?: boolean | Opponent$casesArgs<ExtArgs>
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    _count?: boolean | OpponentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opponent"]>

  export type OpponentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    link?: boolean
    info?: boolean
    authorId?: boolean
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opponent"]>

  export type OpponentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    link?: boolean
    info?: boolean
    authorId?: boolean
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opponent"]>

  export type OpponentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    link?: boolean
    info?: boolean
    authorId?: boolean
  }

  export type OpponentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "link" | "info" | "authorId", ExtArgs["result"]["opponent"]>
  export type OpponentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | Opponent$casesArgs<ExtArgs>
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    _count?: boolean | OpponentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OpponentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type OpponentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $OpponentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Opponent"
    objects: {
      cases: Prisma.$CasePayload<ExtArgs>[]
      author: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      name: string
      link: string | null
      info: string | null
      authorId: number
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
    cases<T extends Opponent$casesArgs<ExtArgs> = {}>(args?: Subset<T, Opponent$casesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly createdAt: FieldRef<"Opponent", 'DateTime'>
    readonly name: FieldRef<"Opponent", 'String'>
    readonly link: FieldRef<"Opponent", 'String'>
    readonly info: FieldRef<"Opponent", 'String'>
    readonly authorId: FieldRef<"Opponent", 'Int'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Opponent.cases
   */
  export type Opponent$casesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    cursor?: CaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
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
    subscribersCount: bigint | null
    priceSOM: bigint | null
    priceUSD: bigint | null
    authorId: number | null
  }

  export type BloggerMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    link: string | null
    phoneNumber: string | null
    email: string | null
    info: string | null
    subscribersCount: bigint | null
    priceSOM: bigint | null
    priceUSD: bigint | null
    authorId: number | null
  }

  export type BloggerMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    link: string | null
    phoneNumber: string | null
    email: string | null
    info: string | null
    subscribersCount: bigint | null
    priceSOM: bigint | null
    priceUSD: bigint | null
    authorId: number | null
  }

  export type BloggerCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    link: number
    phoneNumber: number
    email: number
    info: number
    subscribersCount: number
    priceSOM: number
    priceUSD: number
    authorId: number
    categories: number
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
    createdAt?: true
    name?: true
    link?: true
    phoneNumber?: true
    email?: true
    info?: true
    subscribersCount?: true
    priceSOM?: true
    priceUSD?: true
    authorId?: true
  }

  export type BloggerMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    link?: true
    phoneNumber?: true
    email?: true
    info?: true
    subscribersCount?: true
    priceSOM?: true
    priceUSD?: true
    authorId?: true
  }

  export type BloggerCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    link?: true
    phoneNumber?: true
    email?: true
    info?: true
    subscribersCount?: true
    priceSOM?: true
    priceUSD?: true
    authorId?: true
    categories?: true
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
    createdAt: Date
    name: string
    link: string
    phoneNumber: string | null
    email: string | null
    info: string | null
    subscribersCount: bigint
    priceSOM: bigint | null
    priceUSD: bigint | null
    authorId: number
    categories: $Enums.CASE_CATEGORY[]
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
    createdAt?: boolean
    name?: boolean
    link?: boolean
    phoneNumber?: boolean
    email?: boolean
    info?: boolean
    subscribersCount?: boolean
    priceSOM?: boolean
    priceUSD?: boolean
    authorId?: boolean
    categories?: boolean
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogger"]>

  export type BloggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    link?: boolean
    phoneNumber?: boolean
    email?: boolean
    info?: boolean
    subscribersCount?: boolean
    priceSOM?: boolean
    priceUSD?: boolean
    authorId?: boolean
    categories?: boolean
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogger"]>

  export type BloggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    link?: boolean
    phoneNumber?: boolean
    email?: boolean
    info?: boolean
    subscribersCount?: boolean
    priceSOM?: boolean
    priceUSD?: boolean
    authorId?: boolean
    categories?: boolean
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogger"]>

  export type BloggerSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    link?: boolean
    phoneNumber?: boolean
    email?: boolean
    info?: boolean
    subscribersCount?: boolean
    priceSOM?: boolean
    priceUSD?: boolean
    authorId?: boolean
    categories?: boolean
  }

  export type BloggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "link" | "phoneNumber" | "email" | "info" | "subscribersCount" | "priceSOM" | "priceUSD" | "authorId" | "categories", ExtArgs["result"]["blogger"]>
  export type BloggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type BloggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type BloggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $BloggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blogger"
    objects: {
      author: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      name: string
      link: string
      phoneNumber: string | null
      email: string | null
      info: string | null
      subscribersCount: bigint
      priceSOM: bigint | null
      priceUSD: bigint | null
      authorId: number
      categories: $Enums.CASE_CATEGORY[]
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
    author<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly createdAt: FieldRef<"Blogger", 'DateTime'>
    readonly name: FieldRef<"Blogger", 'String'>
    readonly link: FieldRef<"Blogger", 'String'>
    readonly phoneNumber: FieldRef<"Blogger", 'String'>
    readonly email: FieldRef<"Blogger", 'String'>
    readonly info: FieldRef<"Blogger", 'String'>
    readonly subscribersCount: FieldRef<"Blogger", 'BigInt'>
    readonly priceSOM: FieldRef<"Blogger", 'BigInt'>
    readonly priceUSD: FieldRef<"Blogger", 'BigInt'>
    readonly authorId: FieldRef<"Blogger", 'Int'>
    readonly categories: FieldRef<"Blogger", 'CASE_CATEGORY[]'>
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
   * Model Call
   */

  export type AggregateCall = {
    _count: CallCountAggregateOutputType | null
    _avg: CallAvgAggregateOutputType | null
    _sum: CallSumAggregateOutputType | null
    _min: CallMinAggregateOutputType | null
    _max: CallMaxAggregateOutputType | null
  }

  export type CallAvgAggregateOutputType = {
    id: number | null
    caseId: number | null
    personId: number | null
    authorId: number | null
  }

  export type CallSumAggregateOutputType = {
    id: number | null
    caseId: number | null
    personId: number | null
    authorId: number | null
  }

  export type CallMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    callStatus: $Enums.CALL_STATUS | null
    info: string | null
    caseId: number | null
    personId: number | null
    authorId: number | null
  }

  export type CallMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    callStatus: $Enums.CALL_STATUS | null
    info: string | null
    caseId: number | null
    personId: number | null
    authorId: number | null
  }

  export type CallCountAggregateOutputType = {
    id: number
    createdAt: number
    callStatus: number
    info: number
    caseId: number
    personId: number
    authorId: number
    _all: number
  }


  export type CallAvgAggregateInputType = {
    id?: true
    caseId?: true
    personId?: true
    authorId?: true
  }

  export type CallSumAggregateInputType = {
    id?: true
    caseId?: true
    personId?: true
    authorId?: true
  }

  export type CallMinAggregateInputType = {
    id?: true
    createdAt?: true
    callStatus?: true
    info?: true
    caseId?: true
    personId?: true
    authorId?: true
  }

  export type CallMaxAggregateInputType = {
    id?: true
    createdAt?: true
    callStatus?: true
    info?: true
    caseId?: true
    personId?: true
    authorId?: true
  }

  export type CallCountAggregateInputType = {
    id?: true
    createdAt?: true
    callStatus?: true
    info?: true
    caseId?: true
    personId?: true
    authorId?: true
    _all?: true
  }

  export type CallAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Call to aggregate.
     */
    where?: CallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calls to fetch.
     */
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Calls
    **/
    _count?: true | CallCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CallAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CallSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CallMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CallMaxAggregateInputType
  }

  export type GetCallAggregateType<T extends CallAggregateArgs> = {
        [P in keyof T & keyof AggregateCall]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCall[P]>
      : GetScalarType<T[P], AggregateCall[P]>
  }




  export type CallGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallWhereInput
    orderBy?: CallOrderByWithAggregationInput | CallOrderByWithAggregationInput[]
    by: CallScalarFieldEnum[] | CallScalarFieldEnum
    having?: CallScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CallCountAggregateInputType | true
    _avg?: CallAvgAggregateInputType
    _sum?: CallSumAggregateInputType
    _min?: CallMinAggregateInputType
    _max?: CallMaxAggregateInputType
  }

  export type CallGroupByOutputType = {
    id: number
    createdAt: Date
    callStatus: $Enums.CALL_STATUS
    info: string | null
    caseId: number
    personId: number
    authorId: number
    _count: CallCountAggregateOutputType | null
    _avg: CallAvgAggregateOutputType | null
    _sum: CallSumAggregateOutputType | null
    _min: CallMinAggregateOutputType | null
    _max: CallMaxAggregateOutputType | null
  }

  type GetCallGroupByPayload<T extends CallGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CallGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CallGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CallGroupByOutputType[P]>
            : GetScalarType<T[P], CallGroupByOutputType[P]>
        }
      >
    >


  export type CallSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    callStatus?: boolean
    info?: boolean
    caseId?: boolean
    personId?: boolean
    authorId?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["call"]>

  export type CallSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    callStatus?: boolean
    info?: boolean
    caseId?: boolean
    personId?: boolean
    authorId?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["call"]>

  export type CallSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    callStatus?: boolean
    info?: boolean
    caseId?: boolean
    personId?: boolean
    authorId?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["call"]>

  export type CallSelectScalar = {
    id?: boolean
    createdAt?: boolean
    callStatus?: boolean
    info?: boolean
    caseId?: boolean
    personId?: boolean
    authorId?: boolean
  }

  export type CallOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "callStatus" | "info" | "caseId" | "personId" | "authorId", ExtArgs["result"]["call"]>
  export type CallInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type CallIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type CallIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $CallPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Call"
    objects: {
      case: Prisma.$CasePayload<ExtArgs>
      author: Prisma.$EmployeePayload<ExtArgs>
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      callStatus: $Enums.CALL_STATUS
      info: string | null
      caseId: number
      personId: number
      authorId: number
    }, ExtArgs["result"]["call"]>
    composites: {}
  }

  type CallGetPayload<S extends boolean | null | undefined | CallDefaultArgs> = $Result.GetResult<Prisma.$CallPayload, S>

  type CallCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CallFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CallCountAggregateInputType | true
    }

  export interface CallDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Call'], meta: { name: 'Call' } }
    /**
     * Find zero or one Call that matches the filter.
     * @param {CallFindUniqueArgs} args - Arguments to find a Call
     * @example
     * // Get one Call
     * const call = await prisma.call.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CallFindUniqueArgs>(args: SelectSubset<T, CallFindUniqueArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Call that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CallFindUniqueOrThrowArgs} args - Arguments to find a Call
     * @example
     * // Get one Call
     * const call = await prisma.call.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CallFindUniqueOrThrowArgs>(args: SelectSubset<T, CallFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Call that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallFindFirstArgs} args - Arguments to find a Call
     * @example
     * // Get one Call
     * const call = await prisma.call.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CallFindFirstArgs>(args?: SelectSubset<T, CallFindFirstArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Call that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallFindFirstOrThrowArgs} args - Arguments to find a Call
     * @example
     * // Get one Call
     * const call = await prisma.call.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CallFindFirstOrThrowArgs>(args?: SelectSubset<T, CallFindFirstOrThrowArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calls
     * const calls = await prisma.call.findMany()
     * 
     * // Get first 10 Calls
     * const calls = await prisma.call.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const callWithIdOnly = await prisma.call.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CallFindManyArgs>(args?: SelectSubset<T, CallFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Call.
     * @param {CallCreateArgs} args - Arguments to create a Call.
     * @example
     * // Create one Call
     * const Call = await prisma.call.create({
     *   data: {
     *     // ... data to create a Call
     *   }
     * })
     * 
     */
    create<T extends CallCreateArgs>(args: SelectSubset<T, CallCreateArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calls.
     * @param {CallCreateManyArgs} args - Arguments to create many Calls.
     * @example
     * // Create many Calls
     * const call = await prisma.call.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CallCreateManyArgs>(args?: SelectSubset<T, CallCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Calls and returns the data saved in the database.
     * @param {CallCreateManyAndReturnArgs} args - Arguments to create many Calls.
     * @example
     * // Create many Calls
     * const call = await prisma.call.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Calls and only return the `id`
     * const callWithIdOnly = await prisma.call.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CallCreateManyAndReturnArgs>(args?: SelectSubset<T, CallCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Call.
     * @param {CallDeleteArgs} args - Arguments to delete one Call.
     * @example
     * // Delete one Call
     * const Call = await prisma.call.delete({
     *   where: {
     *     // ... filter to delete one Call
     *   }
     * })
     * 
     */
    delete<T extends CallDeleteArgs>(args: SelectSubset<T, CallDeleteArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Call.
     * @param {CallUpdateArgs} args - Arguments to update one Call.
     * @example
     * // Update one Call
     * const call = await prisma.call.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CallUpdateArgs>(args: SelectSubset<T, CallUpdateArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calls.
     * @param {CallDeleteManyArgs} args - Arguments to filter Calls to delete.
     * @example
     * // Delete a few Calls
     * const { count } = await prisma.call.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CallDeleteManyArgs>(args?: SelectSubset<T, CallDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calls
     * const call = await prisma.call.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CallUpdateManyArgs>(args: SelectSubset<T, CallUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calls and returns the data updated in the database.
     * @param {CallUpdateManyAndReturnArgs} args - Arguments to update many Calls.
     * @example
     * // Update many Calls
     * const call = await prisma.call.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Calls and only return the `id`
     * const callWithIdOnly = await prisma.call.updateManyAndReturn({
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
    updateManyAndReturn<T extends CallUpdateManyAndReturnArgs>(args: SelectSubset<T, CallUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Call.
     * @param {CallUpsertArgs} args - Arguments to update or create a Call.
     * @example
     * // Update or create a Call
     * const call = await prisma.call.upsert({
     *   create: {
     *     // ... data to create a Call
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Call we want to update
     *   }
     * })
     */
    upsert<T extends CallUpsertArgs>(args: SelectSubset<T, CallUpsertArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallCountArgs} args - Arguments to filter Calls to count.
     * @example
     * // Count the number of Calls
     * const count = await prisma.call.count({
     *   where: {
     *     // ... the filter for the Calls we want to count
     *   }
     * })
    **/
    count<T extends CallCountArgs>(
      args?: Subset<T, CallCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CallCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Call.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CallAggregateArgs>(args: Subset<T, CallAggregateArgs>): Prisma.PrismaPromise<GetCallAggregateType<T>>

    /**
     * Group by Call.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallGroupByArgs} args - Group by arguments.
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
      T extends CallGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CallGroupByArgs['orderBy'] }
        : { orderBy?: CallGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CallGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCallGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Call model
   */
  readonly fields: CallFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Call.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CallClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    case<T extends CaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaseDefaultArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Call model
   */
  interface CallFieldRefs {
    readonly id: FieldRef<"Call", 'Int'>
    readonly createdAt: FieldRef<"Call", 'DateTime'>
    readonly callStatus: FieldRef<"Call", 'CALL_STATUS'>
    readonly info: FieldRef<"Call", 'String'>
    readonly caseId: FieldRef<"Call", 'Int'>
    readonly personId: FieldRef<"Call", 'Int'>
    readonly authorId: FieldRef<"Call", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Call findUnique
   */
  export type CallFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * Filter, which Call to fetch.
     */
    where: CallWhereUniqueInput
  }

  /**
   * Call findUniqueOrThrow
   */
  export type CallFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * Filter, which Call to fetch.
     */
    where: CallWhereUniqueInput
  }

  /**
   * Call findFirst
   */
  export type CallFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * Filter, which Call to fetch.
     */
    where?: CallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calls to fetch.
     */
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calls.
     */
    cursor?: CallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calls.
     */
    distinct?: CallScalarFieldEnum | CallScalarFieldEnum[]
  }

  /**
   * Call findFirstOrThrow
   */
  export type CallFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * Filter, which Call to fetch.
     */
    where?: CallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calls to fetch.
     */
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calls.
     */
    cursor?: CallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calls.
     */
    distinct?: CallScalarFieldEnum | CallScalarFieldEnum[]
  }

  /**
   * Call findMany
   */
  export type CallFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * Filter, which Calls to fetch.
     */
    where?: CallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calls to fetch.
     */
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Calls.
     */
    cursor?: CallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calls.
     */
    skip?: number
    distinct?: CallScalarFieldEnum | CallScalarFieldEnum[]
  }

  /**
   * Call create
   */
  export type CallCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * The data needed to create a Call.
     */
    data: XOR<CallCreateInput, CallUncheckedCreateInput>
  }

  /**
   * Call createMany
   */
  export type CallCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Calls.
     */
    data: CallCreateManyInput | CallCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Call createManyAndReturn
   */
  export type CallCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * The data used to create many Calls.
     */
    data: CallCreateManyInput | CallCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Call update
   */
  export type CallUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * The data needed to update a Call.
     */
    data: XOR<CallUpdateInput, CallUncheckedUpdateInput>
    /**
     * Choose, which Call to update.
     */
    where: CallWhereUniqueInput
  }

  /**
   * Call updateMany
   */
  export type CallUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Calls.
     */
    data: XOR<CallUpdateManyMutationInput, CallUncheckedUpdateManyInput>
    /**
     * Filter which Calls to update
     */
    where?: CallWhereInput
    /**
     * Limit how many Calls to update.
     */
    limit?: number
  }

  /**
   * Call updateManyAndReturn
   */
  export type CallUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * The data used to update Calls.
     */
    data: XOR<CallUpdateManyMutationInput, CallUncheckedUpdateManyInput>
    /**
     * Filter which Calls to update
     */
    where?: CallWhereInput
    /**
     * Limit how many Calls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Call upsert
   */
  export type CallUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * The filter to search for the Call to update in case it exists.
     */
    where: CallWhereUniqueInput
    /**
     * In case the Call found by the `where` argument doesn't exist, create a new Call with this data.
     */
    create: XOR<CallCreateInput, CallUncheckedCreateInput>
    /**
     * In case the Call was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CallUpdateInput, CallUncheckedUpdateInput>
  }

  /**
   * Call delete
   */
  export type CallDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * Filter which Call to delete.
     */
    where: CallWhereUniqueInput
  }

  /**
   * Call deleteMany
   */
  export type CallDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calls to delete
     */
    where?: CallWhereInput
    /**
     * Limit how many Calls to delete.
     */
    limit?: number
  }

  /**
   * Call without action
   */
  export type CallDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    caseId: number | null
    personId: number | null
    authorId: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    caseId: number | null
    personId: number | null
    authorId: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    createAt: Date | null
    date: Date | null
    appointmentStatus: $Enums.APPOINTMENT_STATUS | null
    caseId: number | null
    personId: number | null
    authorId: number | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    createAt: Date | null
    date: Date | null
    appointmentStatus: $Enums.APPOINTMENT_STATUS | null
    caseId: number | null
    personId: number | null
    authorId: number | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    createAt: number
    date: number
    appointmentStatus: number
    caseId: number
    personId: number
    authorId: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    caseId?: true
    personId?: true
    authorId?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    caseId?: true
    personId?: true
    authorId?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    createAt?: true
    date?: true
    appointmentStatus?: true
    caseId?: true
    personId?: true
    authorId?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    createAt?: true
    date?: true
    appointmentStatus?: true
    caseId?: true
    personId?: true
    authorId?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    createAt?: true
    date?: true
    appointmentStatus?: true
    caseId?: true
    personId?: true
    authorId?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    createAt: Date
    date: Date
    appointmentStatus: $Enums.APPOINTMENT_STATUS
    caseId: number
    personId: number
    authorId: number
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    date?: boolean
    appointmentStatus?: boolean
    caseId?: boolean
    personId?: boolean
    authorId?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    date?: boolean
    appointmentStatus?: boolean
    caseId?: boolean
    personId?: boolean
    authorId?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    date?: boolean
    appointmentStatus?: boolean
    caseId?: boolean
    personId?: boolean
    authorId?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    createAt?: boolean
    date?: boolean
    appointmentStatus?: boolean
    caseId?: boolean
    personId?: boolean
    authorId?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createAt" | "date" | "appointmentStatus" | "caseId" | "personId" | "authorId", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    author?: boolean | EmployeeDefaultArgs<ExtArgs>
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
      author: Prisma.$EmployeePayload<ExtArgs>
      case: Prisma.$CasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createAt: Date
      date: Date
      appointmentStatus: $Enums.APPOINTMENT_STATUS
      caseId: number
      personId: number
      authorId: number
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    case<T extends CaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaseDefaultArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'Int'>
    readonly createAt: FieldRef<"Appointment", 'DateTime'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly appointmentStatus: FieldRef<"Appointment", 'APPOINTMENT_STATUS'>
    readonly caseId: FieldRef<"Appointment", 'Int'>
    readonly personId: FieldRef<"Appointment", 'Int'>
    readonly authorId: FieldRef<"Appointment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
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


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    username: 'username',
    password: 'password',
    roles: 'roles'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    phoneNumber: 'phoneNumber',
    link: 'link',
    email: 'email',
    homeAddress: 'homeAddress',
    authorId: 'authorId',
    originId: 'originId',
    leadStatus: 'leadStatus'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const CaseScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    caseImportance: 'caseImportance',
    caseUrgency: 'caseUrgency',
    caseStatus: 'caseStatus',
    categories: 'categories',
    problemShort: 'problemShort',
    problemFull: 'problemFull',
    nearestTask: 'nearestTask',
    courtInfo: 'courtInfo',
    nearestTaskDeadline: 'nearestTaskDeadline',
    timeOfPerformance: 'timeOfPerformance',
    assignmentTime: 'assignmentTime',
    nextDialDate: 'nextDialDate',
    lastDialDate: 'lastDialDate',
    refusalReason: 'refusalReason',
    legalAction: 'legalAction',
    statusInCourt: 'statusInCourt',
    priceSOM: 'priceSOM',
    priceUSD: 'priceUSD',
    personId: 'personId',
    authorId: 'authorId',
    opponentId: 'opponentId',
    managerId: 'managerId'
  };

  export type CaseScalarFieldEnum = (typeof CaseScalarFieldEnum)[keyof typeof CaseScalarFieldEnum]


  export const OriginScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title',
    link: 'link',
    categories: 'categories',
    authorId: 'authorId'
  };

  export type OriginScalarFieldEnum = (typeof OriginScalarFieldEnum)[keyof typeof OriginScalarFieldEnum]


  export const OpponentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    link: 'link',
    info: 'info',
    authorId: 'authorId'
  };

  export type OpponentScalarFieldEnum = (typeof OpponentScalarFieldEnum)[keyof typeof OpponentScalarFieldEnum]


  export const BloggerScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    link: 'link',
    phoneNumber: 'phoneNumber',
    email: 'email',
    info: 'info',
    subscribersCount: 'subscribersCount',
    priceSOM: 'priceSOM',
    priceUSD: 'priceUSD',
    authorId: 'authorId',
    categories: 'categories'
  };

  export type BloggerScalarFieldEnum = (typeof BloggerScalarFieldEnum)[keyof typeof BloggerScalarFieldEnum]


  export const CallScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    callStatus: 'callStatus',
    info: 'info',
    caseId: 'caseId',
    personId: 'personId',
    authorId: 'authorId'
  };

  export type CallScalarFieldEnum = (typeof CallScalarFieldEnum)[keyof typeof CallScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    createAt: 'createAt',
    date: 'date',
    appointmentStatus: 'appointmentStatus',
    caseId: 'caseId',
    personId: 'personId',
    authorId: 'authorId'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ROLE[]'
   */
  export type ListEnumROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLE[]'>
    


  /**
   * Reference to a field of type 'ROLE'
   */
  export type EnumROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLE'>
    


  /**
   * Reference to a field of type 'LEAD_STATUS'
   */
  export type EnumLEAD_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LEAD_STATUS'>
    


  /**
   * Reference to a field of type 'LEAD_STATUS[]'
   */
  export type ListEnumLEAD_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LEAD_STATUS[]'>
    


  /**
   * Reference to a field of type 'IMPORTANCE'
   */
  export type EnumIMPORTANCEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IMPORTANCE'>
    


  /**
   * Reference to a field of type 'IMPORTANCE[]'
   */
  export type ListEnumIMPORTANCEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IMPORTANCE[]'>
    


  /**
   * Reference to a field of type 'URGENCY'
   */
  export type EnumURGENCYFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'URGENCY'>
    


  /**
   * Reference to a field of type 'URGENCY[]'
   */
  export type ListEnumURGENCYFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'URGENCY[]'>
    


  /**
   * Reference to a field of type 'CASE_STATUS'
   */
  export type EnumCASE_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CASE_STATUS'>
    


  /**
   * Reference to a field of type 'CASE_STATUS[]'
   */
  export type ListEnumCASE_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CASE_STATUS[]'>
    


  /**
   * Reference to a field of type 'CASE_CATEGORY[]'
   */
  export type ListEnumCASE_CATEGORYFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CASE_CATEGORY[]'>
    


  /**
   * Reference to a field of type 'CASE_CATEGORY'
   */
  export type EnumCASE_CATEGORYFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CASE_CATEGORY'>
    


  /**
   * Reference to a field of type 'REFUSAL_REASON'
   */
  export type EnumREFUSAL_REASONFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'REFUSAL_REASON'>
    


  /**
   * Reference to a field of type 'REFUSAL_REASON[]'
   */
  export type ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'REFUSAL_REASON[]'>
    


  /**
   * Reference to a field of type 'LEGAL_ACTION'
   */
  export type EnumLEGAL_ACTIONFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LEGAL_ACTION'>
    


  /**
   * Reference to a field of type 'LEGAL_ACTION[]'
   */
  export type ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LEGAL_ACTION[]'>
    


  /**
   * Reference to a field of type 'STATUS_IN_COURT'
   */
  export type EnumSTATUS_IN_COURTFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STATUS_IN_COURT'>
    


  /**
   * Reference to a field of type 'STATUS_IN_COURT[]'
   */
  export type ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STATUS_IN_COURT[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'CALL_STATUS'
   */
  export type EnumCALL_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CALL_STATUS'>
    


  /**
   * Reference to a field of type 'CALL_STATUS[]'
   */
  export type ListEnumCALL_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CALL_STATUS[]'>
    


  /**
   * Reference to a field of type 'APPOINTMENT_STATUS'
   */
  export type EnumAPPOINTMENT_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'APPOINTMENT_STATUS'>
    


  /**
   * Reference to a field of type 'APPOINTMENT_STATUS[]'
   */
  export type ListEnumAPPOINTMENT_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'APPOINTMENT_STATUS[]'>
    


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


  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    username?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    roles?: EnumROLENullableListFilter<"Employee">
    authoredBloggers?: BloggerListRelationFilter
    authoredOrigins?: OriginListRelationFilter
    authoredPersons?: PersonListRelationFilter
    authoredCases?: CaseListRelationFilter
    managedCases?: CaseListRelationFilter
    authoredOpponents?: OpponentListRelationFilter
    authoredCalls?: CallListRelationFilter
    authoredAppointments?: AppointmentListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    roles?: SortOrder
    authoredBloggers?: BloggerOrderByRelationAggregateInput
    authoredOrigins?: OriginOrderByRelationAggregateInput
    authoredPersons?: PersonOrderByRelationAggregateInput
    authoredCases?: CaseOrderByRelationAggregateInput
    managedCases?: CaseOrderByRelationAggregateInput
    authoredOpponents?: OpponentOrderByRelationAggregateInput
    authoredCalls?: CallOrderByRelationAggregateInput
    authoredAppointments?: AppointmentOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    password?: StringFilter<"Employee"> | string
    roles?: EnumROLENullableListFilter<"Employee">
    authoredBloggers?: BloggerListRelationFilter
    authoredOrigins?: OriginListRelationFilter
    authoredPersons?: PersonListRelationFilter
    authoredCases?: CaseListRelationFilter
    managedCases?: CaseListRelationFilter
    authoredOpponents?: OpponentListRelationFilter
    authoredCalls?: CallListRelationFilter
    authoredAppointments?: AppointmentListRelationFilter
  }, "id" | "username">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    roles?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employee"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    username?: StringWithAggregatesFilter<"Employee"> | string
    password?: StringWithAggregatesFilter<"Employee"> | string
    roles?: EnumROLENullableListFilter<"Employee">
  }

  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: IntFilter<"Person"> | number
    createdAt?: DateTimeFilter<"Person"> | Date | string
    name?: StringFilter<"Person"> | string
    phoneNumber?: StringNullableFilter<"Person"> | string | null
    link?: StringNullableFilter<"Person"> | string | null
    email?: StringNullableFilter<"Person"> | string | null
    homeAddress?: StringNullableFilter<"Person"> | string | null
    authorId?: IntFilter<"Person"> | number
    originId?: IntFilter<"Person"> | number
    leadStatus?: EnumLEAD_STATUSFilter<"Person"> | $Enums.LEAD_STATUS
    author?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    origin?: XOR<OriginScalarRelationFilter, OriginWhereInput>
    cases?: CaseListRelationFilter
    calls?: CallListRelationFilter
    appointments?: AppointmentListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    homeAddress?: SortOrderInput | SortOrder
    authorId?: SortOrder
    originId?: SortOrder
    leadStatus?: SortOrder
    author?: EmployeeOrderByWithRelationInput
    origin?: OriginOrderByWithRelationInput
    cases?: CaseOrderByRelationAggregateInput
    calls?: CallOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phoneNumber?: string
    link?: string
    email?: string
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    createdAt?: DateTimeFilter<"Person"> | Date | string
    name?: StringFilter<"Person"> | string
    homeAddress?: StringNullableFilter<"Person"> | string | null
    authorId?: IntFilter<"Person"> | number
    originId?: IntFilter<"Person"> | number
    leadStatus?: EnumLEAD_STATUSFilter<"Person"> | $Enums.LEAD_STATUS
    author?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    origin?: XOR<OriginScalarRelationFilter, OriginWhereInput>
    cases?: CaseListRelationFilter
    calls?: CallListRelationFilter
    appointments?: AppointmentListRelationFilter
  }, "id" | "phoneNumber" | "link" | "email">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    homeAddress?: SortOrderInput | SortOrder
    authorId?: SortOrder
    originId?: SortOrder
    leadStatus?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _avg?: PersonAvgOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
    _sum?: PersonSumOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Person"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    name?: StringWithAggregatesFilter<"Person"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"Person"> | string | null
    link?: StringNullableWithAggregatesFilter<"Person"> | string | null
    email?: StringNullableWithAggregatesFilter<"Person"> | string | null
    homeAddress?: StringNullableWithAggregatesFilter<"Person"> | string | null
    authorId?: IntWithAggregatesFilter<"Person"> | number
    originId?: IntWithAggregatesFilter<"Person"> | number
    leadStatus?: EnumLEAD_STATUSWithAggregatesFilter<"Person"> | $Enums.LEAD_STATUS
  }

  export type CaseWhereInput = {
    AND?: CaseWhereInput | CaseWhereInput[]
    OR?: CaseWhereInput[]
    NOT?: CaseWhereInput | CaseWhereInput[]
    id?: IntFilter<"Case"> | number
    createdAt?: DateTimeFilter<"Case"> | Date | string
    caseImportance?: EnumIMPORTANCEFilter<"Case"> | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFilter<"Case"> | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFilter<"Case"> | $Enums.CASE_STATUS
    categories?: EnumCASE_CATEGORYNullableListFilter<"Case">
    problemShort?: StringNullableFilter<"Case"> | string | null
    problemFull?: StringNullableFilter<"Case"> | string | null
    nearestTask?: StringNullableFilter<"Case"> | string | null
    courtInfo?: StringNullableFilter<"Case"> | string | null
    nearestTaskDeadline?: DateTimeNullableFilter<"Case"> | Date | string | null
    timeOfPerformance?: DateTimeNullableFilter<"Case"> | Date | string | null
    assignmentTime?: DateTimeNullableFilter<"Case"> | Date | string | null
    nextDialDate?: DateTimeNullableFilter<"Case"> | Date | string | null
    lastDialDate?: DateTimeNullableFilter<"Case"> | Date | string | null
    refusalReason?: EnumREFUSAL_REASONNullableFilter<"Case"> | $Enums.REFUSAL_REASON | null
    legalAction?: EnumLEGAL_ACTIONNullableFilter<"Case"> | $Enums.LEGAL_ACTION | null
    statusInCourt?: EnumSTATUS_IN_COURTNullableFilter<"Case"> | $Enums.STATUS_IN_COURT | null
    priceSOM?: BigIntNullableFilter<"Case"> | bigint | number | null
    priceUSD?: BigIntNullableFilter<"Case"> | bigint | number | null
    personId?: IntFilter<"Case"> | number
    authorId?: IntFilter<"Case"> | number
    opponentId?: IntNullableFilter<"Case"> | number | null
    managerId?: IntNullableFilter<"Case"> | number | null
    author?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    manager?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    opponent?: XOR<OpponentNullableScalarRelationFilter, OpponentWhereInput> | null
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    appointments?: AppointmentListRelationFilter
    calls?: CallListRelationFilter
  }

  export type CaseOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    caseImportance?: SortOrder
    caseUrgency?: SortOrder
    caseStatus?: SortOrder
    categories?: SortOrder
    problemShort?: SortOrderInput | SortOrder
    problemFull?: SortOrderInput | SortOrder
    nearestTask?: SortOrderInput | SortOrder
    courtInfo?: SortOrderInput | SortOrder
    nearestTaskDeadline?: SortOrderInput | SortOrder
    timeOfPerformance?: SortOrderInput | SortOrder
    assignmentTime?: SortOrderInput | SortOrder
    nextDialDate?: SortOrderInput | SortOrder
    lastDialDate?: SortOrderInput | SortOrder
    refusalReason?: SortOrderInput | SortOrder
    legalAction?: SortOrderInput | SortOrder
    statusInCourt?: SortOrderInput | SortOrder
    priceSOM?: SortOrderInput | SortOrder
    priceUSD?: SortOrderInput | SortOrder
    personId?: SortOrder
    authorId?: SortOrder
    opponentId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    author?: EmployeeOrderByWithRelationInput
    manager?: EmployeeOrderByWithRelationInput
    opponent?: OpponentOrderByWithRelationInput
    person?: PersonOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
    calls?: CallOrderByRelationAggregateInput
  }

  export type CaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CaseWhereInput | CaseWhereInput[]
    OR?: CaseWhereInput[]
    NOT?: CaseWhereInput | CaseWhereInput[]
    createdAt?: DateTimeFilter<"Case"> | Date | string
    caseImportance?: EnumIMPORTANCEFilter<"Case"> | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFilter<"Case"> | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFilter<"Case"> | $Enums.CASE_STATUS
    categories?: EnumCASE_CATEGORYNullableListFilter<"Case">
    problemShort?: StringNullableFilter<"Case"> | string | null
    problemFull?: StringNullableFilter<"Case"> | string | null
    nearestTask?: StringNullableFilter<"Case"> | string | null
    courtInfo?: StringNullableFilter<"Case"> | string | null
    nearestTaskDeadline?: DateTimeNullableFilter<"Case"> | Date | string | null
    timeOfPerformance?: DateTimeNullableFilter<"Case"> | Date | string | null
    assignmentTime?: DateTimeNullableFilter<"Case"> | Date | string | null
    nextDialDate?: DateTimeNullableFilter<"Case"> | Date | string | null
    lastDialDate?: DateTimeNullableFilter<"Case"> | Date | string | null
    refusalReason?: EnumREFUSAL_REASONNullableFilter<"Case"> | $Enums.REFUSAL_REASON | null
    legalAction?: EnumLEGAL_ACTIONNullableFilter<"Case"> | $Enums.LEGAL_ACTION | null
    statusInCourt?: EnumSTATUS_IN_COURTNullableFilter<"Case"> | $Enums.STATUS_IN_COURT | null
    priceSOM?: BigIntNullableFilter<"Case"> | bigint | number | null
    priceUSD?: BigIntNullableFilter<"Case"> | bigint | number | null
    personId?: IntFilter<"Case"> | number
    authorId?: IntFilter<"Case"> | number
    opponentId?: IntNullableFilter<"Case"> | number | null
    managerId?: IntNullableFilter<"Case"> | number | null
    author?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    manager?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    opponent?: XOR<OpponentNullableScalarRelationFilter, OpponentWhereInput> | null
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    appointments?: AppointmentListRelationFilter
    calls?: CallListRelationFilter
  }, "id">

  export type CaseOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    caseImportance?: SortOrder
    caseUrgency?: SortOrder
    caseStatus?: SortOrder
    categories?: SortOrder
    problemShort?: SortOrderInput | SortOrder
    problemFull?: SortOrderInput | SortOrder
    nearestTask?: SortOrderInput | SortOrder
    courtInfo?: SortOrderInput | SortOrder
    nearestTaskDeadline?: SortOrderInput | SortOrder
    timeOfPerformance?: SortOrderInput | SortOrder
    assignmentTime?: SortOrderInput | SortOrder
    nextDialDate?: SortOrderInput | SortOrder
    lastDialDate?: SortOrderInput | SortOrder
    refusalReason?: SortOrderInput | SortOrder
    legalAction?: SortOrderInput | SortOrder
    statusInCourt?: SortOrderInput | SortOrder
    priceSOM?: SortOrderInput | SortOrder
    priceUSD?: SortOrderInput | SortOrder
    personId?: SortOrder
    authorId?: SortOrder
    opponentId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    _count?: CaseCountOrderByAggregateInput
    _avg?: CaseAvgOrderByAggregateInput
    _max?: CaseMaxOrderByAggregateInput
    _min?: CaseMinOrderByAggregateInput
    _sum?: CaseSumOrderByAggregateInput
  }

  export type CaseScalarWhereWithAggregatesInput = {
    AND?: CaseScalarWhereWithAggregatesInput | CaseScalarWhereWithAggregatesInput[]
    OR?: CaseScalarWhereWithAggregatesInput[]
    NOT?: CaseScalarWhereWithAggregatesInput | CaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Case"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Case"> | Date | string
    caseImportance?: EnumIMPORTANCEWithAggregatesFilter<"Case"> | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYWithAggregatesFilter<"Case"> | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSWithAggregatesFilter<"Case"> | $Enums.CASE_STATUS
    categories?: EnumCASE_CATEGORYNullableListFilter<"Case">
    problemShort?: StringNullableWithAggregatesFilter<"Case"> | string | null
    problemFull?: StringNullableWithAggregatesFilter<"Case"> | string | null
    nearestTask?: StringNullableWithAggregatesFilter<"Case"> | string | null
    courtInfo?: StringNullableWithAggregatesFilter<"Case"> | string | null
    nearestTaskDeadline?: DateTimeNullableWithAggregatesFilter<"Case"> | Date | string | null
    timeOfPerformance?: DateTimeNullableWithAggregatesFilter<"Case"> | Date | string | null
    assignmentTime?: DateTimeNullableWithAggregatesFilter<"Case"> | Date | string | null
    nextDialDate?: DateTimeNullableWithAggregatesFilter<"Case"> | Date | string | null
    lastDialDate?: DateTimeNullableWithAggregatesFilter<"Case"> | Date | string | null
    refusalReason?: EnumREFUSAL_REASONNullableWithAggregatesFilter<"Case"> | $Enums.REFUSAL_REASON | null
    legalAction?: EnumLEGAL_ACTIONNullableWithAggregatesFilter<"Case"> | $Enums.LEGAL_ACTION | null
    statusInCourt?: EnumSTATUS_IN_COURTNullableWithAggregatesFilter<"Case"> | $Enums.STATUS_IN_COURT | null
    priceSOM?: BigIntNullableWithAggregatesFilter<"Case"> | bigint | number | null
    priceUSD?: BigIntNullableWithAggregatesFilter<"Case"> | bigint | number | null
    personId?: IntWithAggregatesFilter<"Case"> | number
    authorId?: IntWithAggregatesFilter<"Case"> | number
    opponentId?: IntNullableWithAggregatesFilter<"Case"> | number | null
    managerId?: IntNullableWithAggregatesFilter<"Case"> | number | null
  }

  export type OriginWhereInput = {
    AND?: OriginWhereInput | OriginWhereInput[]
    OR?: OriginWhereInput[]
    NOT?: OriginWhereInput | OriginWhereInput[]
    id?: IntFilter<"Origin"> | number
    createdAt?: DateTimeFilter<"Origin"> | Date | string
    title?: StringFilter<"Origin"> | string
    link?: StringNullableFilter<"Origin"> | string | null
    categories?: EnumCASE_CATEGORYNullableListFilter<"Origin">
    authorId?: IntFilter<"Origin"> | number
    author?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    persons?: PersonListRelationFilter
  }

  export type OriginOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    link?: SortOrderInput | SortOrder
    categories?: SortOrder
    authorId?: SortOrder
    author?: EmployeeOrderByWithRelationInput
    persons?: PersonOrderByRelationAggregateInput
  }

  export type OriginWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    link?: string
    AND?: OriginWhereInput | OriginWhereInput[]
    OR?: OriginWhereInput[]
    NOT?: OriginWhereInput | OriginWhereInput[]
    createdAt?: DateTimeFilter<"Origin"> | Date | string
    categories?: EnumCASE_CATEGORYNullableListFilter<"Origin">
    authorId?: IntFilter<"Origin"> | number
    author?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    persons?: PersonListRelationFilter
  }, "id" | "title" | "link">

  export type OriginOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    link?: SortOrderInput | SortOrder
    categories?: SortOrder
    authorId?: SortOrder
    _count?: OriginCountOrderByAggregateInput
    _avg?: OriginAvgOrderByAggregateInput
    _max?: OriginMaxOrderByAggregateInput
    _min?: OriginMinOrderByAggregateInput
    _sum?: OriginSumOrderByAggregateInput
  }

  export type OriginScalarWhereWithAggregatesInput = {
    AND?: OriginScalarWhereWithAggregatesInput | OriginScalarWhereWithAggregatesInput[]
    OR?: OriginScalarWhereWithAggregatesInput[]
    NOT?: OriginScalarWhereWithAggregatesInput | OriginScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Origin"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Origin"> | Date | string
    title?: StringWithAggregatesFilter<"Origin"> | string
    link?: StringNullableWithAggregatesFilter<"Origin"> | string | null
    categories?: EnumCASE_CATEGORYNullableListFilter<"Origin">
    authorId?: IntWithAggregatesFilter<"Origin"> | number
  }

  export type OpponentWhereInput = {
    AND?: OpponentWhereInput | OpponentWhereInput[]
    OR?: OpponentWhereInput[]
    NOT?: OpponentWhereInput | OpponentWhereInput[]
    id?: IntFilter<"Opponent"> | number
    createdAt?: DateTimeFilter<"Opponent"> | Date | string
    name?: StringFilter<"Opponent"> | string
    link?: StringNullableFilter<"Opponent"> | string | null
    info?: StringNullableFilter<"Opponent"> | string | null
    authorId?: IntFilter<"Opponent"> | number
    cases?: CaseListRelationFilter
    author?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type OpponentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    link?: SortOrderInput | SortOrder
    info?: SortOrderInput | SortOrder
    authorId?: SortOrder
    cases?: CaseOrderByRelationAggregateInput
    author?: EmployeeOrderByWithRelationInput
  }

  export type OpponentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    link?: string
    AND?: OpponentWhereInput | OpponentWhereInput[]
    OR?: OpponentWhereInput[]
    NOT?: OpponentWhereInput | OpponentWhereInput[]
    createdAt?: DateTimeFilter<"Opponent"> | Date | string
    info?: StringNullableFilter<"Opponent"> | string | null
    authorId?: IntFilter<"Opponent"> | number
    cases?: CaseListRelationFilter
    author?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id" | "name" | "link">

  export type OpponentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    link?: SortOrderInput | SortOrder
    info?: SortOrderInput | SortOrder
    authorId?: SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"Opponent"> | Date | string
    name?: StringWithAggregatesFilter<"Opponent"> | string
    link?: StringNullableWithAggregatesFilter<"Opponent"> | string | null
    info?: StringNullableWithAggregatesFilter<"Opponent"> | string | null
    authorId?: IntWithAggregatesFilter<"Opponent"> | number
  }

  export type BloggerWhereInput = {
    AND?: BloggerWhereInput | BloggerWhereInput[]
    OR?: BloggerWhereInput[]
    NOT?: BloggerWhereInput | BloggerWhereInput[]
    id?: IntFilter<"Blogger"> | number
    createdAt?: DateTimeFilter<"Blogger"> | Date | string
    name?: StringFilter<"Blogger"> | string
    link?: StringFilter<"Blogger"> | string
    phoneNumber?: StringNullableFilter<"Blogger"> | string | null
    email?: StringNullableFilter<"Blogger"> | string | null
    info?: StringNullableFilter<"Blogger"> | string | null
    subscribersCount?: BigIntFilter<"Blogger"> | bigint | number
    priceSOM?: BigIntNullableFilter<"Blogger"> | bigint | number | null
    priceUSD?: BigIntNullableFilter<"Blogger"> | bigint | number | null
    authorId?: IntFilter<"Blogger"> | number
    categories?: EnumCASE_CATEGORYNullableListFilter<"Blogger">
    author?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type BloggerOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    link?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    info?: SortOrderInput | SortOrder
    subscribersCount?: SortOrder
    priceSOM?: SortOrderInput | SortOrder
    priceUSD?: SortOrderInput | SortOrder
    authorId?: SortOrder
    categories?: SortOrder
    author?: EmployeeOrderByWithRelationInput
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
    createdAt?: DateTimeFilter<"Blogger"> | Date | string
    info?: StringNullableFilter<"Blogger"> | string | null
    subscribersCount?: BigIntFilter<"Blogger"> | bigint | number
    priceSOM?: BigIntNullableFilter<"Blogger"> | bigint | number | null
    priceUSD?: BigIntNullableFilter<"Blogger"> | bigint | number | null
    authorId?: IntFilter<"Blogger"> | number
    categories?: EnumCASE_CATEGORYNullableListFilter<"Blogger">
    author?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id" | "name" | "link" | "phoneNumber" | "email">

  export type BloggerOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    link?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    info?: SortOrderInput | SortOrder
    subscribersCount?: SortOrder
    priceSOM?: SortOrderInput | SortOrder
    priceUSD?: SortOrderInput | SortOrder
    authorId?: SortOrder
    categories?: SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"Blogger"> | Date | string
    name?: StringWithAggregatesFilter<"Blogger"> | string
    link?: StringWithAggregatesFilter<"Blogger"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"Blogger"> | string | null
    email?: StringNullableWithAggregatesFilter<"Blogger"> | string | null
    info?: StringNullableWithAggregatesFilter<"Blogger"> | string | null
    subscribersCount?: BigIntWithAggregatesFilter<"Blogger"> | bigint | number
    priceSOM?: BigIntNullableWithAggregatesFilter<"Blogger"> | bigint | number | null
    priceUSD?: BigIntNullableWithAggregatesFilter<"Blogger"> | bigint | number | null
    authorId?: IntWithAggregatesFilter<"Blogger"> | number
    categories?: EnumCASE_CATEGORYNullableListFilter<"Blogger">
  }

  export type CallWhereInput = {
    AND?: CallWhereInput | CallWhereInput[]
    OR?: CallWhereInput[]
    NOT?: CallWhereInput | CallWhereInput[]
    id?: IntFilter<"Call"> | number
    createdAt?: DateTimeFilter<"Call"> | Date | string
    callStatus?: EnumCALL_STATUSFilter<"Call"> | $Enums.CALL_STATUS
    info?: StringNullableFilter<"Call"> | string | null
    caseId?: IntFilter<"Call"> | number
    personId?: IntFilter<"Call"> | number
    authorId?: IntFilter<"Call"> | number
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
    author?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }

  export type CallOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    callStatus?: SortOrder
    info?: SortOrderInput | SortOrder
    caseId?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
    case?: CaseOrderByWithRelationInput
    author?: EmployeeOrderByWithRelationInput
    person?: PersonOrderByWithRelationInput
  }

  export type CallWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CallWhereInput | CallWhereInput[]
    OR?: CallWhereInput[]
    NOT?: CallWhereInput | CallWhereInput[]
    createdAt?: DateTimeFilter<"Call"> | Date | string
    callStatus?: EnumCALL_STATUSFilter<"Call"> | $Enums.CALL_STATUS
    info?: StringNullableFilter<"Call"> | string | null
    caseId?: IntFilter<"Call"> | number
    personId?: IntFilter<"Call"> | number
    authorId?: IntFilter<"Call"> | number
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
    author?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }, "id">

  export type CallOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    callStatus?: SortOrder
    info?: SortOrderInput | SortOrder
    caseId?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
    _count?: CallCountOrderByAggregateInput
    _avg?: CallAvgOrderByAggregateInput
    _max?: CallMaxOrderByAggregateInput
    _min?: CallMinOrderByAggregateInput
    _sum?: CallSumOrderByAggregateInput
  }

  export type CallScalarWhereWithAggregatesInput = {
    AND?: CallScalarWhereWithAggregatesInput | CallScalarWhereWithAggregatesInput[]
    OR?: CallScalarWhereWithAggregatesInput[]
    NOT?: CallScalarWhereWithAggregatesInput | CallScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Call"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Call"> | Date | string
    callStatus?: EnumCALL_STATUSWithAggregatesFilter<"Call"> | $Enums.CALL_STATUS
    info?: StringNullableWithAggregatesFilter<"Call"> | string | null
    caseId?: IntWithAggregatesFilter<"Call"> | number
    personId?: IntWithAggregatesFilter<"Call"> | number
    authorId?: IntWithAggregatesFilter<"Call"> | number
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: IntFilter<"Appointment"> | number
    createAt?: DateTimeFilter<"Appointment"> | Date | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    appointmentStatus?: EnumAPPOINTMENT_STATUSFilter<"Appointment"> | $Enums.APPOINTMENT_STATUS
    caseId?: IntFilter<"Appointment"> | number
    personId?: IntFilter<"Appointment"> | number
    authorId?: IntFilter<"Appointment"> | number
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    author?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    createAt?: SortOrder
    date?: SortOrder
    appointmentStatus?: SortOrder
    caseId?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
    person?: PersonOrderByWithRelationInput
    author?: EmployeeOrderByWithRelationInput
    case?: CaseOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    createAt?: DateTimeFilter<"Appointment"> | Date | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    appointmentStatus?: EnumAPPOINTMENT_STATUSFilter<"Appointment"> | $Enums.APPOINTMENT_STATUS
    caseId?: IntFilter<"Appointment"> | number
    personId?: IntFilter<"Appointment"> | number
    authorId?: IntFilter<"Appointment"> | number
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    author?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    createAt?: SortOrder
    date?: SortOrder
    appointmentStatus?: SortOrder
    caseId?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointment"> | number
    createAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    appointmentStatus?: EnumAPPOINTMENT_STATUSWithAggregatesFilter<"Appointment"> | $Enums.APPOINTMENT_STATUS
    caseId?: IntWithAggregatesFilter<"Appointment"> | number
    personId?: IntWithAggregatesFilter<"Appointment"> | number
    authorId?: IntWithAggregatesFilter<"Appointment"> | number
  }

  export type EmployeeCreateInput = {
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerCreateNestedManyWithoutAuthorInput
    authoredOrigins?: OriginCreateNestedManyWithoutAuthorInput
    authoredPersons?: PersonCreateNestedManyWithoutAuthorInput
    authoredCases?: CaseCreateNestedManyWithoutAuthorInput
    managedCases?: CaseCreateNestedManyWithoutManagerInput
    authoredOpponents?: OpponentCreateNestedManyWithoutAuthorInput
    authoredCalls?: CallCreateNestedManyWithoutAuthorInput
    authoredAppointments?: AppointmentCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUncheckedCreateNestedManyWithoutAuthorInput
    authoredOrigins?: OriginUncheckedCreateNestedManyWithoutAuthorInput
    authoredPersons?: PersonUncheckedCreateNestedManyWithoutAuthorInput
    authoredCases?: CaseUncheckedCreateNestedManyWithoutAuthorInput
    managedCases?: CaseUncheckedCreateNestedManyWithoutManagerInput
    authoredOpponents?: OpponentUncheckedCreateNestedManyWithoutAuthorInput
    authoredCalls?: CallUncheckedCreateNestedManyWithoutAuthorInput
    authoredAppointments?: AppointmentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUpdateManyWithoutAuthorNestedInput
    authoredOrigins?: OriginUpdateManyWithoutAuthorNestedInput
    authoredPersons?: PersonUpdateManyWithoutAuthorNestedInput
    authoredCases?: CaseUpdateManyWithoutAuthorNestedInput
    managedCases?: CaseUpdateManyWithoutManagerNestedInput
    authoredOpponents?: OpponentUpdateManyWithoutAuthorNestedInput
    authoredCalls?: CallUpdateManyWithoutAuthorNestedInput
    authoredAppointments?: AppointmentUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUncheckedUpdateManyWithoutAuthorNestedInput
    authoredOrigins?: OriginUncheckedUpdateManyWithoutAuthorNestedInput
    authoredPersons?: PersonUncheckedUpdateManyWithoutAuthorNestedInput
    authoredCases?: CaseUncheckedUpdateManyWithoutAuthorNestedInput
    managedCases?: CaseUncheckedUpdateManyWithoutManagerNestedInput
    authoredOpponents?: OpponentUncheckedUpdateManyWithoutAuthorNestedInput
    authoredCalls?: CallUncheckedUpdateManyWithoutAuthorNestedInput
    authoredAppointments?: AppointmentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: number
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
  }

  export type EmployeeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
  }

  export type PersonCreateInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    link?: string | null
    email?: string | null
    homeAddress?: string | null
    leadStatus?: $Enums.LEAD_STATUS
    author: EmployeeCreateNestedOneWithoutAuthoredPersonsInput
    origin: OriginCreateNestedOneWithoutPersonsInput
    cases?: CaseCreateNestedManyWithoutPersonInput
    calls?: CallCreateNestedManyWithoutPersonInput
    appointments?: AppointmentCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    link?: string | null
    email?: string | null
    homeAddress?: string | null
    authorId: number
    originId: number
    leadStatus?: $Enums.LEAD_STATUS
    cases?: CaseUncheckedCreateNestedManyWithoutPersonInput
    calls?: CallUncheckedCreateNestedManyWithoutPersonInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    author?: EmployeeUpdateOneRequiredWithoutAuthoredPersonsNestedInput
    origin?: OriginUpdateOneRequiredWithoutPersonsNestedInput
    cases?: CaseUpdateManyWithoutPersonNestedInput
    calls?: CallUpdateManyWithoutPersonNestedInput
    appointments?: AppointmentUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    originId?: IntFieldUpdateOperationsInput | number
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    cases?: CaseUncheckedUpdateManyWithoutPersonNestedInput
    calls?: CallUncheckedUpdateManyWithoutPersonNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    link?: string | null
    email?: string | null
    homeAddress?: string | null
    authorId: number
    originId: number
    leadStatus?: $Enums.LEAD_STATUS
  }

  export type PersonUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    originId?: IntFieldUpdateOperationsInput | number
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
  }

  export type CaseCreateInput = {
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    author: EmployeeCreateNestedOneWithoutAuthoredCasesInput
    manager?: EmployeeCreateNestedOneWithoutManagedCasesInput
    opponent?: OpponentCreateNestedOneWithoutCasesInput
    person: PersonCreateNestedOneWithoutCasesInput
    appointments?: AppointmentCreateNestedManyWithoutCaseInput
    calls?: CallCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    personId: number
    authorId: number
    opponentId?: number | null
    managerId?: number | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutCaseInput
    calls?: CallUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    author?: EmployeeUpdateOneRequiredWithoutAuthoredCasesNestedInput
    manager?: EmployeeUpdateOneWithoutManagedCasesNestedInput
    opponent?: OpponentUpdateOneWithoutCasesNestedInput
    person?: PersonUpdateOneRequiredWithoutCasesNestedInput
    appointments?: AppointmentUpdateManyWithoutCaseNestedInput
    calls?: CallUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    personId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    appointments?: AppointmentUncheckedUpdateManyWithoutCaseNestedInput
    calls?: CallUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseCreateManyInput = {
    id?: number
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    personId: number
    authorId: number
    opponentId?: number | null
    managerId?: number | null
  }

  export type CaseUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type CaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    personId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OriginCreateInput = {
    createdAt?: Date | string
    title: string
    link?: string | null
    categories?: OriginCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    author: EmployeeCreateNestedOneWithoutAuthoredOriginsInput
    persons?: PersonCreateNestedManyWithoutOriginInput
  }

  export type OriginUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    title: string
    link?: string | null
    categories?: OriginCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    authorId: number
    persons?: PersonUncheckedCreateNestedManyWithoutOriginInput
  }

  export type OriginUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: OriginUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    author?: EmployeeUpdateOneRequiredWithoutAuthoredOriginsNestedInput
    persons?: PersonUpdateManyWithoutOriginNestedInput
  }

  export type OriginUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: OriginUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    authorId?: IntFieldUpdateOperationsInput | number
    persons?: PersonUncheckedUpdateManyWithoutOriginNestedInput
  }

  export type OriginCreateManyInput = {
    id?: number
    createdAt?: Date | string
    title: string
    link?: string | null
    categories?: OriginCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    authorId: number
  }

  export type OriginUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: OriginUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
  }

  export type OriginUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: OriginUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type OpponentCreateInput = {
    createdAt?: Date | string
    name: string
    link?: string | null
    info?: string | null
    cases?: CaseCreateNestedManyWithoutOpponentInput
    author: EmployeeCreateNestedOneWithoutAuthoredOpponentsInput
  }

  export type OpponentUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    link?: string | null
    info?: string | null
    authorId: number
    cases?: CaseUncheckedCreateNestedManyWithoutOpponentInput
  }

  export type OpponentUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    cases?: CaseUpdateManyWithoutOpponentNestedInput
    author?: EmployeeUpdateOneRequiredWithoutAuthoredOpponentsNestedInput
  }

  export type OpponentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    cases?: CaseUncheckedUpdateManyWithoutOpponentNestedInput
  }

  export type OpponentCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    link?: string | null
    info?: string | null
    authorId: number
  }

  export type OpponentUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OpponentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type BloggerCreateInput = {
    createdAt?: Date | string
    name: string
    link: string
    phoneNumber?: string | null
    email?: string | null
    info?: string | null
    subscribersCount: bigint | number
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    categories?: BloggerCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    author: EmployeeCreateNestedOneWithoutAuthoredBloggersInput
  }

  export type BloggerUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    link: string
    phoneNumber?: string | null
    email?: string | null
    info?: string | null
    subscribersCount: bigint | number
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    authorId: number
    categories?: BloggerCreatecategoriesInput | $Enums.CASE_CATEGORY[]
  }

  export type BloggerUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    subscribersCount?: BigIntFieldUpdateOperationsInput | bigint | number
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    categories?: BloggerUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    author?: EmployeeUpdateOneRequiredWithoutAuthoredBloggersNestedInput
  }

  export type BloggerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    subscribersCount?: BigIntFieldUpdateOperationsInput | bigint | number
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    categories?: BloggerUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
  }

  export type BloggerCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    link: string
    phoneNumber?: string | null
    email?: string | null
    info?: string | null
    subscribersCount: bigint | number
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    authorId: number
    categories?: BloggerCreatecategoriesInput | $Enums.CASE_CATEGORY[]
  }

  export type BloggerUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    subscribersCount?: BigIntFieldUpdateOperationsInput | bigint | number
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    categories?: BloggerUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
  }

  export type BloggerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    subscribersCount?: BigIntFieldUpdateOperationsInput | bigint | number
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    categories?: BloggerUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
  }

  export type CallCreateInput = {
    createdAt?: Date | string
    callStatus: $Enums.CALL_STATUS
    info?: string | null
    case: CaseCreateNestedOneWithoutCallsInput
    author: EmployeeCreateNestedOneWithoutAuthoredCallsInput
    person: PersonCreateNestedOneWithoutCallsInput
  }

  export type CallUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    callStatus: $Enums.CALL_STATUS
    info?: string | null
    caseId: number
    personId: number
    authorId: number
  }

  export type CallUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callStatus?: EnumCALL_STATUSFieldUpdateOperationsInput | $Enums.CALL_STATUS
    info?: NullableStringFieldUpdateOperationsInput | string | null
    case?: CaseUpdateOneRequiredWithoutCallsNestedInput
    author?: EmployeeUpdateOneRequiredWithoutAuthoredCallsNestedInput
    person?: PersonUpdateOneRequiredWithoutCallsNestedInput
  }

  export type CallUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callStatus?: EnumCALL_STATUSFieldUpdateOperationsInput | $Enums.CALL_STATUS
    info?: NullableStringFieldUpdateOperationsInput | string | null
    caseId?: IntFieldUpdateOperationsInput | number
    personId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type CallCreateManyInput = {
    id?: number
    createdAt?: Date | string
    callStatus: $Enums.CALL_STATUS
    info?: string | null
    caseId: number
    personId: number
    authorId: number
  }

  export type CallUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callStatus?: EnumCALL_STATUSFieldUpdateOperationsInput | $Enums.CALL_STATUS
    info?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CallUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callStatus?: EnumCALL_STATUSFieldUpdateOperationsInput | $Enums.CALL_STATUS
    info?: NullableStringFieldUpdateOperationsInput | string | null
    caseId?: IntFieldUpdateOperationsInput | number
    personId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentCreateInput = {
    createAt?: Date | string
    date: Date | string
    appointmentStatus: $Enums.APPOINTMENT_STATUS
    person: PersonCreateNestedOneWithoutAppointmentsInput
    author: EmployeeCreateNestedOneWithoutAuthoredAppointmentsInput
    case: CaseCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    createAt?: Date | string
    date: Date | string
    appointmentStatus: $Enums.APPOINTMENT_STATUS
    caseId: number
    personId: number
    authorId: number
  }

  export type AppointmentUpdateInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentStatus?: EnumAPPOINTMENT_STATUSFieldUpdateOperationsInput | $Enums.APPOINTMENT_STATUS
    person?: PersonUpdateOneRequiredWithoutAppointmentsNestedInput
    author?: EmployeeUpdateOneRequiredWithoutAuthoredAppointmentsNestedInput
    case?: CaseUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentStatus?: EnumAPPOINTMENT_STATUSFieldUpdateOperationsInput | $Enums.APPOINTMENT_STATUS
    caseId?: IntFieldUpdateOperationsInput | number
    personId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentCreateManyInput = {
    id?: number
    createAt?: Date | string
    date: Date | string
    appointmentStatus: $Enums.APPOINTMENT_STATUS
    caseId: number
    personId: number
    authorId: number
  }

  export type AppointmentUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentStatus?: EnumAPPOINTMENT_STATUSFieldUpdateOperationsInput | $Enums.APPOINTMENT_STATUS
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentStatus?: EnumAPPOINTMENT_STATUSFieldUpdateOperationsInput | $Enums.APPOINTMENT_STATUS
    caseId?: IntFieldUpdateOperationsInput | number
    personId?: IntFieldUpdateOperationsInput | number
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

  export type EnumROLENullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel> | null
    has?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    hasSome?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BloggerListRelationFilter = {
    every?: BloggerWhereInput
    some?: BloggerWhereInput
    none?: BloggerWhereInput
  }

  export type OriginListRelationFilter = {
    every?: OriginWhereInput
    some?: OriginWhereInput
    none?: OriginWhereInput
  }

  export type PersonListRelationFilter = {
    every?: PersonWhereInput
    some?: PersonWhereInput
    none?: PersonWhereInput
  }

  export type CaseListRelationFilter = {
    every?: CaseWhereInput
    some?: CaseWhereInput
    none?: CaseWhereInput
  }

  export type OpponentListRelationFilter = {
    every?: OpponentWhereInput
    some?: OpponentWhereInput
    none?: OpponentWhereInput
  }

  export type CallListRelationFilter = {
    every?: CallWhereInput
    some?: CallWhereInput
    none?: CallWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type BloggerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OriginOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OpponentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CallOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    roles?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
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

  export type EnumLEAD_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.LEAD_STATUS | EnumLEAD_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.LEAD_STATUS[] | ListEnumLEAD_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEAD_STATUS[] | ListEnumLEAD_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumLEAD_STATUSFilter<$PrismaModel> | $Enums.LEAD_STATUS
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type OriginScalarRelationFilter = {
    is?: OriginWhereInput
    isNot?: OriginWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    link?: SortOrder
    email?: SortOrder
    homeAddress?: SortOrder
    authorId?: SortOrder
    originId?: SortOrder
    leadStatus?: SortOrder
  }

  export type PersonAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    originId?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    link?: SortOrder
    email?: SortOrder
    homeAddress?: SortOrder
    authorId?: SortOrder
    originId?: SortOrder
    leadStatus?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    link?: SortOrder
    email?: SortOrder
    homeAddress?: SortOrder
    authorId?: SortOrder
    originId?: SortOrder
    leadStatus?: SortOrder
  }

  export type PersonSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    originId?: SortOrder
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

  export type EnumIMPORTANCEFilter<$PrismaModel = never> = {
    equals?: $Enums.IMPORTANCE | EnumIMPORTANCEFieldRefInput<$PrismaModel>
    in?: $Enums.IMPORTANCE[] | ListEnumIMPORTANCEFieldRefInput<$PrismaModel>
    notIn?: $Enums.IMPORTANCE[] | ListEnumIMPORTANCEFieldRefInput<$PrismaModel>
    not?: NestedEnumIMPORTANCEFilter<$PrismaModel> | $Enums.IMPORTANCE
  }

  export type EnumURGENCYFilter<$PrismaModel = never> = {
    equals?: $Enums.URGENCY | EnumURGENCYFieldRefInput<$PrismaModel>
    in?: $Enums.URGENCY[] | ListEnumURGENCYFieldRefInput<$PrismaModel>
    notIn?: $Enums.URGENCY[] | ListEnumURGENCYFieldRefInput<$PrismaModel>
    not?: NestedEnumURGENCYFilter<$PrismaModel> | $Enums.URGENCY
  }

  export type EnumCASE_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.CASE_STATUS | EnumCASE_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.CASE_STATUS[] | ListEnumCASE_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.CASE_STATUS[] | ListEnumCASE_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumCASE_STATUSFilter<$PrismaModel> | $Enums.CASE_STATUS
  }

  export type EnumCASE_CATEGORYNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.CASE_CATEGORY[] | ListEnumCASE_CATEGORYFieldRefInput<$PrismaModel> | null
    has?: $Enums.CASE_CATEGORY | EnumCASE_CATEGORYFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.CASE_CATEGORY[] | ListEnumCASE_CATEGORYFieldRefInput<$PrismaModel>
    hasSome?: $Enums.CASE_CATEGORY[] | ListEnumCASE_CATEGORYFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type EnumREFUSAL_REASONNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.REFUSAL_REASON | EnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    in?: $Enums.REFUSAL_REASON[] | ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.REFUSAL_REASON[] | ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    not?: NestedEnumREFUSAL_REASONNullableFilter<$PrismaModel> | $Enums.REFUSAL_REASON | null
  }

  export type EnumLEGAL_ACTIONNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LEGAL_ACTION | EnumLEGAL_ACTIONFieldRefInput<$PrismaModel> | null
    in?: $Enums.LEGAL_ACTION[] | ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LEGAL_ACTION[] | ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLEGAL_ACTIONNullableFilter<$PrismaModel> | $Enums.LEGAL_ACTION | null
  }

  export type EnumSTATUS_IN_COURTNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS_IN_COURT | EnumSTATUS_IN_COURTFieldRefInput<$PrismaModel> | null
    in?: $Enums.STATUS_IN_COURT[] | ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.STATUS_IN_COURT[] | ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSTATUS_IN_COURTNullableFilter<$PrismaModel> | $Enums.STATUS_IN_COURT | null
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

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type OpponentNullableScalarRelationFilter = {
    is?: OpponentWhereInput | null
    isNot?: OpponentWhereInput | null
  }

  export type PersonScalarRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type CaseCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    caseImportance?: SortOrder
    caseUrgency?: SortOrder
    caseStatus?: SortOrder
    categories?: SortOrder
    problemShort?: SortOrder
    problemFull?: SortOrder
    nearestTask?: SortOrder
    courtInfo?: SortOrder
    nearestTaskDeadline?: SortOrder
    timeOfPerformance?: SortOrder
    assignmentTime?: SortOrder
    nextDialDate?: SortOrder
    lastDialDate?: SortOrder
    refusalReason?: SortOrder
    legalAction?: SortOrder
    statusInCourt?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
    opponentId?: SortOrder
    managerId?: SortOrder
  }

  export type CaseAvgOrderByAggregateInput = {
    id?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
    opponentId?: SortOrder
    managerId?: SortOrder
  }

  export type CaseMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    caseImportance?: SortOrder
    caseUrgency?: SortOrder
    caseStatus?: SortOrder
    problemShort?: SortOrder
    problemFull?: SortOrder
    nearestTask?: SortOrder
    courtInfo?: SortOrder
    nearestTaskDeadline?: SortOrder
    timeOfPerformance?: SortOrder
    assignmentTime?: SortOrder
    nextDialDate?: SortOrder
    lastDialDate?: SortOrder
    refusalReason?: SortOrder
    legalAction?: SortOrder
    statusInCourt?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
    opponentId?: SortOrder
    managerId?: SortOrder
  }

  export type CaseMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    caseImportance?: SortOrder
    caseUrgency?: SortOrder
    caseStatus?: SortOrder
    problemShort?: SortOrder
    problemFull?: SortOrder
    nearestTask?: SortOrder
    courtInfo?: SortOrder
    nearestTaskDeadline?: SortOrder
    timeOfPerformance?: SortOrder
    assignmentTime?: SortOrder
    nextDialDate?: SortOrder
    lastDialDate?: SortOrder
    refusalReason?: SortOrder
    legalAction?: SortOrder
    statusInCourt?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
    opponentId?: SortOrder
    managerId?: SortOrder
  }

  export type CaseSumOrderByAggregateInput = {
    id?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
    opponentId?: SortOrder
    managerId?: SortOrder
  }

  export type EnumIMPORTANCEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IMPORTANCE | EnumIMPORTANCEFieldRefInput<$PrismaModel>
    in?: $Enums.IMPORTANCE[] | ListEnumIMPORTANCEFieldRefInput<$PrismaModel>
    notIn?: $Enums.IMPORTANCE[] | ListEnumIMPORTANCEFieldRefInput<$PrismaModel>
    not?: NestedEnumIMPORTANCEWithAggregatesFilter<$PrismaModel> | $Enums.IMPORTANCE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIMPORTANCEFilter<$PrismaModel>
    _max?: NestedEnumIMPORTANCEFilter<$PrismaModel>
  }

  export type EnumURGENCYWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.URGENCY | EnumURGENCYFieldRefInput<$PrismaModel>
    in?: $Enums.URGENCY[] | ListEnumURGENCYFieldRefInput<$PrismaModel>
    notIn?: $Enums.URGENCY[] | ListEnumURGENCYFieldRefInput<$PrismaModel>
    not?: NestedEnumURGENCYWithAggregatesFilter<$PrismaModel> | $Enums.URGENCY
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumURGENCYFilter<$PrismaModel>
    _max?: NestedEnumURGENCYFilter<$PrismaModel>
  }

  export type EnumCASE_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CASE_STATUS | EnumCASE_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.CASE_STATUS[] | ListEnumCASE_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.CASE_STATUS[] | ListEnumCASE_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumCASE_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.CASE_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCASE_STATUSFilter<$PrismaModel>
    _max?: NestedEnumCASE_STATUSFilter<$PrismaModel>
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

  export type EnumREFUSAL_REASONNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.REFUSAL_REASON | EnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    in?: $Enums.REFUSAL_REASON[] | ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.REFUSAL_REASON[] | ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    not?: NestedEnumREFUSAL_REASONNullableWithAggregatesFilter<$PrismaModel> | $Enums.REFUSAL_REASON | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumREFUSAL_REASONNullableFilter<$PrismaModel>
    _max?: NestedEnumREFUSAL_REASONNullableFilter<$PrismaModel>
  }

  export type EnumLEGAL_ACTIONNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LEGAL_ACTION | EnumLEGAL_ACTIONFieldRefInput<$PrismaModel> | null
    in?: $Enums.LEGAL_ACTION[] | ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LEGAL_ACTION[] | ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLEGAL_ACTIONNullableWithAggregatesFilter<$PrismaModel> | $Enums.LEGAL_ACTION | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLEGAL_ACTIONNullableFilter<$PrismaModel>
    _max?: NestedEnumLEGAL_ACTIONNullableFilter<$PrismaModel>
  }

  export type EnumSTATUS_IN_COURTNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS_IN_COURT | EnumSTATUS_IN_COURTFieldRefInput<$PrismaModel> | null
    in?: $Enums.STATUS_IN_COURT[] | ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.STATUS_IN_COURT[] | ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSTATUS_IN_COURTNullableWithAggregatesFilter<$PrismaModel> | $Enums.STATUS_IN_COURT | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSTATUS_IN_COURTNullableFilter<$PrismaModel>
    _max?: NestedEnumSTATUS_IN_COURTNullableFilter<$PrismaModel>
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

  export type OriginCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    link?: SortOrder
    categories?: SortOrder
    authorId?: SortOrder
  }

  export type OriginAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type OriginMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    link?: SortOrder
    authorId?: SortOrder
  }

  export type OriginMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    link?: SortOrder
    authorId?: SortOrder
  }

  export type OriginSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type OpponentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    link?: SortOrder
    info?: SortOrder
    authorId?: SortOrder
  }

  export type OpponentAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type OpponentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    link?: SortOrder
    info?: SortOrder
    authorId?: SortOrder
  }

  export type OpponentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    link?: SortOrder
    info?: SortOrder
    authorId?: SortOrder
  }

  export type OpponentSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BloggerCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    link?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    info?: SortOrder
    subscribersCount?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    authorId?: SortOrder
    categories?: SortOrder
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
    createdAt?: SortOrder
    name?: SortOrder
    link?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    info?: SortOrder
    subscribersCount?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    authorId?: SortOrder
  }

  export type BloggerMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    link?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    info?: SortOrder
    subscribersCount?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    authorId?: SortOrder
  }

  export type BloggerSumOrderByAggregateInput = {
    id?: SortOrder
    subscribersCount?: SortOrder
    priceSOM?: SortOrder
    priceUSD?: SortOrder
    authorId?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumCALL_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.CALL_STATUS | EnumCALL_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.CALL_STATUS[] | ListEnumCALL_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.CALL_STATUS[] | ListEnumCALL_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumCALL_STATUSFilter<$PrismaModel> | $Enums.CALL_STATUS
  }

  export type CaseScalarRelationFilter = {
    is?: CaseWhereInput
    isNot?: CaseWhereInput
  }

  export type CallCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    callStatus?: SortOrder
    info?: SortOrder
    caseId?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
  }

  export type CallAvgOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
  }

  export type CallMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    callStatus?: SortOrder
    info?: SortOrder
    caseId?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
  }

  export type CallMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    callStatus?: SortOrder
    info?: SortOrder
    caseId?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
  }

  export type CallSumOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
  }

  export type EnumCALL_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CALL_STATUS | EnumCALL_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.CALL_STATUS[] | ListEnumCALL_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.CALL_STATUS[] | ListEnumCALL_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumCALL_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.CALL_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCALL_STATUSFilter<$PrismaModel>
    _max?: NestedEnumCALL_STATUSFilter<$PrismaModel>
  }

  export type EnumAPPOINTMENT_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.APPOINTMENT_STATUS | EnumAPPOINTMENT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.APPOINTMENT_STATUS[] | ListEnumAPPOINTMENT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.APPOINTMENT_STATUS[] | ListEnumAPPOINTMENT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumAPPOINTMENT_STATUSFilter<$PrismaModel> | $Enums.APPOINTMENT_STATUS
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    date?: SortOrder
    appointmentStatus?: SortOrder
    caseId?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    date?: SortOrder
    appointmentStatus?: SortOrder
    caseId?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    date?: SortOrder
    appointmentStatus?: SortOrder
    caseId?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    personId?: SortOrder
    authorId?: SortOrder
  }

  export type EnumAPPOINTMENT_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.APPOINTMENT_STATUS | EnumAPPOINTMENT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.APPOINTMENT_STATUS[] | ListEnumAPPOINTMENT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.APPOINTMENT_STATUS[] | ListEnumAPPOINTMENT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumAPPOINTMENT_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.APPOINTMENT_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAPPOINTMENT_STATUSFilter<$PrismaModel>
    _max?: NestedEnumAPPOINTMENT_STATUSFilter<$PrismaModel>
  }

  export type EmployeeCreaterolesInput = {
    set: $Enums.ROLE[]
  }

  export type BloggerCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BloggerCreateWithoutAuthorInput, BloggerUncheckedCreateWithoutAuthorInput> | BloggerCreateWithoutAuthorInput[] | BloggerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BloggerCreateOrConnectWithoutAuthorInput | BloggerCreateOrConnectWithoutAuthorInput[]
    createMany?: BloggerCreateManyAuthorInputEnvelope
    connect?: BloggerWhereUniqueInput | BloggerWhereUniqueInput[]
  }

  export type OriginCreateNestedManyWithoutAuthorInput = {
    create?: XOR<OriginCreateWithoutAuthorInput, OriginUncheckedCreateWithoutAuthorInput> | OriginCreateWithoutAuthorInput[] | OriginUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: OriginCreateOrConnectWithoutAuthorInput | OriginCreateOrConnectWithoutAuthorInput[]
    createMany?: OriginCreateManyAuthorInputEnvelope
    connect?: OriginWhereUniqueInput | OriginWhereUniqueInput[]
  }

  export type PersonCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PersonCreateWithoutAuthorInput, PersonUncheckedCreateWithoutAuthorInput> | PersonCreateWithoutAuthorInput[] | PersonUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutAuthorInput | PersonCreateOrConnectWithoutAuthorInput[]
    createMany?: PersonCreateManyAuthorInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type CaseCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CaseCreateWithoutAuthorInput, CaseUncheckedCreateWithoutAuthorInput> | CaseCreateWithoutAuthorInput[] | CaseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutAuthorInput | CaseCreateOrConnectWithoutAuthorInput[]
    createMany?: CaseCreateManyAuthorInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type CaseCreateNestedManyWithoutManagerInput = {
    create?: XOR<CaseCreateWithoutManagerInput, CaseUncheckedCreateWithoutManagerInput> | CaseCreateWithoutManagerInput[] | CaseUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutManagerInput | CaseCreateOrConnectWithoutManagerInput[]
    createMany?: CaseCreateManyManagerInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type OpponentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<OpponentCreateWithoutAuthorInput, OpponentUncheckedCreateWithoutAuthorInput> | OpponentCreateWithoutAuthorInput[] | OpponentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: OpponentCreateOrConnectWithoutAuthorInput | OpponentCreateOrConnectWithoutAuthorInput[]
    createMany?: OpponentCreateManyAuthorInputEnvelope
    connect?: OpponentWhereUniqueInput | OpponentWhereUniqueInput[]
  }

  export type CallCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CallCreateWithoutAuthorInput, CallUncheckedCreateWithoutAuthorInput> | CallCreateWithoutAuthorInput[] | CallUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CallCreateOrConnectWithoutAuthorInput | CallCreateOrConnectWithoutAuthorInput[]
    createMany?: CallCreateManyAuthorInputEnvelope
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AppointmentCreateWithoutAuthorInput, AppointmentUncheckedCreateWithoutAuthorInput> | AppointmentCreateWithoutAuthorInput[] | AppointmentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutAuthorInput | AppointmentCreateOrConnectWithoutAuthorInput[]
    createMany?: AppointmentCreateManyAuthorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type BloggerUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BloggerCreateWithoutAuthorInput, BloggerUncheckedCreateWithoutAuthorInput> | BloggerCreateWithoutAuthorInput[] | BloggerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BloggerCreateOrConnectWithoutAuthorInput | BloggerCreateOrConnectWithoutAuthorInput[]
    createMany?: BloggerCreateManyAuthorInputEnvelope
    connect?: BloggerWhereUniqueInput | BloggerWhereUniqueInput[]
  }

  export type OriginUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<OriginCreateWithoutAuthorInput, OriginUncheckedCreateWithoutAuthorInput> | OriginCreateWithoutAuthorInput[] | OriginUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: OriginCreateOrConnectWithoutAuthorInput | OriginCreateOrConnectWithoutAuthorInput[]
    createMany?: OriginCreateManyAuthorInputEnvelope
    connect?: OriginWhereUniqueInput | OriginWhereUniqueInput[]
  }

  export type PersonUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PersonCreateWithoutAuthorInput, PersonUncheckedCreateWithoutAuthorInput> | PersonCreateWithoutAuthorInput[] | PersonUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutAuthorInput | PersonCreateOrConnectWithoutAuthorInput[]
    createMany?: PersonCreateManyAuthorInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type CaseUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CaseCreateWithoutAuthorInput, CaseUncheckedCreateWithoutAuthorInput> | CaseCreateWithoutAuthorInput[] | CaseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutAuthorInput | CaseCreateOrConnectWithoutAuthorInput[]
    createMany?: CaseCreateManyAuthorInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type CaseUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<CaseCreateWithoutManagerInput, CaseUncheckedCreateWithoutManagerInput> | CaseCreateWithoutManagerInput[] | CaseUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutManagerInput | CaseCreateOrConnectWithoutManagerInput[]
    createMany?: CaseCreateManyManagerInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type OpponentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<OpponentCreateWithoutAuthorInput, OpponentUncheckedCreateWithoutAuthorInput> | OpponentCreateWithoutAuthorInput[] | OpponentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: OpponentCreateOrConnectWithoutAuthorInput | OpponentCreateOrConnectWithoutAuthorInput[]
    createMany?: OpponentCreateManyAuthorInputEnvelope
    connect?: OpponentWhereUniqueInput | OpponentWhereUniqueInput[]
  }

  export type CallUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CallCreateWithoutAuthorInput, CallUncheckedCreateWithoutAuthorInput> | CallCreateWithoutAuthorInput[] | CallUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CallCreateOrConnectWithoutAuthorInput | CallCreateOrConnectWithoutAuthorInput[]
    createMany?: CallCreateManyAuthorInputEnvelope
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AppointmentCreateWithoutAuthorInput, AppointmentUncheckedCreateWithoutAuthorInput> | AppointmentCreateWithoutAuthorInput[] | AppointmentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutAuthorInput | AppointmentCreateOrConnectWithoutAuthorInput[]
    createMany?: AppointmentCreateManyAuthorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EmployeeUpdaterolesInput = {
    set?: $Enums.ROLE[]
    push?: $Enums.ROLE | $Enums.ROLE[]
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

  export type OriginUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<OriginCreateWithoutAuthorInput, OriginUncheckedCreateWithoutAuthorInput> | OriginCreateWithoutAuthorInput[] | OriginUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: OriginCreateOrConnectWithoutAuthorInput | OriginCreateOrConnectWithoutAuthorInput[]
    upsert?: OriginUpsertWithWhereUniqueWithoutAuthorInput | OriginUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: OriginCreateManyAuthorInputEnvelope
    set?: OriginWhereUniqueInput | OriginWhereUniqueInput[]
    disconnect?: OriginWhereUniqueInput | OriginWhereUniqueInput[]
    delete?: OriginWhereUniqueInput | OriginWhereUniqueInput[]
    connect?: OriginWhereUniqueInput | OriginWhereUniqueInput[]
    update?: OriginUpdateWithWhereUniqueWithoutAuthorInput | OriginUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: OriginUpdateManyWithWhereWithoutAuthorInput | OriginUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: OriginScalarWhereInput | OriginScalarWhereInput[]
  }

  export type PersonUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PersonCreateWithoutAuthorInput, PersonUncheckedCreateWithoutAuthorInput> | PersonCreateWithoutAuthorInput[] | PersonUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutAuthorInput | PersonCreateOrConnectWithoutAuthorInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutAuthorInput | PersonUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PersonCreateManyAuthorInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutAuthorInput | PersonUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutAuthorInput | PersonUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type CaseUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CaseCreateWithoutAuthorInput, CaseUncheckedCreateWithoutAuthorInput> | CaseCreateWithoutAuthorInput[] | CaseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutAuthorInput | CaseCreateOrConnectWithoutAuthorInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutAuthorInput | CaseUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CaseCreateManyAuthorInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutAuthorInput | CaseUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutAuthorInput | CaseUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type CaseUpdateManyWithoutManagerNestedInput = {
    create?: XOR<CaseCreateWithoutManagerInput, CaseUncheckedCreateWithoutManagerInput> | CaseCreateWithoutManagerInput[] | CaseUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutManagerInput | CaseCreateOrConnectWithoutManagerInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutManagerInput | CaseUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: CaseCreateManyManagerInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutManagerInput | CaseUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutManagerInput | CaseUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type OpponentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<OpponentCreateWithoutAuthorInput, OpponentUncheckedCreateWithoutAuthorInput> | OpponentCreateWithoutAuthorInput[] | OpponentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: OpponentCreateOrConnectWithoutAuthorInput | OpponentCreateOrConnectWithoutAuthorInput[]
    upsert?: OpponentUpsertWithWhereUniqueWithoutAuthorInput | OpponentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: OpponentCreateManyAuthorInputEnvelope
    set?: OpponentWhereUniqueInput | OpponentWhereUniqueInput[]
    disconnect?: OpponentWhereUniqueInput | OpponentWhereUniqueInput[]
    delete?: OpponentWhereUniqueInput | OpponentWhereUniqueInput[]
    connect?: OpponentWhereUniqueInput | OpponentWhereUniqueInput[]
    update?: OpponentUpdateWithWhereUniqueWithoutAuthorInput | OpponentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: OpponentUpdateManyWithWhereWithoutAuthorInput | OpponentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: OpponentScalarWhereInput | OpponentScalarWhereInput[]
  }

  export type CallUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CallCreateWithoutAuthorInput, CallUncheckedCreateWithoutAuthorInput> | CallCreateWithoutAuthorInput[] | CallUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CallCreateOrConnectWithoutAuthorInput | CallCreateOrConnectWithoutAuthorInput[]
    upsert?: CallUpsertWithWhereUniqueWithoutAuthorInput | CallUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CallCreateManyAuthorInputEnvelope
    set?: CallWhereUniqueInput | CallWhereUniqueInput[]
    disconnect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    delete?: CallWhereUniqueInput | CallWhereUniqueInput[]
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    update?: CallUpdateWithWhereUniqueWithoutAuthorInput | CallUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CallUpdateManyWithWhereWithoutAuthorInput | CallUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CallScalarWhereInput | CallScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AppointmentCreateWithoutAuthorInput, AppointmentUncheckedCreateWithoutAuthorInput> | AppointmentCreateWithoutAuthorInput[] | AppointmentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutAuthorInput | AppointmentCreateOrConnectWithoutAuthorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutAuthorInput | AppointmentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AppointmentCreateManyAuthorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutAuthorInput | AppointmentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutAuthorInput | AppointmentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type OriginUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<OriginCreateWithoutAuthorInput, OriginUncheckedCreateWithoutAuthorInput> | OriginCreateWithoutAuthorInput[] | OriginUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: OriginCreateOrConnectWithoutAuthorInput | OriginCreateOrConnectWithoutAuthorInput[]
    upsert?: OriginUpsertWithWhereUniqueWithoutAuthorInput | OriginUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: OriginCreateManyAuthorInputEnvelope
    set?: OriginWhereUniqueInput | OriginWhereUniqueInput[]
    disconnect?: OriginWhereUniqueInput | OriginWhereUniqueInput[]
    delete?: OriginWhereUniqueInput | OriginWhereUniqueInput[]
    connect?: OriginWhereUniqueInput | OriginWhereUniqueInput[]
    update?: OriginUpdateWithWhereUniqueWithoutAuthorInput | OriginUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: OriginUpdateManyWithWhereWithoutAuthorInput | OriginUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: OriginScalarWhereInput | OriginScalarWhereInput[]
  }

  export type PersonUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PersonCreateWithoutAuthorInput, PersonUncheckedCreateWithoutAuthorInput> | PersonCreateWithoutAuthorInput[] | PersonUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutAuthorInput | PersonCreateOrConnectWithoutAuthorInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutAuthorInput | PersonUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PersonCreateManyAuthorInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutAuthorInput | PersonUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutAuthorInput | PersonUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type CaseUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CaseCreateWithoutAuthorInput, CaseUncheckedCreateWithoutAuthorInput> | CaseCreateWithoutAuthorInput[] | CaseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutAuthorInput | CaseCreateOrConnectWithoutAuthorInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutAuthorInput | CaseUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CaseCreateManyAuthorInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutAuthorInput | CaseUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutAuthorInput | CaseUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type CaseUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<CaseCreateWithoutManagerInput, CaseUncheckedCreateWithoutManagerInput> | CaseCreateWithoutManagerInput[] | CaseUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutManagerInput | CaseCreateOrConnectWithoutManagerInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutManagerInput | CaseUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: CaseCreateManyManagerInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutManagerInput | CaseUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutManagerInput | CaseUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type OpponentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<OpponentCreateWithoutAuthorInput, OpponentUncheckedCreateWithoutAuthorInput> | OpponentCreateWithoutAuthorInput[] | OpponentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: OpponentCreateOrConnectWithoutAuthorInput | OpponentCreateOrConnectWithoutAuthorInput[]
    upsert?: OpponentUpsertWithWhereUniqueWithoutAuthorInput | OpponentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: OpponentCreateManyAuthorInputEnvelope
    set?: OpponentWhereUniqueInput | OpponentWhereUniqueInput[]
    disconnect?: OpponentWhereUniqueInput | OpponentWhereUniqueInput[]
    delete?: OpponentWhereUniqueInput | OpponentWhereUniqueInput[]
    connect?: OpponentWhereUniqueInput | OpponentWhereUniqueInput[]
    update?: OpponentUpdateWithWhereUniqueWithoutAuthorInput | OpponentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: OpponentUpdateManyWithWhereWithoutAuthorInput | OpponentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: OpponentScalarWhereInput | OpponentScalarWhereInput[]
  }

  export type CallUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CallCreateWithoutAuthorInput, CallUncheckedCreateWithoutAuthorInput> | CallCreateWithoutAuthorInput[] | CallUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CallCreateOrConnectWithoutAuthorInput | CallCreateOrConnectWithoutAuthorInput[]
    upsert?: CallUpsertWithWhereUniqueWithoutAuthorInput | CallUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CallCreateManyAuthorInputEnvelope
    set?: CallWhereUniqueInput | CallWhereUniqueInput[]
    disconnect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    delete?: CallWhereUniqueInput | CallWhereUniqueInput[]
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    update?: CallUpdateWithWhereUniqueWithoutAuthorInput | CallUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CallUpdateManyWithWhereWithoutAuthorInput | CallUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CallScalarWhereInput | CallScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AppointmentCreateWithoutAuthorInput, AppointmentUncheckedCreateWithoutAuthorInput> | AppointmentCreateWithoutAuthorInput[] | AppointmentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutAuthorInput | AppointmentCreateOrConnectWithoutAuthorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutAuthorInput | AppointmentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AppointmentCreateManyAuthorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutAuthorInput | AppointmentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutAuthorInput | AppointmentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutAuthoredPersonsInput = {
    create?: XOR<EmployeeCreateWithoutAuthoredPersonsInput, EmployeeUncheckedCreateWithoutAuthoredPersonsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAuthoredPersonsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type OriginCreateNestedOneWithoutPersonsInput = {
    create?: XOR<OriginCreateWithoutPersonsInput, OriginUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: OriginCreateOrConnectWithoutPersonsInput
    connect?: OriginWhereUniqueInput
  }

  export type CaseCreateNestedManyWithoutPersonInput = {
    create?: XOR<CaseCreateWithoutPersonInput, CaseUncheckedCreateWithoutPersonInput> | CaseCreateWithoutPersonInput[] | CaseUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutPersonInput | CaseCreateOrConnectWithoutPersonInput[]
    createMany?: CaseCreateManyPersonInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type CallCreateNestedManyWithoutPersonInput = {
    create?: XOR<CallCreateWithoutPersonInput, CallUncheckedCreateWithoutPersonInput> | CallCreateWithoutPersonInput[] | CallUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: CallCreateOrConnectWithoutPersonInput | CallCreateOrConnectWithoutPersonInput[]
    createMany?: CallCreateManyPersonInputEnvelope
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutPersonInput = {
    create?: XOR<AppointmentCreateWithoutPersonInput, AppointmentUncheckedCreateWithoutPersonInput> | AppointmentCreateWithoutPersonInput[] | AppointmentUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPersonInput | AppointmentCreateOrConnectWithoutPersonInput[]
    createMany?: AppointmentCreateManyPersonInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type CaseUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<CaseCreateWithoutPersonInput, CaseUncheckedCreateWithoutPersonInput> | CaseCreateWithoutPersonInput[] | CaseUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutPersonInput | CaseCreateOrConnectWithoutPersonInput[]
    createMany?: CaseCreateManyPersonInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type CallUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<CallCreateWithoutPersonInput, CallUncheckedCreateWithoutPersonInput> | CallCreateWithoutPersonInput[] | CallUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: CallCreateOrConnectWithoutPersonInput | CallCreateOrConnectWithoutPersonInput[]
    createMany?: CallCreateManyPersonInputEnvelope
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<AppointmentCreateWithoutPersonInput, AppointmentUncheckedCreateWithoutPersonInput> | AppointmentCreateWithoutPersonInput[] | AppointmentUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPersonInput | AppointmentCreateOrConnectWithoutPersonInput[]
    createMany?: AppointmentCreateManyPersonInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumLEAD_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.LEAD_STATUS
  }

  export type EmployeeUpdateOneRequiredWithoutAuthoredPersonsNestedInput = {
    create?: XOR<EmployeeCreateWithoutAuthoredPersonsInput, EmployeeUncheckedCreateWithoutAuthoredPersonsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAuthoredPersonsInput
    upsert?: EmployeeUpsertWithoutAuthoredPersonsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAuthoredPersonsInput, EmployeeUpdateWithoutAuthoredPersonsInput>, EmployeeUncheckedUpdateWithoutAuthoredPersonsInput>
  }

  export type OriginUpdateOneRequiredWithoutPersonsNestedInput = {
    create?: XOR<OriginCreateWithoutPersonsInput, OriginUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: OriginCreateOrConnectWithoutPersonsInput
    upsert?: OriginUpsertWithoutPersonsInput
    connect?: OriginWhereUniqueInput
    update?: XOR<XOR<OriginUpdateToOneWithWhereWithoutPersonsInput, OriginUpdateWithoutPersonsInput>, OriginUncheckedUpdateWithoutPersonsInput>
  }

  export type CaseUpdateManyWithoutPersonNestedInput = {
    create?: XOR<CaseCreateWithoutPersonInput, CaseUncheckedCreateWithoutPersonInput> | CaseCreateWithoutPersonInput[] | CaseUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutPersonInput | CaseCreateOrConnectWithoutPersonInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutPersonInput | CaseUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: CaseCreateManyPersonInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutPersonInput | CaseUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutPersonInput | CaseUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type CallUpdateManyWithoutPersonNestedInput = {
    create?: XOR<CallCreateWithoutPersonInput, CallUncheckedCreateWithoutPersonInput> | CallCreateWithoutPersonInput[] | CallUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: CallCreateOrConnectWithoutPersonInput | CallCreateOrConnectWithoutPersonInput[]
    upsert?: CallUpsertWithWhereUniqueWithoutPersonInput | CallUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: CallCreateManyPersonInputEnvelope
    set?: CallWhereUniqueInput | CallWhereUniqueInput[]
    disconnect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    delete?: CallWhereUniqueInput | CallWhereUniqueInput[]
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    update?: CallUpdateWithWhereUniqueWithoutPersonInput | CallUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: CallUpdateManyWithWhereWithoutPersonInput | CallUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: CallScalarWhereInput | CallScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutPersonNestedInput = {
    create?: XOR<AppointmentCreateWithoutPersonInput, AppointmentUncheckedCreateWithoutPersonInput> | AppointmentCreateWithoutPersonInput[] | AppointmentUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPersonInput | AppointmentCreateOrConnectWithoutPersonInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPersonInput | AppointmentUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: AppointmentCreateManyPersonInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPersonInput | AppointmentUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPersonInput | AppointmentUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type CaseUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<CaseCreateWithoutPersonInput, CaseUncheckedCreateWithoutPersonInput> | CaseCreateWithoutPersonInput[] | CaseUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutPersonInput | CaseCreateOrConnectWithoutPersonInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutPersonInput | CaseUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: CaseCreateManyPersonInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutPersonInput | CaseUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutPersonInput | CaseUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type CallUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<CallCreateWithoutPersonInput, CallUncheckedCreateWithoutPersonInput> | CallCreateWithoutPersonInput[] | CallUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: CallCreateOrConnectWithoutPersonInput | CallCreateOrConnectWithoutPersonInput[]
    upsert?: CallUpsertWithWhereUniqueWithoutPersonInput | CallUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: CallCreateManyPersonInputEnvelope
    set?: CallWhereUniqueInput | CallWhereUniqueInput[]
    disconnect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    delete?: CallWhereUniqueInput | CallWhereUniqueInput[]
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    update?: CallUpdateWithWhereUniqueWithoutPersonInput | CallUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: CallUpdateManyWithWhereWithoutPersonInput | CallUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: CallScalarWhereInput | CallScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<AppointmentCreateWithoutPersonInput, AppointmentUncheckedCreateWithoutPersonInput> | AppointmentCreateWithoutPersonInput[] | AppointmentUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPersonInput | AppointmentCreateOrConnectWithoutPersonInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPersonInput | AppointmentUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: AppointmentCreateManyPersonInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPersonInput | AppointmentUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPersonInput | AppointmentUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type CaseCreatecategoriesInput = {
    set: $Enums.CASE_CATEGORY[]
  }

  export type EmployeeCreateNestedOneWithoutAuthoredCasesInput = {
    create?: XOR<EmployeeCreateWithoutAuthoredCasesInput, EmployeeUncheckedCreateWithoutAuthoredCasesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAuthoredCasesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutManagedCasesInput = {
    create?: XOR<EmployeeCreateWithoutManagedCasesInput, EmployeeUncheckedCreateWithoutManagedCasesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutManagedCasesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type OpponentCreateNestedOneWithoutCasesInput = {
    create?: XOR<OpponentCreateWithoutCasesInput, OpponentUncheckedCreateWithoutCasesInput>
    connectOrCreate?: OpponentCreateOrConnectWithoutCasesInput
    connect?: OpponentWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutCasesInput = {
    create?: XOR<PersonCreateWithoutCasesInput, PersonUncheckedCreateWithoutCasesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCasesInput
    connect?: PersonWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutCaseInput = {
    create?: XOR<AppointmentCreateWithoutCaseInput, AppointmentUncheckedCreateWithoutCaseInput> | AppointmentCreateWithoutCaseInput[] | AppointmentUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCaseInput | AppointmentCreateOrConnectWithoutCaseInput[]
    createMany?: AppointmentCreateManyCaseInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type CallCreateNestedManyWithoutCaseInput = {
    create?: XOR<CallCreateWithoutCaseInput, CallUncheckedCreateWithoutCaseInput> | CallCreateWithoutCaseInput[] | CallUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: CallCreateOrConnectWithoutCaseInput | CallCreateOrConnectWithoutCaseInput[]
    createMany?: CallCreateManyCaseInputEnvelope
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutCaseInput = {
    create?: XOR<AppointmentCreateWithoutCaseInput, AppointmentUncheckedCreateWithoutCaseInput> | AppointmentCreateWithoutCaseInput[] | AppointmentUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCaseInput | AppointmentCreateOrConnectWithoutCaseInput[]
    createMany?: AppointmentCreateManyCaseInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type CallUncheckedCreateNestedManyWithoutCaseInput = {
    create?: XOR<CallCreateWithoutCaseInput, CallUncheckedCreateWithoutCaseInput> | CallCreateWithoutCaseInput[] | CallUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: CallCreateOrConnectWithoutCaseInput | CallCreateOrConnectWithoutCaseInput[]
    createMany?: CallCreateManyCaseInputEnvelope
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
  }

  export type EnumIMPORTANCEFieldUpdateOperationsInput = {
    set?: $Enums.IMPORTANCE
  }

  export type EnumURGENCYFieldUpdateOperationsInput = {
    set?: $Enums.URGENCY
  }

  export type EnumCASE_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.CASE_STATUS
  }

  export type CaseUpdatecategoriesInput = {
    set?: $Enums.CASE_CATEGORY[]
    push?: $Enums.CASE_CATEGORY | $Enums.CASE_CATEGORY[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumREFUSAL_REASONFieldUpdateOperationsInput = {
    set?: $Enums.REFUSAL_REASON | null
  }

  export type NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput = {
    set?: $Enums.LEGAL_ACTION | null
  }

  export type NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput = {
    set?: $Enums.STATUS_IN_COURT | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EmployeeUpdateOneRequiredWithoutAuthoredCasesNestedInput = {
    create?: XOR<EmployeeCreateWithoutAuthoredCasesInput, EmployeeUncheckedCreateWithoutAuthoredCasesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAuthoredCasesInput
    upsert?: EmployeeUpsertWithoutAuthoredCasesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAuthoredCasesInput, EmployeeUpdateWithoutAuthoredCasesInput>, EmployeeUncheckedUpdateWithoutAuthoredCasesInput>
  }

  export type EmployeeUpdateOneWithoutManagedCasesNestedInput = {
    create?: XOR<EmployeeCreateWithoutManagedCasesInput, EmployeeUncheckedCreateWithoutManagedCasesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutManagedCasesInput
    upsert?: EmployeeUpsertWithoutManagedCasesInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutManagedCasesInput, EmployeeUpdateWithoutManagedCasesInput>, EmployeeUncheckedUpdateWithoutManagedCasesInput>
  }

  export type OpponentUpdateOneWithoutCasesNestedInput = {
    create?: XOR<OpponentCreateWithoutCasesInput, OpponentUncheckedCreateWithoutCasesInput>
    connectOrCreate?: OpponentCreateOrConnectWithoutCasesInput
    upsert?: OpponentUpsertWithoutCasesInput
    disconnect?: OpponentWhereInput | boolean
    delete?: OpponentWhereInput | boolean
    connect?: OpponentWhereUniqueInput
    update?: XOR<XOR<OpponentUpdateToOneWithWhereWithoutCasesInput, OpponentUpdateWithoutCasesInput>, OpponentUncheckedUpdateWithoutCasesInput>
  }

  export type PersonUpdateOneRequiredWithoutCasesNestedInput = {
    create?: XOR<PersonCreateWithoutCasesInput, PersonUncheckedCreateWithoutCasesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCasesInput
    upsert?: PersonUpsertWithoutCasesInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutCasesInput, PersonUpdateWithoutCasesInput>, PersonUncheckedUpdateWithoutCasesInput>
  }

  export type AppointmentUpdateManyWithoutCaseNestedInput = {
    create?: XOR<AppointmentCreateWithoutCaseInput, AppointmentUncheckedCreateWithoutCaseInput> | AppointmentCreateWithoutCaseInput[] | AppointmentUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCaseInput | AppointmentCreateOrConnectWithoutCaseInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCaseInput | AppointmentUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: AppointmentCreateManyCaseInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCaseInput | AppointmentUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCaseInput | AppointmentUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type CallUpdateManyWithoutCaseNestedInput = {
    create?: XOR<CallCreateWithoutCaseInput, CallUncheckedCreateWithoutCaseInput> | CallCreateWithoutCaseInput[] | CallUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: CallCreateOrConnectWithoutCaseInput | CallCreateOrConnectWithoutCaseInput[]
    upsert?: CallUpsertWithWhereUniqueWithoutCaseInput | CallUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: CallCreateManyCaseInputEnvelope
    set?: CallWhereUniqueInput | CallWhereUniqueInput[]
    disconnect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    delete?: CallWhereUniqueInput | CallWhereUniqueInput[]
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    update?: CallUpdateWithWhereUniqueWithoutCaseInput | CallUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: CallUpdateManyWithWhereWithoutCaseInput | CallUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: CallScalarWhereInput | CallScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppointmentUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: XOR<AppointmentCreateWithoutCaseInput, AppointmentUncheckedCreateWithoutCaseInput> | AppointmentCreateWithoutCaseInput[] | AppointmentUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCaseInput | AppointmentCreateOrConnectWithoutCaseInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCaseInput | AppointmentUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: AppointmentCreateManyCaseInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCaseInput | AppointmentUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCaseInput | AppointmentUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type CallUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: XOR<CallCreateWithoutCaseInput, CallUncheckedCreateWithoutCaseInput> | CallCreateWithoutCaseInput[] | CallUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: CallCreateOrConnectWithoutCaseInput | CallCreateOrConnectWithoutCaseInput[]
    upsert?: CallUpsertWithWhereUniqueWithoutCaseInput | CallUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: CallCreateManyCaseInputEnvelope
    set?: CallWhereUniqueInput | CallWhereUniqueInput[]
    disconnect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    delete?: CallWhereUniqueInput | CallWhereUniqueInput[]
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    update?: CallUpdateWithWhereUniqueWithoutCaseInput | CallUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: CallUpdateManyWithWhereWithoutCaseInput | CallUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: CallScalarWhereInput | CallScalarWhereInput[]
  }

  export type OriginCreatecategoriesInput = {
    set: $Enums.CASE_CATEGORY[]
  }

  export type EmployeeCreateNestedOneWithoutAuthoredOriginsInput = {
    create?: XOR<EmployeeCreateWithoutAuthoredOriginsInput, EmployeeUncheckedCreateWithoutAuthoredOriginsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAuthoredOriginsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type PersonCreateNestedManyWithoutOriginInput = {
    create?: XOR<PersonCreateWithoutOriginInput, PersonUncheckedCreateWithoutOriginInput> | PersonCreateWithoutOriginInput[] | PersonUncheckedCreateWithoutOriginInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutOriginInput | PersonCreateOrConnectWithoutOriginInput[]
    createMany?: PersonCreateManyOriginInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type PersonUncheckedCreateNestedManyWithoutOriginInput = {
    create?: XOR<PersonCreateWithoutOriginInput, PersonUncheckedCreateWithoutOriginInput> | PersonCreateWithoutOriginInput[] | PersonUncheckedCreateWithoutOriginInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutOriginInput | PersonCreateOrConnectWithoutOriginInput[]
    createMany?: PersonCreateManyOriginInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type OriginUpdatecategoriesInput = {
    set?: $Enums.CASE_CATEGORY[]
    push?: $Enums.CASE_CATEGORY | $Enums.CASE_CATEGORY[]
  }

  export type EmployeeUpdateOneRequiredWithoutAuthoredOriginsNestedInput = {
    create?: XOR<EmployeeCreateWithoutAuthoredOriginsInput, EmployeeUncheckedCreateWithoutAuthoredOriginsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAuthoredOriginsInput
    upsert?: EmployeeUpsertWithoutAuthoredOriginsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAuthoredOriginsInput, EmployeeUpdateWithoutAuthoredOriginsInput>, EmployeeUncheckedUpdateWithoutAuthoredOriginsInput>
  }

  export type PersonUpdateManyWithoutOriginNestedInput = {
    create?: XOR<PersonCreateWithoutOriginInput, PersonUncheckedCreateWithoutOriginInput> | PersonCreateWithoutOriginInput[] | PersonUncheckedCreateWithoutOriginInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutOriginInput | PersonCreateOrConnectWithoutOriginInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutOriginInput | PersonUpsertWithWhereUniqueWithoutOriginInput[]
    createMany?: PersonCreateManyOriginInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutOriginInput | PersonUpdateWithWhereUniqueWithoutOriginInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutOriginInput | PersonUpdateManyWithWhereWithoutOriginInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type PersonUncheckedUpdateManyWithoutOriginNestedInput = {
    create?: XOR<PersonCreateWithoutOriginInput, PersonUncheckedCreateWithoutOriginInput> | PersonCreateWithoutOriginInput[] | PersonUncheckedCreateWithoutOriginInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutOriginInput | PersonCreateOrConnectWithoutOriginInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutOriginInput | PersonUpsertWithWhereUniqueWithoutOriginInput[]
    createMany?: PersonCreateManyOriginInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutOriginInput | PersonUpdateWithWhereUniqueWithoutOriginInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutOriginInput | PersonUpdateManyWithWhereWithoutOriginInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type CaseCreateNestedManyWithoutOpponentInput = {
    create?: XOR<CaseCreateWithoutOpponentInput, CaseUncheckedCreateWithoutOpponentInput> | CaseCreateWithoutOpponentInput[] | CaseUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutOpponentInput | CaseCreateOrConnectWithoutOpponentInput[]
    createMany?: CaseCreateManyOpponentInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type EmployeeCreateNestedOneWithoutAuthoredOpponentsInput = {
    create?: XOR<EmployeeCreateWithoutAuthoredOpponentsInput, EmployeeUncheckedCreateWithoutAuthoredOpponentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAuthoredOpponentsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type CaseUncheckedCreateNestedManyWithoutOpponentInput = {
    create?: XOR<CaseCreateWithoutOpponentInput, CaseUncheckedCreateWithoutOpponentInput> | CaseCreateWithoutOpponentInput[] | CaseUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutOpponentInput | CaseCreateOrConnectWithoutOpponentInput[]
    createMany?: CaseCreateManyOpponentInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type CaseUpdateManyWithoutOpponentNestedInput = {
    create?: XOR<CaseCreateWithoutOpponentInput, CaseUncheckedCreateWithoutOpponentInput> | CaseCreateWithoutOpponentInput[] | CaseUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutOpponentInput | CaseCreateOrConnectWithoutOpponentInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutOpponentInput | CaseUpsertWithWhereUniqueWithoutOpponentInput[]
    createMany?: CaseCreateManyOpponentInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutOpponentInput | CaseUpdateWithWhereUniqueWithoutOpponentInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutOpponentInput | CaseUpdateManyWithWhereWithoutOpponentInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type EmployeeUpdateOneRequiredWithoutAuthoredOpponentsNestedInput = {
    create?: XOR<EmployeeCreateWithoutAuthoredOpponentsInput, EmployeeUncheckedCreateWithoutAuthoredOpponentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAuthoredOpponentsInput
    upsert?: EmployeeUpsertWithoutAuthoredOpponentsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAuthoredOpponentsInput, EmployeeUpdateWithoutAuthoredOpponentsInput>, EmployeeUncheckedUpdateWithoutAuthoredOpponentsInput>
  }

  export type CaseUncheckedUpdateManyWithoutOpponentNestedInput = {
    create?: XOR<CaseCreateWithoutOpponentInput, CaseUncheckedCreateWithoutOpponentInput> | CaseCreateWithoutOpponentInput[] | CaseUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutOpponentInput | CaseCreateOrConnectWithoutOpponentInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutOpponentInput | CaseUpsertWithWhereUniqueWithoutOpponentInput[]
    createMany?: CaseCreateManyOpponentInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutOpponentInput | CaseUpdateWithWhereUniqueWithoutOpponentInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutOpponentInput | CaseUpdateManyWithWhereWithoutOpponentInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type BloggerCreatecategoriesInput = {
    set: $Enums.CASE_CATEGORY[]
  }

  export type EmployeeCreateNestedOneWithoutAuthoredBloggersInput = {
    create?: XOR<EmployeeCreateWithoutAuthoredBloggersInput, EmployeeUncheckedCreateWithoutAuthoredBloggersInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAuthoredBloggersInput
    connect?: EmployeeWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BloggerUpdatecategoriesInput = {
    set?: $Enums.CASE_CATEGORY[]
    push?: $Enums.CASE_CATEGORY | $Enums.CASE_CATEGORY[]
  }

  export type EmployeeUpdateOneRequiredWithoutAuthoredBloggersNestedInput = {
    create?: XOR<EmployeeCreateWithoutAuthoredBloggersInput, EmployeeUncheckedCreateWithoutAuthoredBloggersInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAuthoredBloggersInput
    upsert?: EmployeeUpsertWithoutAuthoredBloggersInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAuthoredBloggersInput, EmployeeUpdateWithoutAuthoredBloggersInput>, EmployeeUncheckedUpdateWithoutAuthoredBloggersInput>
  }

  export type CaseCreateNestedOneWithoutCallsInput = {
    create?: XOR<CaseCreateWithoutCallsInput, CaseUncheckedCreateWithoutCallsInput>
    connectOrCreate?: CaseCreateOrConnectWithoutCallsInput
    connect?: CaseWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutAuthoredCallsInput = {
    create?: XOR<EmployeeCreateWithoutAuthoredCallsInput, EmployeeUncheckedCreateWithoutAuthoredCallsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAuthoredCallsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutCallsInput = {
    create?: XOR<PersonCreateWithoutCallsInput, PersonUncheckedCreateWithoutCallsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCallsInput
    connect?: PersonWhereUniqueInput
  }

  export type EnumCALL_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.CALL_STATUS
  }

  export type CaseUpdateOneRequiredWithoutCallsNestedInput = {
    create?: XOR<CaseCreateWithoutCallsInput, CaseUncheckedCreateWithoutCallsInput>
    connectOrCreate?: CaseCreateOrConnectWithoutCallsInput
    upsert?: CaseUpsertWithoutCallsInput
    connect?: CaseWhereUniqueInput
    update?: XOR<XOR<CaseUpdateToOneWithWhereWithoutCallsInput, CaseUpdateWithoutCallsInput>, CaseUncheckedUpdateWithoutCallsInput>
  }

  export type EmployeeUpdateOneRequiredWithoutAuthoredCallsNestedInput = {
    create?: XOR<EmployeeCreateWithoutAuthoredCallsInput, EmployeeUncheckedCreateWithoutAuthoredCallsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAuthoredCallsInput
    upsert?: EmployeeUpsertWithoutAuthoredCallsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAuthoredCallsInput, EmployeeUpdateWithoutAuthoredCallsInput>, EmployeeUncheckedUpdateWithoutAuthoredCallsInput>
  }

  export type PersonUpdateOneRequiredWithoutCallsNestedInput = {
    create?: XOR<PersonCreateWithoutCallsInput, PersonUncheckedCreateWithoutCallsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCallsInput
    upsert?: PersonUpsertWithoutCallsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutCallsInput, PersonUpdateWithoutCallsInput>, PersonUncheckedUpdateWithoutCallsInput>
  }

  export type PersonCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<PersonCreateWithoutAppointmentsInput, PersonUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutAppointmentsInput
    connect?: PersonWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutAuthoredAppointmentsInput = {
    create?: XOR<EmployeeCreateWithoutAuthoredAppointmentsInput, EmployeeUncheckedCreateWithoutAuthoredAppointmentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAuthoredAppointmentsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type CaseCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<CaseCreateWithoutAppointmentsInput, CaseUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: CaseCreateOrConnectWithoutAppointmentsInput
    connect?: CaseWhereUniqueInput
  }

  export type EnumAPPOINTMENT_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.APPOINTMENT_STATUS
  }

  export type PersonUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<PersonCreateWithoutAppointmentsInput, PersonUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutAppointmentsInput
    upsert?: PersonUpsertWithoutAppointmentsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutAppointmentsInput, PersonUpdateWithoutAppointmentsInput>, PersonUncheckedUpdateWithoutAppointmentsInput>
  }

  export type EmployeeUpdateOneRequiredWithoutAuthoredAppointmentsNestedInput = {
    create?: XOR<EmployeeCreateWithoutAuthoredAppointmentsInput, EmployeeUncheckedCreateWithoutAuthoredAppointmentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAuthoredAppointmentsInput
    upsert?: EmployeeUpsertWithoutAuthoredAppointmentsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAuthoredAppointmentsInput, EmployeeUpdateWithoutAuthoredAppointmentsInput>, EmployeeUncheckedUpdateWithoutAuthoredAppointmentsInput>
  }

  export type CaseUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<CaseCreateWithoutAppointmentsInput, CaseUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: CaseCreateOrConnectWithoutAppointmentsInput
    upsert?: CaseUpsertWithoutAppointmentsInput
    connect?: CaseWhereUniqueInput
    update?: XOR<XOR<CaseUpdateToOneWithWhereWithoutAppointmentsInput, CaseUpdateWithoutAppointmentsInput>, CaseUncheckedUpdateWithoutAppointmentsInput>
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

  export type NestedEnumLEAD_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.LEAD_STATUS | EnumLEAD_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.LEAD_STATUS[] | ListEnumLEAD_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEAD_STATUS[] | ListEnumLEAD_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumLEAD_STATUSFilter<$PrismaModel> | $Enums.LEAD_STATUS
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

  export type NestedEnumLEAD_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LEAD_STATUS | EnumLEAD_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.LEAD_STATUS[] | ListEnumLEAD_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEAD_STATUS[] | ListEnumLEAD_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumLEAD_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.LEAD_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLEAD_STATUSFilter<$PrismaModel>
    _max?: NestedEnumLEAD_STATUSFilter<$PrismaModel>
  }

  export type NestedEnumIMPORTANCEFilter<$PrismaModel = never> = {
    equals?: $Enums.IMPORTANCE | EnumIMPORTANCEFieldRefInput<$PrismaModel>
    in?: $Enums.IMPORTANCE[] | ListEnumIMPORTANCEFieldRefInput<$PrismaModel>
    notIn?: $Enums.IMPORTANCE[] | ListEnumIMPORTANCEFieldRefInput<$PrismaModel>
    not?: NestedEnumIMPORTANCEFilter<$PrismaModel> | $Enums.IMPORTANCE
  }

  export type NestedEnumURGENCYFilter<$PrismaModel = never> = {
    equals?: $Enums.URGENCY | EnumURGENCYFieldRefInput<$PrismaModel>
    in?: $Enums.URGENCY[] | ListEnumURGENCYFieldRefInput<$PrismaModel>
    notIn?: $Enums.URGENCY[] | ListEnumURGENCYFieldRefInput<$PrismaModel>
    not?: NestedEnumURGENCYFilter<$PrismaModel> | $Enums.URGENCY
  }

  export type NestedEnumCASE_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.CASE_STATUS | EnumCASE_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.CASE_STATUS[] | ListEnumCASE_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.CASE_STATUS[] | ListEnumCASE_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumCASE_STATUSFilter<$PrismaModel> | $Enums.CASE_STATUS
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

  export type NestedEnumREFUSAL_REASONNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.REFUSAL_REASON | EnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    in?: $Enums.REFUSAL_REASON[] | ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.REFUSAL_REASON[] | ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    not?: NestedEnumREFUSAL_REASONNullableFilter<$PrismaModel> | $Enums.REFUSAL_REASON | null
  }

  export type NestedEnumLEGAL_ACTIONNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LEGAL_ACTION | EnumLEGAL_ACTIONFieldRefInput<$PrismaModel> | null
    in?: $Enums.LEGAL_ACTION[] | ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LEGAL_ACTION[] | ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLEGAL_ACTIONNullableFilter<$PrismaModel> | $Enums.LEGAL_ACTION | null
  }

  export type NestedEnumSTATUS_IN_COURTNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS_IN_COURT | EnumSTATUS_IN_COURTFieldRefInput<$PrismaModel> | null
    in?: $Enums.STATUS_IN_COURT[] | ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.STATUS_IN_COURT[] | ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSTATUS_IN_COURTNullableFilter<$PrismaModel> | $Enums.STATUS_IN_COURT | null
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

  export type NestedEnumIMPORTANCEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IMPORTANCE | EnumIMPORTANCEFieldRefInput<$PrismaModel>
    in?: $Enums.IMPORTANCE[] | ListEnumIMPORTANCEFieldRefInput<$PrismaModel>
    notIn?: $Enums.IMPORTANCE[] | ListEnumIMPORTANCEFieldRefInput<$PrismaModel>
    not?: NestedEnumIMPORTANCEWithAggregatesFilter<$PrismaModel> | $Enums.IMPORTANCE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIMPORTANCEFilter<$PrismaModel>
    _max?: NestedEnumIMPORTANCEFilter<$PrismaModel>
  }

  export type NestedEnumURGENCYWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.URGENCY | EnumURGENCYFieldRefInput<$PrismaModel>
    in?: $Enums.URGENCY[] | ListEnumURGENCYFieldRefInput<$PrismaModel>
    notIn?: $Enums.URGENCY[] | ListEnumURGENCYFieldRefInput<$PrismaModel>
    not?: NestedEnumURGENCYWithAggregatesFilter<$PrismaModel> | $Enums.URGENCY
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumURGENCYFilter<$PrismaModel>
    _max?: NestedEnumURGENCYFilter<$PrismaModel>
  }

  export type NestedEnumCASE_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CASE_STATUS | EnumCASE_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.CASE_STATUS[] | ListEnumCASE_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.CASE_STATUS[] | ListEnumCASE_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumCASE_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.CASE_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCASE_STATUSFilter<$PrismaModel>
    _max?: NestedEnumCASE_STATUSFilter<$PrismaModel>
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

  export type NestedEnumREFUSAL_REASONNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.REFUSAL_REASON | EnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    in?: $Enums.REFUSAL_REASON[] | ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.REFUSAL_REASON[] | ListEnumREFUSAL_REASONFieldRefInput<$PrismaModel> | null
    not?: NestedEnumREFUSAL_REASONNullableWithAggregatesFilter<$PrismaModel> | $Enums.REFUSAL_REASON | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumREFUSAL_REASONNullableFilter<$PrismaModel>
    _max?: NestedEnumREFUSAL_REASONNullableFilter<$PrismaModel>
  }

  export type NestedEnumLEGAL_ACTIONNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LEGAL_ACTION | EnumLEGAL_ACTIONFieldRefInput<$PrismaModel> | null
    in?: $Enums.LEGAL_ACTION[] | ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LEGAL_ACTION[] | ListEnumLEGAL_ACTIONFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLEGAL_ACTIONNullableWithAggregatesFilter<$PrismaModel> | $Enums.LEGAL_ACTION | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLEGAL_ACTIONNullableFilter<$PrismaModel>
    _max?: NestedEnumLEGAL_ACTIONNullableFilter<$PrismaModel>
  }

  export type NestedEnumSTATUS_IN_COURTNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS_IN_COURT | EnumSTATUS_IN_COURTFieldRefInput<$PrismaModel> | null
    in?: $Enums.STATUS_IN_COURT[] | ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.STATUS_IN_COURT[] | ListEnumSTATUS_IN_COURTFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSTATUS_IN_COURTNullableWithAggregatesFilter<$PrismaModel> | $Enums.STATUS_IN_COURT | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSTATUS_IN_COURTNullableFilter<$PrismaModel>
    _max?: NestedEnumSTATUS_IN_COURTNullableFilter<$PrismaModel>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumCALL_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.CALL_STATUS | EnumCALL_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.CALL_STATUS[] | ListEnumCALL_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.CALL_STATUS[] | ListEnumCALL_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumCALL_STATUSFilter<$PrismaModel> | $Enums.CALL_STATUS
  }

  export type NestedEnumCALL_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CALL_STATUS | EnumCALL_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.CALL_STATUS[] | ListEnumCALL_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.CALL_STATUS[] | ListEnumCALL_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumCALL_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.CALL_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCALL_STATUSFilter<$PrismaModel>
    _max?: NestedEnumCALL_STATUSFilter<$PrismaModel>
  }

  export type NestedEnumAPPOINTMENT_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.APPOINTMENT_STATUS | EnumAPPOINTMENT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.APPOINTMENT_STATUS[] | ListEnumAPPOINTMENT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.APPOINTMENT_STATUS[] | ListEnumAPPOINTMENT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumAPPOINTMENT_STATUSFilter<$PrismaModel> | $Enums.APPOINTMENT_STATUS
  }

  export type NestedEnumAPPOINTMENT_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.APPOINTMENT_STATUS | EnumAPPOINTMENT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.APPOINTMENT_STATUS[] | ListEnumAPPOINTMENT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.APPOINTMENT_STATUS[] | ListEnumAPPOINTMENT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumAPPOINTMENT_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.APPOINTMENT_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAPPOINTMENT_STATUSFilter<$PrismaModel>
    _max?: NestedEnumAPPOINTMENT_STATUSFilter<$PrismaModel>
  }

  export type BloggerCreateWithoutAuthorInput = {
    createdAt?: Date | string
    name: string
    link: string
    phoneNumber?: string | null
    email?: string | null
    info?: string | null
    subscribersCount: bigint | number
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    categories?: BloggerCreatecategoriesInput | $Enums.CASE_CATEGORY[]
  }

  export type BloggerUncheckedCreateWithoutAuthorInput = {
    id?: number
    createdAt?: Date | string
    name: string
    link: string
    phoneNumber?: string | null
    email?: string | null
    info?: string | null
    subscribersCount: bigint | number
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    categories?: BloggerCreatecategoriesInput | $Enums.CASE_CATEGORY[]
  }

  export type BloggerCreateOrConnectWithoutAuthorInput = {
    where: BloggerWhereUniqueInput
    create: XOR<BloggerCreateWithoutAuthorInput, BloggerUncheckedCreateWithoutAuthorInput>
  }

  export type BloggerCreateManyAuthorInputEnvelope = {
    data: BloggerCreateManyAuthorInput | BloggerCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type OriginCreateWithoutAuthorInput = {
    createdAt?: Date | string
    title: string
    link?: string | null
    categories?: OriginCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    persons?: PersonCreateNestedManyWithoutOriginInput
  }

  export type OriginUncheckedCreateWithoutAuthorInput = {
    id?: number
    createdAt?: Date | string
    title: string
    link?: string | null
    categories?: OriginCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    persons?: PersonUncheckedCreateNestedManyWithoutOriginInput
  }

  export type OriginCreateOrConnectWithoutAuthorInput = {
    where: OriginWhereUniqueInput
    create: XOR<OriginCreateWithoutAuthorInput, OriginUncheckedCreateWithoutAuthorInput>
  }

  export type OriginCreateManyAuthorInputEnvelope = {
    data: OriginCreateManyAuthorInput | OriginCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PersonCreateWithoutAuthorInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    link?: string | null
    email?: string | null
    homeAddress?: string | null
    leadStatus?: $Enums.LEAD_STATUS
    origin: OriginCreateNestedOneWithoutPersonsInput
    cases?: CaseCreateNestedManyWithoutPersonInput
    calls?: CallCreateNestedManyWithoutPersonInput
    appointments?: AppointmentCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutAuthorInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    link?: string | null
    email?: string | null
    homeAddress?: string | null
    originId: number
    leadStatus?: $Enums.LEAD_STATUS
    cases?: CaseUncheckedCreateNestedManyWithoutPersonInput
    calls?: CallUncheckedCreateNestedManyWithoutPersonInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutAuthorInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutAuthorInput, PersonUncheckedCreateWithoutAuthorInput>
  }

  export type PersonCreateManyAuthorInputEnvelope = {
    data: PersonCreateManyAuthorInput | PersonCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type CaseCreateWithoutAuthorInput = {
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    manager?: EmployeeCreateNestedOneWithoutManagedCasesInput
    opponent?: OpponentCreateNestedOneWithoutCasesInput
    person: PersonCreateNestedOneWithoutCasesInput
    appointments?: AppointmentCreateNestedManyWithoutCaseInput
    calls?: CallCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutAuthorInput = {
    id?: number
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    personId: number
    opponentId?: number | null
    managerId?: number | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutCaseInput
    calls?: CallUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutAuthorInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutAuthorInput, CaseUncheckedCreateWithoutAuthorInput>
  }

  export type CaseCreateManyAuthorInputEnvelope = {
    data: CaseCreateManyAuthorInput | CaseCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type CaseCreateWithoutManagerInput = {
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    author: EmployeeCreateNestedOneWithoutAuthoredCasesInput
    opponent?: OpponentCreateNestedOneWithoutCasesInput
    person: PersonCreateNestedOneWithoutCasesInput
    appointments?: AppointmentCreateNestedManyWithoutCaseInput
    calls?: CallCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutManagerInput = {
    id?: number
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    personId: number
    authorId: number
    opponentId?: number | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutCaseInput
    calls?: CallUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutManagerInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutManagerInput, CaseUncheckedCreateWithoutManagerInput>
  }

  export type CaseCreateManyManagerInputEnvelope = {
    data: CaseCreateManyManagerInput | CaseCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type OpponentCreateWithoutAuthorInput = {
    createdAt?: Date | string
    name: string
    link?: string | null
    info?: string | null
    cases?: CaseCreateNestedManyWithoutOpponentInput
  }

  export type OpponentUncheckedCreateWithoutAuthorInput = {
    id?: number
    createdAt?: Date | string
    name: string
    link?: string | null
    info?: string | null
    cases?: CaseUncheckedCreateNestedManyWithoutOpponentInput
  }

  export type OpponentCreateOrConnectWithoutAuthorInput = {
    where: OpponentWhereUniqueInput
    create: XOR<OpponentCreateWithoutAuthorInput, OpponentUncheckedCreateWithoutAuthorInput>
  }

  export type OpponentCreateManyAuthorInputEnvelope = {
    data: OpponentCreateManyAuthorInput | OpponentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type CallCreateWithoutAuthorInput = {
    createdAt?: Date | string
    callStatus: $Enums.CALL_STATUS
    info?: string | null
    case: CaseCreateNestedOneWithoutCallsInput
    person: PersonCreateNestedOneWithoutCallsInput
  }

  export type CallUncheckedCreateWithoutAuthorInput = {
    id?: number
    createdAt?: Date | string
    callStatus: $Enums.CALL_STATUS
    info?: string | null
    caseId: number
    personId: number
  }

  export type CallCreateOrConnectWithoutAuthorInput = {
    where: CallWhereUniqueInput
    create: XOR<CallCreateWithoutAuthorInput, CallUncheckedCreateWithoutAuthorInput>
  }

  export type CallCreateManyAuthorInputEnvelope = {
    data: CallCreateManyAuthorInput | CallCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutAuthorInput = {
    createAt?: Date | string
    date: Date | string
    appointmentStatus: $Enums.APPOINTMENT_STATUS
    person: PersonCreateNestedOneWithoutAppointmentsInput
    case: CaseCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutAuthorInput = {
    id?: number
    createAt?: Date | string
    date: Date | string
    appointmentStatus: $Enums.APPOINTMENT_STATUS
    caseId: number
    personId: number
  }

  export type AppointmentCreateOrConnectWithoutAuthorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutAuthorInput, AppointmentUncheckedCreateWithoutAuthorInput>
  }

  export type AppointmentCreateManyAuthorInputEnvelope = {
    data: AppointmentCreateManyAuthorInput | AppointmentCreateManyAuthorInput[]
    skipDuplicates?: boolean
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
    createdAt?: DateTimeFilter<"Blogger"> | Date | string
    name?: StringFilter<"Blogger"> | string
    link?: StringFilter<"Blogger"> | string
    phoneNumber?: StringNullableFilter<"Blogger"> | string | null
    email?: StringNullableFilter<"Blogger"> | string | null
    info?: StringNullableFilter<"Blogger"> | string | null
    subscribersCount?: BigIntFilter<"Blogger"> | bigint | number
    priceSOM?: BigIntNullableFilter<"Blogger"> | bigint | number | null
    priceUSD?: BigIntNullableFilter<"Blogger"> | bigint | number | null
    authorId?: IntFilter<"Blogger"> | number
    categories?: EnumCASE_CATEGORYNullableListFilter<"Blogger">
  }

  export type OriginUpsertWithWhereUniqueWithoutAuthorInput = {
    where: OriginWhereUniqueInput
    update: XOR<OriginUpdateWithoutAuthorInput, OriginUncheckedUpdateWithoutAuthorInput>
    create: XOR<OriginCreateWithoutAuthorInput, OriginUncheckedCreateWithoutAuthorInput>
  }

  export type OriginUpdateWithWhereUniqueWithoutAuthorInput = {
    where: OriginWhereUniqueInput
    data: XOR<OriginUpdateWithoutAuthorInput, OriginUncheckedUpdateWithoutAuthorInput>
  }

  export type OriginUpdateManyWithWhereWithoutAuthorInput = {
    where: OriginScalarWhereInput
    data: XOR<OriginUpdateManyMutationInput, OriginUncheckedUpdateManyWithoutAuthorInput>
  }

  export type OriginScalarWhereInput = {
    AND?: OriginScalarWhereInput | OriginScalarWhereInput[]
    OR?: OriginScalarWhereInput[]
    NOT?: OriginScalarWhereInput | OriginScalarWhereInput[]
    id?: IntFilter<"Origin"> | number
    createdAt?: DateTimeFilter<"Origin"> | Date | string
    title?: StringFilter<"Origin"> | string
    link?: StringNullableFilter<"Origin"> | string | null
    categories?: EnumCASE_CATEGORYNullableListFilter<"Origin">
    authorId?: IntFilter<"Origin"> | number
  }

  export type PersonUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutAuthorInput, PersonUncheckedUpdateWithoutAuthorInput>
    create: XOR<PersonCreateWithoutAuthorInput, PersonUncheckedCreateWithoutAuthorInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutAuthorInput, PersonUncheckedUpdateWithoutAuthorInput>
  }

  export type PersonUpdateManyWithWhereWithoutAuthorInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PersonScalarWhereInput = {
    AND?: PersonScalarWhereInput | PersonScalarWhereInput[]
    OR?: PersonScalarWhereInput[]
    NOT?: PersonScalarWhereInput | PersonScalarWhereInput[]
    id?: IntFilter<"Person"> | number
    createdAt?: DateTimeFilter<"Person"> | Date | string
    name?: StringFilter<"Person"> | string
    phoneNumber?: StringNullableFilter<"Person"> | string | null
    link?: StringNullableFilter<"Person"> | string | null
    email?: StringNullableFilter<"Person"> | string | null
    homeAddress?: StringNullableFilter<"Person"> | string | null
    authorId?: IntFilter<"Person"> | number
    originId?: IntFilter<"Person"> | number
    leadStatus?: EnumLEAD_STATUSFilter<"Person"> | $Enums.LEAD_STATUS
  }

  export type CaseUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CaseWhereUniqueInput
    update: XOR<CaseUpdateWithoutAuthorInput, CaseUncheckedUpdateWithoutAuthorInput>
    create: XOR<CaseCreateWithoutAuthorInput, CaseUncheckedCreateWithoutAuthorInput>
  }

  export type CaseUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CaseWhereUniqueInput
    data: XOR<CaseUpdateWithoutAuthorInput, CaseUncheckedUpdateWithoutAuthorInput>
  }

  export type CaseUpdateManyWithWhereWithoutAuthorInput = {
    where: CaseScalarWhereInput
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CaseScalarWhereInput = {
    AND?: CaseScalarWhereInput | CaseScalarWhereInput[]
    OR?: CaseScalarWhereInput[]
    NOT?: CaseScalarWhereInput | CaseScalarWhereInput[]
    id?: IntFilter<"Case"> | number
    createdAt?: DateTimeFilter<"Case"> | Date | string
    caseImportance?: EnumIMPORTANCEFilter<"Case"> | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFilter<"Case"> | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFilter<"Case"> | $Enums.CASE_STATUS
    categories?: EnumCASE_CATEGORYNullableListFilter<"Case">
    problemShort?: StringNullableFilter<"Case"> | string | null
    problemFull?: StringNullableFilter<"Case"> | string | null
    nearestTask?: StringNullableFilter<"Case"> | string | null
    courtInfo?: StringNullableFilter<"Case"> | string | null
    nearestTaskDeadline?: DateTimeNullableFilter<"Case"> | Date | string | null
    timeOfPerformance?: DateTimeNullableFilter<"Case"> | Date | string | null
    assignmentTime?: DateTimeNullableFilter<"Case"> | Date | string | null
    nextDialDate?: DateTimeNullableFilter<"Case"> | Date | string | null
    lastDialDate?: DateTimeNullableFilter<"Case"> | Date | string | null
    refusalReason?: EnumREFUSAL_REASONNullableFilter<"Case"> | $Enums.REFUSAL_REASON | null
    legalAction?: EnumLEGAL_ACTIONNullableFilter<"Case"> | $Enums.LEGAL_ACTION | null
    statusInCourt?: EnumSTATUS_IN_COURTNullableFilter<"Case"> | $Enums.STATUS_IN_COURT | null
    priceSOM?: BigIntNullableFilter<"Case"> | bigint | number | null
    priceUSD?: BigIntNullableFilter<"Case"> | bigint | number | null
    personId?: IntFilter<"Case"> | number
    authorId?: IntFilter<"Case"> | number
    opponentId?: IntNullableFilter<"Case"> | number | null
    managerId?: IntNullableFilter<"Case"> | number | null
  }

  export type CaseUpsertWithWhereUniqueWithoutManagerInput = {
    where: CaseWhereUniqueInput
    update: XOR<CaseUpdateWithoutManagerInput, CaseUncheckedUpdateWithoutManagerInput>
    create: XOR<CaseCreateWithoutManagerInput, CaseUncheckedCreateWithoutManagerInput>
  }

  export type CaseUpdateWithWhereUniqueWithoutManagerInput = {
    where: CaseWhereUniqueInput
    data: XOR<CaseUpdateWithoutManagerInput, CaseUncheckedUpdateWithoutManagerInput>
  }

  export type CaseUpdateManyWithWhereWithoutManagerInput = {
    where: CaseScalarWhereInput
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyWithoutManagerInput>
  }

  export type OpponentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: OpponentWhereUniqueInput
    update: XOR<OpponentUpdateWithoutAuthorInput, OpponentUncheckedUpdateWithoutAuthorInput>
    create: XOR<OpponentCreateWithoutAuthorInput, OpponentUncheckedCreateWithoutAuthorInput>
  }

  export type OpponentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: OpponentWhereUniqueInput
    data: XOR<OpponentUpdateWithoutAuthorInput, OpponentUncheckedUpdateWithoutAuthorInput>
  }

  export type OpponentUpdateManyWithWhereWithoutAuthorInput = {
    where: OpponentScalarWhereInput
    data: XOR<OpponentUpdateManyMutationInput, OpponentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type OpponentScalarWhereInput = {
    AND?: OpponentScalarWhereInput | OpponentScalarWhereInput[]
    OR?: OpponentScalarWhereInput[]
    NOT?: OpponentScalarWhereInput | OpponentScalarWhereInput[]
    id?: IntFilter<"Opponent"> | number
    createdAt?: DateTimeFilter<"Opponent"> | Date | string
    name?: StringFilter<"Opponent"> | string
    link?: StringNullableFilter<"Opponent"> | string | null
    info?: StringNullableFilter<"Opponent"> | string | null
    authorId?: IntFilter<"Opponent"> | number
  }

  export type CallUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CallWhereUniqueInput
    update: XOR<CallUpdateWithoutAuthorInput, CallUncheckedUpdateWithoutAuthorInput>
    create: XOR<CallCreateWithoutAuthorInput, CallUncheckedCreateWithoutAuthorInput>
  }

  export type CallUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CallWhereUniqueInput
    data: XOR<CallUpdateWithoutAuthorInput, CallUncheckedUpdateWithoutAuthorInput>
  }

  export type CallUpdateManyWithWhereWithoutAuthorInput = {
    where: CallScalarWhereInput
    data: XOR<CallUpdateManyMutationInput, CallUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CallScalarWhereInput = {
    AND?: CallScalarWhereInput | CallScalarWhereInput[]
    OR?: CallScalarWhereInput[]
    NOT?: CallScalarWhereInput | CallScalarWhereInput[]
    id?: IntFilter<"Call"> | number
    createdAt?: DateTimeFilter<"Call"> | Date | string
    callStatus?: EnumCALL_STATUSFilter<"Call"> | $Enums.CALL_STATUS
    info?: StringNullableFilter<"Call"> | string | null
    caseId?: IntFilter<"Call"> | number
    personId?: IntFilter<"Call"> | number
    authorId?: IntFilter<"Call"> | number
  }

  export type AppointmentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutAuthorInput, AppointmentUncheckedUpdateWithoutAuthorInput>
    create: XOR<AppointmentCreateWithoutAuthorInput, AppointmentUncheckedCreateWithoutAuthorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutAuthorInput, AppointmentUncheckedUpdateWithoutAuthorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutAuthorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: IntFilter<"Appointment"> | number
    createAt?: DateTimeFilter<"Appointment"> | Date | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    appointmentStatus?: EnumAPPOINTMENT_STATUSFilter<"Appointment"> | $Enums.APPOINTMENT_STATUS
    caseId?: IntFilter<"Appointment"> | number
    personId?: IntFilter<"Appointment"> | number
    authorId?: IntFilter<"Appointment"> | number
  }

  export type EmployeeCreateWithoutAuthoredPersonsInput = {
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerCreateNestedManyWithoutAuthorInput
    authoredOrigins?: OriginCreateNestedManyWithoutAuthorInput
    authoredCases?: CaseCreateNestedManyWithoutAuthorInput
    managedCases?: CaseCreateNestedManyWithoutManagerInput
    authoredOpponents?: OpponentCreateNestedManyWithoutAuthorInput
    authoredCalls?: CallCreateNestedManyWithoutAuthorInput
    authoredAppointments?: AppointmentCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeUncheckedCreateWithoutAuthoredPersonsInput = {
    id?: number
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUncheckedCreateNestedManyWithoutAuthorInput
    authoredOrigins?: OriginUncheckedCreateNestedManyWithoutAuthorInput
    authoredCases?: CaseUncheckedCreateNestedManyWithoutAuthorInput
    managedCases?: CaseUncheckedCreateNestedManyWithoutManagerInput
    authoredOpponents?: OpponentUncheckedCreateNestedManyWithoutAuthorInput
    authoredCalls?: CallUncheckedCreateNestedManyWithoutAuthorInput
    authoredAppointments?: AppointmentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeCreateOrConnectWithoutAuthoredPersonsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAuthoredPersonsInput, EmployeeUncheckedCreateWithoutAuthoredPersonsInput>
  }

  export type OriginCreateWithoutPersonsInput = {
    createdAt?: Date | string
    title: string
    link?: string | null
    categories?: OriginCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    author: EmployeeCreateNestedOneWithoutAuthoredOriginsInput
  }

  export type OriginUncheckedCreateWithoutPersonsInput = {
    id?: number
    createdAt?: Date | string
    title: string
    link?: string | null
    categories?: OriginCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    authorId: number
  }

  export type OriginCreateOrConnectWithoutPersonsInput = {
    where: OriginWhereUniqueInput
    create: XOR<OriginCreateWithoutPersonsInput, OriginUncheckedCreateWithoutPersonsInput>
  }

  export type CaseCreateWithoutPersonInput = {
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    author: EmployeeCreateNestedOneWithoutAuthoredCasesInput
    manager?: EmployeeCreateNestedOneWithoutManagedCasesInput
    opponent?: OpponentCreateNestedOneWithoutCasesInput
    appointments?: AppointmentCreateNestedManyWithoutCaseInput
    calls?: CallCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutPersonInput = {
    id?: number
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    authorId: number
    opponentId?: number | null
    managerId?: number | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutCaseInput
    calls?: CallUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutPersonInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutPersonInput, CaseUncheckedCreateWithoutPersonInput>
  }

  export type CaseCreateManyPersonInputEnvelope = {
    data: CaseCreateManyPersonInput | CaseCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type CallCreateWithoutPersonInput = {
    createdAt?: Date | string
    callStatus: $Enums.CALL_STATUS
    info?: string | null
    case: CaseCreateNestedOneWithoutCallsInput
    author: EmployeeCreateNestedOneWithoutAuthoredCallsInput
  }

  export type CallUncheckedCreateWithoutPersonInput = {
    id?: number
    createdAt?: Date | string
    callStatus: $Enums.CALL_STATUS
    info?: string | null
    caseId: number
    authorId: number
  }

  export type CallCreateOrConnectWithoutPersonInput = {
    where: CallWhereUniqueInput
    create: XOR<CallCreateWithoutPersonInput, CallUncheckedCreateWithoutPersonInput>
  }

  export type CallCreateManyPersonInputEnvelope = {
    data: CallCreateManyPersonInput | CallCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutPersonInput = {
    createAt?: Date | string
    date: Date | string
    appointmentStatus: $Enums.APPOINTMENT_STATUS
    author: EmployeeCreateNestedOneWithoutAuthoredAppointmentsInput
    case: CaseCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutPersonInput = {
    id?: number
    createAt?: Date | string
    date: Date | string
    appointmentStatus: $Enums.APPOINTMENT_STATUS
    caseId: number
    authorId: number
  }

  export type AppointmentCreateOrConnectWithoutPersonInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPersonInput, AppointmentUncheckedCreateWithoutPersonInput>
  }

  export type AppointmentCreateManyPersonInputEnvelope = {
    data: AppointmentCreateManyPersonInput | AppointmentCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutAuthoredPersonsInput = {
    update: XOR<EmployeeUpdateWithoutAuthoredPersonsInput, EmployeeUncheckedUpdateWithoutAuthoredPersonsInput>
    create: XOR<EmployeeCreateWithoutAuthoredPersonsInput, EmployeeUncheckedCreateWithoutAuthoredPersonsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAuthoredPersonsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAuthoredPersonsInput, EmployeeUncheckedUpdateWithoutAuthoredPersonsInput>
  }

  export type EmployeeUpdateWithoutAuthoredPersonsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUpdateManyWithoutAuthorNestedInput
    authoredOrigins?: OriginUpdateManyWithoutAuthorNestedInput
    authoredCases?: CaseUpdateManyWithoutAuthorNestedInput
    managedCases?: CaseUpdateManyWithoutManagerNestedInput
    authoredOpponents?: OpponentUpdateManyWithoutAuthorNestedInput
    authoredCalls?: CallUpdateManyWithoutAuthorNestedInput
    authoredAppointments?: AppointmentUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAuthoredPersonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUncheckedUpdateManyWithoutAuthorNestedInput
    authoredOrigins?: OriginUncheckedUpdateManyWithoutAuthorNestedInput
    authoredCases?: CaseUncheckedUpdateManyWithoutAuthorNestedInput
    managedCases?: CaseUncheckedUpdateManyWithoutManagerNestedInput
    authoredOpponents?: OpponentUncheckedUpdateManyWithoutAuthorNestedInput
    authoredCalls?: CallUncheckedUpdateManyWithoutAuthorNestedInput
    authoredAppointments?: AppointmentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type OriginUpsertWithoutPersonsInput = {
    update: XOR<OriginUpdateWithoutPersonsInput, OriginUncheckedUpdateWithoutPersonsInput>
    create: XOR<OriginCreateWithoutPersonsInput, OriginUncheckedCreateWithoutPersonsInput>
    where?: OriginWhereInput
  }

  export type OriginUpdateToOneWithWhereWithoutPersonsInput = {
    where?: OriginWhereInput
    data: XOR<OriginUpdateWithoutPersonsInput, OriginUncheckedUpdateWithoutPersonsInput>
  }

  export type OriginUpdateWithoutPersonsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: OriginUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    author?: EmployeeUpdateOneRequiredWithoutAuthoredOriginsNestedInput
  }

  export type OriginUncheckedUpdateWithoutPersonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: OriginUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type CaseUpsertWithWhereUniqueWithoutPersonInput = {
    where: CaseWhereUniqueInput
    update: XOR<CaseUpdateWithoutPersonInput, CaseUncheckedUpdateWithoutPersonInput>
    create: XOR<CaseCreateWithoutPersonInput, CaseUncheckedCreateWithoutPersonInput>
  }

  export type CaseUpdateWithWhereUniqueWithoutPersonInput = {
    where: CaseWhereUniqueInput
    data: XOR<CaseUpdateWithoutPersonInput, CaseUncheckedUpdateWithoutPersonInput>
  }

  export type CaseUpdateManyWithWhereWithoutPersonInput = {
    where: CaseScalarWhereInput
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyWithoutPersonInput>
  }

  export type CallUpsertWithWhereUniqueWithoutPersonInput = {
    where: CallWhereUniqueInput
    update: XOR<CallUpdateWithoutPersonInput, CallUncheckedUpdateWithoutPersonInput>
    create: XOR<CallCreateWithoutPersonInput, CallUncheckedCreateWithoutPersonInput>
  }

  export type CallUpdateWithWhereUniqueWithoutPersonInput = {
    where: CallWhereUniqueInput
    data: XOR<CallUpdateWithoutPersonInput, CallUncheckedUpdateWithoutPersonInput>
  }

  export type CallUpdateManyWithWhereWithoutPersonInput = {
    where: CallScalarWhereInput
    data: XOR<CallUpdateManyMutationInput, CallUncheckedUpdateManyWithoutPersonInput>
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPersonInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPersonInput, AppointmentUncheckedUpdateWithoutPersonInput>
    create: XOR<AppointmentCreateWithoutPersonInput, AppointmentUncheckedCreateWithoutPersonInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPersonInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPersonInput, AppointmentUncheckedUpdateWithoutPersonInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPersonInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPersonInput>
  }

  export type EmployeeCreateWithoutAuthoredCasesInput = {
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerCreateNestedManyWithoutAuthorInput
    authoredOrigins?: OriginCreateNestedManyWithoutAuthorInput
    authoredPersons?: PersonCreateNestedManyWithoutAuthorInput
    managedCases?: CaseCreateNestedManyWithoutManagerInput
    authoredOpponents?: OpponentCreateNestedManyWithoutAuthorInput
    authoredCalls?: CallCreateNestedManyWithoutAuthorInput
    authoredAppointments?: AppointmentCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeUncheckedCreateWithoutAuthoredCasesInput = {
    id?: number
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUncheckedCreateNestedManyWithoutAuthorInput
    authoredOrigins?: OriginUncheckedCreateNestedManyWithoutAuthorInput
    authoredPersons?: PersonUncheckedCreateNestedManyWithoutAuthorInput
    managedCases?: CaseUncheckedCreateNestedManyWithoutManagerInput
    authoredOpponents?: OpponentUncheckedCreateNestedManyWithoutAuthorInput
    authoredCalls?: CallUncheckedCreateNestedManyWithoutAuthorInput
    authoredAppointments?: AppointmentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeCreateOrConnectWithoutAuthoredCasesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAuthoredCasesInput, EmployeeUncheckedCreateWithoutAuthoredCasesInput>
  }

  export type EmployeeCreateWithoutManagedCasesInput = {
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerCreateNestedManyWithoutAuthorInput
    authoredOrigins?: OriginCreateNestedManyWithoutAuthorInput
    authoredPersons?: PersonCreateNestedManyWithoutAuthorInput
    authoredCases?: CaseCreateNestedManyWithoutAuthorInput
    authoredOpponents?: OpponentCreateNestedManyWithoutAuthorInput
    authoredCalls?: CallCreateNestedManyWithoutAuthorInput
    authoredAppointments?: AppointmentCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeUncheckedCreateWithoutManagedCasesInput = {
    id?: number
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUncheckedCreateNestedManyWithoutAuthorInput
    authoredOrigins?: OriginUncheckedCreateNestedManyWithoutAuthorInput
    authoredPersons?: PersonUncheckedCreateNestedManyWithoutAuthorInput
    authoredCases?: CaseUncheckedCreateNestedManyWithoutAuthorInput
    authoredOpponents?: OpponentUncheckedCreateNestedManyWithoutAuthorInput
    authoredCalls?: CallUncheckedCreateNestedManyWithoutAuthorInput
    authoredAppointments?: AppointmentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeCreateOrConnectWithoutManagedCasesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutManagedCasesInput, EmployeeUncheckedCreateWithoutManagedCasesInput>
  }

  export type OpponentCreateWithoutCasesInput = {
    createdAt?: Date | string
    name: string
    link?: string | null
    info?: string | null
    author: EmployeeCreateNestedOneWithoutAuthoredOpponentsInput
  }

  export type OpponentUncheckedCreateWithoutCasesInput = {
    id?: number
    createdAt?: Date | string
    name: string
    link?: string | null
    info?: string | null
    authorId: number
  }

  export type OpponentCreateOrConnectWithoutCasesInput = {
    where: OpponentWhereUniqueInput
    create: XOR<OpponentCreateWithoutCasesInput, OpponentUncheckedCreateWithoutCasesInput>
  }

  export type PersonCreateWithoutCasesInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    link?: string | null
    email?: string | null
    homeAddress?: string | null
    leadStatus?: $Enums.LEAD_STATUS
    author: EmployeeCreateNestedOneWithoutAuthoredPersonsInput
    origin: OriginCreateNestedOneWithoutPersonsInput
    calls?: CallCreateNestedManyWithoutPersonInput
    appointments?: AppointmentCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutCasesInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    link?: string | null
    email?: string | null
    homeAddress?: string | null
    authorId: number
    originId: number
    leadStatus?: $Enums.LEAD_STATUS
    calls?: CallUncheckedCreateNestedManyWithoutPersonInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutCasesInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutCasesInput, PersonUncheckedCreateWithoutCasesInput>
  }

  export type AppointmentCreateWithoutCaseInput = {
    createAt?: Date | string
    date: Date | string
    appointmentStatus: $Enums.APPOINTMENT_STATUS
    person: PersonCreateNestedOneWithoutAppointmentsInput
    author: EmployeeCreateNestedOneWithoutAuthoredAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutCaseInput = {
    id?: number
    createAt?: Date | string
    date: Date | string
    appointmentStatus: $Enums.APPOINTMENT_STATUS
    personId: number
    authorId: number
  }

  export type AppointmentCreateOrConnectWithoutCaseInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutCaseInput, AppointmentUncheckedCreateWithoutCaseInput>
  }

  export type AppointmentCreateManyCaseInputEnvelope = {
    data: AppointmentCreateManyCaseInput | AppointmentCreateManyCaseInput[]
    skipDuplicates?: boolean
  }

  export type CallCreateWithoutCaseInput = {
    createdAt?: Date | string
    callStatus: $Enums.CALL_STATUS
    info?: string | null
    author: EmployeeCreateNestedOneWithoutAuthoredCallsInput
    person: PersonCreateNestedOneWithoutCallsInput
  }

  export type CallUncheckedCreateWithoutCaseInput = {
    id?: number
    createdAt?: Date | string
    callStatus: $Enums.CALL_STATUS
    info?: string | null
    personId: number
    authorId: number
  }

  export type CallCreateOrConnectWithoutCaseInput = {
    where: CallWhereUniqueInput
    create: XOR<CallCreateWithoutCaseInput, CallUncheckedCreateWithoutCaseInput>
  }

  export type CallCreateManyCaseInputEnvelope = {
    data: CallCreateManyCaseInput | CallCreateManyCaseInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutAuthoredCasesInput = {
    update: XOR<EmployeeUpdateWithoutAuthoredCasesInput, EmployeeUncheckedUpdateWithoutAuthoredCasesInput>
    create: XOR<EmployeeCreateWithoutAuthoredCasesInput, EmployeeUncheckedCreateWithoutAuthoredCasesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAuthoredCasesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAuthoredCasesInput, EmployeeUncheckedUpdateWithoutAuthoredCasesInput>
  }

  export type EmployeeUpdateWithoutAuthoredCasesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUpdateManyWithoutAuthorNestedInput
    authoredOrigins?: OriginUpdateManyWithoutAuthorNestedInput
    authoredPersons?: PersonUpdateManyWithoutAuthorNestedInput
    managedCases?: CaseUpdateManyWithoutManagerNestedInput
    authoredOpponents?: OpponentUpdateManyWithoutAuthorNestedInput
    authoredCalls?: CallUpdateManyWithoutAuthorNestedInput
    authoredAppointments?: AppointmentUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAuthoredCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUncheckedUpdateManyWithoutAuthorNestedInput
    authoredOrigins?: OriginUncheckedUpdateManyWithoutAuthorNestedInput
    authoredPersons?: PersonUncheckedUpdateManyWithoutAuthorNestedInput
    managedCases?: CaseUncheckedUpdateManyWithoutManagerNestedInput
    authoredOpponents?: OpponentUncheckedUpdateManyWithoutAuthorNestedInput
    authoredCalls?: CallUncheckedUpdateManyWithoutAuthorNestedInput
    authoredAppointments?: AppointmentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeUpsertWithoutManagedCasesInput = {
    update: XOR<EmployeeUpdateWithoutManagedCasesInput, EmployeeUncheckedUpdateWithoutManagedCasesInput>
    create: XOR<EmployeeCreateWithoutManagedCasesInput, EmployeeUncheckedCreateWithoutManagedCasesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutManagedCasesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutManagedCasesInput, EmployeeUncheckedUpdateWithoutManagedCasesInput>
  }

  export type EmployeeUpdateWithoutManagedCasesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUpdateManyWithoutAuthorNestedInput
    authoredOrigins?: OriginUpdateManyWithoutAuthorNestedInput
    authoredPersons?: PersonUpdateManyWithoutAuthorNestedInput
    authoredCases?: CaseUpdateManyWithoutAuthorNestedInput
    authoredOpponents?: OpponentUpdateManyWithoutAuthorNestedInput
    authoredCalls?: CallUpdateManyWithoutAuthorNestedInput
    authoredAppointments?: AppointmentUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutManagedCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUncheckedUpdateManyWithoutAuthorNestedInput
    authoredOrigins?: OriginUncheckedUpdateManyWithoutAuthorNestedInput
    authoredPersons?: PersonUncheckedUpdateManyWithoutAuthorNestedInput
    authoredCases?: CaseUncheckedUpdateManyWithoutAuthorNestedInput
    authoredOpponents?: OpponentUncheckedUpdateManyWithoutAuthorNestedInput
    authoredCalls?: CallUncheckedUpdateManyWithoutAuthorNestedInput
    authoredAppointments?: AppointmentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type OpponentUpsertWithoutCasesInput = {
    update: XOR<OpponentUpdateWithoutCasesInput, OpponentUncheckedUpdateWithoutCasesInput>
    create: XOR<OpponentCreateWithoutCasesInput, OpponentUncheckedCreateWithoutCasesInput>
    where?: OpponentWhereInput
  }

  export type OpponentUpdateToOneWithWhereWithoutCasesInput = {
    where?: OpponentWhereInput
    data: XOR<OpponentUpdateWithoutCasesInput, OpponentUncheckedUpdateWithoutCasesInput>
  }

  export type OpponentUpdateWithoutCasesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    author?: EmployeeUpdateOneRequiredWithoutAuthoredOpponentsNestedInput
  }

  export type OpponentUncheckedUpdateWithoutCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type PersonUpsertWithoutCasesInput = {
    update: XOR<PersonUpdateWithoutCasesInput, PersonUncheckedUpdateWithoutCasesInput>
    create: XOR<PersonCreateWithoutCasesInput, PersonUncheckedCreateWithoutCasesInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutCasesInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutCasesInput, PersonUncheckedUpdateWithoutCasesInput>
  }

  export type PersonUpdateWithoutCasesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    author?: EmployeeUpdateOneRequiredWithoutAuthoredPersonsNestedInput
    origin?: OriginUpdateOneRequiredWithoutPersonsNestedInput
    calls?: CallUpdateManyWithoutPersonNestedInput
    appointments?: AppointmentUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    originId?: IntFieldUpdateOperationsInput | number
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    calls?: CallUncheckedUpdateManyWithoutPersonNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutCaseInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutCaseInput, AppointmentUncheckedUpdateWithoutCaseInput>
    create: XOR<AppointmentCreateWithoutCaseInput, AppointmentUncheckedCreateWithoutCaseInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutCaseInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutCaseInput, AppointmentUncheckedUpdateWithoutCaseInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutCaseInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutCaseInput>
  }

  export type CallUpsertWithWhereUniqueWithoutCaseInput = {
    where: CallWhereUniqueInput
    update: XOR<CallUpdateWithoutCaseInput, CallUncheckedUpdateWithoutCaseInput>
    create: XOR<CallCreateWithoutCaseInput, CallUncheckedCreateWithoutCaseInput>
  }

  export type CallUpdateWithWhereUniqueWithoutCaseInput = {
    where: CallWhereUniqueInput
    data: XOR<CallUpdateWithoutCaseInput, CallUncheckedUpdateWithoutCaseInput>
  }

  export type CallUpdateManyWithWhereWithoutCaseInput = {
    where: CallScalarWhereInput
    data: XOR<CallUpdateManyMutationInput, CallUncheckedUpdateManyWithoutCaseInput>
  }

  export type EmployeeCreateWithoutAuthoredOriginsInput = {
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerCreateNestedManyWithoutAuthorInput
    authoredPersons?: PersonCreateNestedManyWithoutAuthorInput
    authoredCases?: CaseCreateNestedManyWithoutAuthorInput
    managedCases?: CaseCreateNestedManyWithoutManagerInput
    authoredOpponents?: OpponentCreateNestedManyWithoutAuthorInput
    authoredCalls?: CallCreateNestedManyWithoutAuthorInput
    authoredAppointments?: AppointmentCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeUncheckedCreateWithoutAuthoredOriginsInput = {
    id?: number
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUncheckedCreateNestedManyWithoutAuthorInput
    authoredPersons?: PersonUncheckedCreateNestedManyWithoutAuthorInput
    authoredCases?: CaseUncheckedCreateNestedManyWithoutAuthorInput
    managedCases?: CaseUncheckedCreateNestedManyWithoutManagerInput
    authoredOpponents?: OpponentUncheckedCreateNestedManyWithoutAuthorInput
    authoredCalls?: CallUncheckedCreateNestedManyWithoutAuthorInput
    authoredAppointments?: AppointmentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeCreateOrConnectWithoutAuthoredOriginsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAuthoredOriginsInput, EmployeeUncheckedCreateWithoutAuthoredOriginsInput>
  }

  export type PersonCreateWithoutOriginInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    link?: string | null
    email?: string | null
    homeAddress?: string | null
    leadStatus?: $Enums.LEAD_STATUS
    author: EmployeeCreateNestedOneWithoutAuthoredPersonsInput
    cases?: CaseCreateNestedManyWithoutPersonInput
    calls?: CallCreateNestedManyWithoutPersonInput
    appointments?: AppointmentCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutOriginInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    link?: string | null
    email?: string | null
    homeAddress?: string | null
    authorId: number
    leadStatus?: $Enums.LEAD_STATUS
    cases?: CaseUncheckedCreateNestedManyWithoutPersonInput
    calls?: CallUncheckedCreateNestedManyWithoutPersonInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutOriginInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutOriginInput, PersonUncheckedCreateWithoutOriginInput>
  }

  export type PersonCreateManyOriginInputEnvelope = {
    data: PersonCreateManyOriginInput | PersonCreateManyOriginInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutAuthoredOriginsInput = {
    update: XOR<EmployeeUpdateWithoutAuthoredOriginsInput, EmployeeUncheckedUpdateWithoutAuthoredOriginsInput>
    create: XOR<EmployeeCreateWithoutAuthoredOriginsInput, EmployeeUncheckedCreateWithoutAuthoredOriginsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAuthoredOriginsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAuthoredOriginsInput, EmployeeUncheckedUpdateWithoutAuthoredOriginsInput>
  }

  export type EmployeeUpdateWithoutAuthoredOriginsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUpdateManyWithoutAuthorNestedInput
    authoredPersons?: PersonUpdateManyWithoutAuthorNestedInput
    authoredCases?: CaseUpdateManyWithoutAuthorNestedInput
    managedCases?: CaseUpdateManyWithoutManagerNestedInput
    authoredOpponents?: OpponentUpdateManyWithoutAuthorNestedInput
    authoredCalls?: CallUpdateManyWithoutAuthorNestedInput
    authoredAppointments?: AppointmentUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAuthoredOriginsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUncheckedUpdateManyWithoutAuthorNestedInput
    authoredPersons?: PersonUncheckedUpdateManyWithoutAuthorNestedInput
    authoredCases?: CaseUncheckedUpdateManyWithoutAuthorNestedInput
    managedCases?: CaseUncheckedUpdateManyWithoutManagerNestedInput
    authoredOpponents?: OpponentUncheckedUpdateManyWithoutAuthorNestedInput
    authoredCalls?: CallUncheckedUpdateManyWithoutAuthorNestedInput
    authoredAppointments?: AppointmentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PersonUpsertWithWhereUniqueWithoutOriginInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutOriginInput, PersonUncheckedUpdateWithoutOriginInput>
    create: XOR<PersonCreateWithoutOriginInput, PersonUncheckedCreateWithoutOriginInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutOriginInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutOriginInput, PersonUncheckedUpdateWithoutOriginInput>
  }

  export type PersonUpdateManyWithWhereWithoutOriginInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutOriginInput>
  }

  export type CaseCreateWithoutOpponentInput = {
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    author: EmployeeCreateNestedOneWithoutAuthoredCasesInput
    manager?: EmployeeCreateNestedOneWithoutManagedCasesInput
    person: PersonCreateNestedOneWithoutCasesInput
    appointments?: AppointmentCreateNestedManyWithoutCaseInput
    calls?: CallCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutOpponentInput = {
    id?: number
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    personId: number
    authorId: number
    managerId?: number | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutCaseInput
    calls?: CallUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutOpponentInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutOpponentInput, CaseUncheckedCreateWithoutOpponentInput>
  }

  export type CaseCreateManyOpponentInputEnvelope = {
    data: CaseCreateManyOpponentInput | CaseCreateManyOpponentInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutAuthoredOpponentsInput = {
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerCreateNestedManyWithoutAuthorInput
    authoredOrigins?: OriginCreateNestedManyWithoutAuthorInput
    authoredPersons?: PersonCreateNestedManyWithoutAuthorInput
    authoredCases?: CaseCreateNestedManyWithoutAuthorInput
    managedCases?: CaseCreateNestedManyWithoutManagerInput
    authoredCalls?: CallCreateNestedManyWithoutAuthorInput
    authoredAppointments?: AppointmentCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeUncheckedCreateWithoutAuthoredOpponentsInput = {
    id?: number
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUncheckedCreateNestedManyWithoutAuthorInput
    authoredOrigins?: OriginUncheckedCreateNestedManyWithoutAuthorInput
    authoredPersons?: PersonUncheckedCreateNestedManyWithoutAuthorInput
    authoredCases?: CaseUncheckedCreateNestedManyWithoutAuthorInput
    managedCases?: CaseUncheckedCreateNestedManyWithoutManagerInput
    authoredCalls?: CallUncheckedCreateNestedManyWithoutAuthorInput
    authoredAppointments?: AppointmentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeCreateOrConnectWithoutAuthoredOpponentsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAuthoredOpponentsInput, EmployeeUncheckedCreateWithoutAuthoredOpponentsInput>
  }

  export type CaseUpsertWithWhereUniqueWithoutOpponentInput = {
    where: CaseWhereUniqueInput
    update: XOR<CaseUpdateWithoutOpponentInput, CaseUncheckedUpdateWithoutOpponentInput>
    create: XOR<CaseCreateWithoutOpponentInput, CaseUncheckedCreateWithoutOpponentInput>
  }

  export type CaseUpdateWithWhereUniqueWithoutOpponentInput = {
    where: CaseWhereUniqueInput
    data: XOR<CaseUpdateWithoutOpponentInput, CaseUncheckedUpdateWithoutOpponentInput>
  }

  export type CaseUpdateManyWithWhereWithoutOpponentInput = {
    where: CaseScalarWhereInput
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyWithoutOpponentInput>
  }

  export type EmployeeUpsertWithoutAuthoredOpponentsInput = {
    update: XOR<EmployeeUpdateWithoutAuthoredOpponentsInput, EmployeeUncheckedUpdateWithoutAuthoredOpponentsInput>
    create: XOR<EmployeeCreateWithoutAuthoredOpponentsInput, EmployeeUncheckedCreateWithoutAuthoredOpponentsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAuthoredOpponentsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAuthoredOpponentsInput, EmployeeUncheckedUpdateWithoutAuthoredOpponentsInput>
  }

  export type EmployeeUpdateWithoutAuthoredOpponentsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUpdateManyWithoutAuthorNestedInput
    authoredOrigins?: OriginUpdateManyWithoutAuthorNestedInput
    authoredPersons?: PersonUpdateManyWithoutAuthorNestedInput
    authoredCases?: CaseUpdateManyWithoutAuthorNestedInput
    managedCases?: CaseUpdateManyWithoutManagerNestedInput
    authoredCalls?: CallUpdateManyWithoutAuthorNestedInput
    authoredAppointments?: AppointmentUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAuthoredOpponentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUncheckedUpdateManyWithoutAuthorNestedInput
    authoredOrigins?: OriginUncheckedUpdateManyWithoutAuthorNestedInput
    authoredPersons?: PersonUncheckedUpdateManyWithoutAuthorNestedInput
    authoredCases?: CaseUncheckedUpdateManyWithoutAuthorNestedInput
    managedCases?: CaseUncheckedUpdateManyWithoutManagerNestedInput
    authoredCalls?: CallUncheckedUpdateManyWithoutAuthorNestedInput
    authoredAppointments?: AppointmentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeCreateWithoutAuthoredBloggersInput = {
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredOrigins?: OriginCreateNestedManyWithoutAuthorInput
    authoredPersons?: PersonCreateNestedManyWithoutAuthorInput
    authoredCases?: CaseCreateNestedManyWithoutAuthorInput
    managedCases?: CaseCreateNestedManyWithoutManagerInput
    authoredOpponents?: OpponentCreateNestedManyWithoutAuthorInput
    authoredCalls?: CallCreateNestedManyWithoutAuthorInput
    authoredAppointments?: AppointmentCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeUncheckedCreateWithoutAuthoredBloggersInput = {
    id?: number
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredOrigins?: OriginUncheckedCreateNestedManyWithoutAuthorInput
    authoredPersons?: PersonUncheckedCreateNestedManyWithoutAuthorInput
    authoredCases?: CaseUncheckedCreateNestedManyWithoutAuthorInput
    managedCases?: CaseUncheckedCreateNestedManyWithoutManagerInput
    authoredOpponents?: OpponentUncheckedCreateNestedManyWithoutAuthorInput
    authoredCalls?: CallUncheckedCreateNestedManyWithoutAuthorInput
    authoredAppointments?: AppointmentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeCreateOrConnectWithoutAuthoredBloggersInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAuthoredBloggersInput, EmployeeUncheckedCreateWithoutAuthoredBloggersInput>
  }

  export type EmployeeUpsertWithoutAuthoredBloggersInput = {
    update: XOR<EmployeeUpdateWithoutAuthoredBloggersInput, EmployeeUncheckedUpdateWithoutAuthoredBloggersInput>
    create: XOR<EmployeeCreateWithoutAuthoredBloggersInput, EmployeeUncheckedCreateWithoutAuthoredBloggersInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAuthoredBloggersInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAuthoredBloggersInput, EmployeeUncheckedUpdateWithoutAuthoredBloggersInput>
  }

  export type EmployeeUpdateWithoutAuthoredBloggersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredOrigins?: OriginUpdateManyWithoutAuthorNestedInput
    authoredPersons?: PersonUpdateManyWithoutAuthorNestedInput
    authoredCases?: CaseUpdateManyWithoutAuthorNestedInput
    managedCases?: CaseUpdateManyWithoutManagerNestedInput
    authoredOpponents?: OpponentUpdateManyWithoutAuthorNestedInput
    authoredCalls?: CallUpdateManyWithoutAuthorNestedInput
    authoredAppointments?: AppointmentUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAuthoredBloggersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredOrigins?: OriginUncheckedUpdateManyWithoutAuthorNestedInput
    authoredPersons?: PersonUncheckedUpdateManyWithoutAuthorNestedInput
    authoredCases?: CaseUncheckedUpdateManyWithoutAuthorNestedInput
    managedCases?: CaseUncheckedUpdateManyWithoutManagerNestedInput
    authoredOpponents?: OpponentUncheckedUpdateManyWithoutAuthorNestedInput
    authoredCalls?: CallUncheckedUpdateManyWithoutAuthorNestedInput
    authoredAppointments?: AppointmentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type CaseCreateWithoutCallsInput = {
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    author: EmployeeCreateNestedOneWithoutAuthoredCasesInput
    manager?: EmployeeCreateNestedOneWithoutManagedCasesInput
    opponent?: OpponentCreateNestedOneWithoutCasesInput
    person: PersonCreateNestedOneWithoutCasesInput
    appointments?: AppointmentCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutCallsInput = {
    id?: number
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    personId: number
    authorId: number
    opponentId?: number | null
    managerId?: number | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutCallsInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutCallsInput, CaseUncheckedCreateWithoutCallsInput>
  }

  export type EmployeeCreateWithoutAuthoredCallsInput = {
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerCreateNestedManyWithoutAuthorInput
    authoredOrigins?: OriginCreateNestedManyWithoutAuthorInput
    authoredPersons?: PersonCreateNestedManyWithoutAuthorInput
    authoredCases?: CaseCreateNestedManyWithoutAuthorInput
    managedCases?: CaseCreateNestedManyWithoutManagerInput
    authoredOpponents?: OpponentCreateNestedManyWithoutAuthorInput
    authoredAppointments?: AppointmentCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeUncheckedCreateWithoutAuthoredCallsInput = {
    id?: number
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUncheckedCreateNestedManyWithoutAuthorInput
    authoredOrigins?: OriginUncheckedCreateNestedManyWithoutAuthorInput
    authoredPersons?: PersonUncheckedCreateNestedManyWithoutAuthorInput
    authoredCases?: CaseUncheckedCreateNestedManyWithoutAuthorInput
    managedCases?: CaseUncheckedCreateNestedManyWithoutManagerInput
    authoredOpponents?: OpponentUncheckedCreateNestedManyWithoutAuthorInput
    authoredAppointments?: AppointmentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeCreateOrConnectWithoutAuthoredCallsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAuthoredCallsInput, EmployeeUncheckedCreateWithoutAuthoredCallsInput>
  }

  export type PersonCreateWithoutCallsInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    link?: string | null
    email?: string | null
    homeAddress?: string | null
    leadStatus?: $Enums.LEAD_STATUS
    author: EmployeeCreateNestedOneWithoutAuthoredPersonsInput
    origin: OriginCreateNestedOneWithoutPersonsInput
    cases?: CaseCreateNestedManyWithoutPersonInput
    appointments?: AppointmentCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutCallsInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    link?: string | null
    email?: string | null
    homeAddress?: string | null
    authorId: number
    originId: number
    leadStatus?: $Enums.LEAD_STATUS
    cases?: CaseUncheckedCreateNestedManyWithoutPersonInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutCallsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutCallsInput, PersonUncheckedCreateWithoutCallsInput>
  }

  export type CaseUpsertWithoutCallsInput = {
    update: XOR<CaseUpdateWithoutCallsInput, CaseUncheckedUpdateWithoutCallsInput>
    create: XOR<CaseCreateWithoutCallsInput, CaseUncheckedCreateWithoutCallsInput>
    where?: CaseWhereInput
  }

  export type CaseUpdateToOneWithWhereWithoutCallsInput = {
    where?: CaseWhereInput
    data: XOR<CaseUpdateWithoutCallsInput, CaseUncheckedUpdateWithoutCallsInput>
  }

  export type CaseUpdateWithoutCallsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    author?: EmployeeUpdateOneRequiredWithoutAuthoredCasesNestedInput
    manager?: EmployeeUpdateOneWithoutManagedCasesNestedInput
    opponent?: OpponentUpdateOneWithoutCasesNestedInput
    person?: PersonUpdateOneRequiredWithoutCasesNestedInput
    appointments?: AppointmentUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutCallsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    personId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    appointments?: AppointmentUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type EmployeeUpsertWithoutAuthoredCallsInput = {
    update: XOR<EmployeeUpdateWithoutAuthoredCallsInput, EmployeeUncheckedUpdateWithoutAuthoredCallsInput>
    create: XOR<EmployeeCreateWithoutAuthoredCallsInput, EmployeeUncheckedCreateWithoutAuthoredCallsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAuthoredCallsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAuthoredCallsInput, EmployeeUncheckedUpdateWithoutAuthoredCallsInput>
  }

  export type EmployeeUpdateWithoutAuthoredCallsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUpdateManyWithoutAuthorNestedInput
    authoredOrigins?: OriginUpdateManyWithoutAuthorNestedInput
    authoredPersons?: PersonUpdateManyWithoutAuthorNestedInput
    authoredCases?: CaseUpdateManyWithoutAuthorNestedInput
    managedCases?: CaseUpdateManyWithoutManagerNestedInput
    authoredOpponents?: OpponentUpdateManyWithoutAuthorNestedInput
    authoredAppointments?: AppointmentUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAuthoredCallsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUncheckedUpdateManyWithoutAuthorNestedInput
    authoredOrigins?: OriginUncheckedUpdateManyWithoutAuthorNestedInput
    authoredPersons?: PersonUncheckedUpdateManyWithoutAuthorNestedInput
    authoredCases?: CaseUncheckedUpdateManyWithoutAuthorNestedInput
    managedCases?: CaseUncheckedUpdateManyWithoutManagerNestedInput
    authoredOpponents?: OpponentUncheckedUpdateManyWithoutAuthorNestedInput
    authoredAppointments?: AppointmentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PersonUpsertWithoutCallsInput = {
    update: XOR<PersonUpdateWithoutCallsInput, PersonUncheckedUpdateWithoutCallsInput>
    create: XOR<PersonCreateWithoutCallsInput, PersonUncheckedCreateWithoutCallsInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutCallsInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutCallsInput, PersonUncheckedUpdateWithoutCallsInput>
  }

  export type PersonUpdateWithoutCallsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    author?: EmployeeUpdateOneRequiredWithoutAuthoredPersonsNestedInput
    origin?: OriginUpdateOneRequiredWithoutPersonsNestedInput
    cases?: CaseUpdateManyWithoutPersonNestedInput
    appointments?: AppointmentUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutCallsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    originId?: IntFieldUpdateOperationsInput | number
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    cases?: CaseUncheckedUpdateManyWithoutPersonNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateWithoutAppointmentsInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    link?: string | null
    email?: string | null
    homeAddress?: string | null
    leadStatus?: $Enums.LEAD_STATUS
    author: EmployeeCreateNestedOneWithoutAuthoredPersonsInput
    origin: OriginCreateNestedOneWithoutPersonsInput
    cases?: CaseCreateNestedManyWithoutPersonInput
    calls?: CallCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    link?: string | null
    email?: string | null
    homeAddress?: string | null
    authorId: number
    originId: number
    leadStatus?: $Enums.LEAD_STATUS
    cases?: CaseUncheckedCreateNestedManyWithoutPersonInput
    calls?: CallUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutAppointmentsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutAppointmentsInput, PersonUncheckedCreateWithoutAppointmentsInput>
  }

  export type EmployeeCreateWithoutAuthoredAppointmentsInput = {
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerCreateNestedManyWithoutAuthorInput
    authoredOrigins?: OriginCreateNestedManyWithoutAuthorInput
    authoredPersons?: PersonCreateNestedManyWithoutAuthorInput
    authoredCases?: CaseCreateNestedManyWithoutAuthorInput
    managedCases?: CaseCreateNestedManyWithoutManagerInput
    authoredOpponents?: OpponentCreateNestedManyWithoutAuthorInput
    authoredCalls?: CallCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeUncheckedCreateWithoutAuthoredAppointmentsInput = {
    id?: number
    createdAt?: Date | string
    username: string
    password: string
    roles?: EmployeeCreaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUncheckedCreateNestedManyWithoutAuthorInput
    authoredOrigins?: OriginUncheckedCreateNestedManyWithoutAuthorInput
    authoredPersons?: PersonUncheckedCreateNestedManyWithoutAuthorInput
    authoredCases?: CaseUncheckedCreateNestedManyWithoutAuthorInput
    managedCases?: CaseUncheckedCreateNestedManyWithoutManagerInput
    authoredOpponents?: OpponentUncheckedCreateNestedManyWithoutAuthorInput
    authoredCalls?: CallUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeCreateOrConnectWithoutAuthoredAppointmentsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAuthoredAppointmentsInput, EmployeeUncheckedCreateWithoutAuthoredAppointmentsInput>
  }

  export type CaseCreateWithoutAppointmentsInput = {
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    author: EmployeeCreateNestedOneWithoutAuthoredCasesInput
    manager?: EmployeeCreateNestedOneWithoutManagedCasesInput
    opponent?: OpponentCreateNestedOneWithoutCasesInput
    person: PersonCreateNestedOneWithoutCasesInput
    calls?: CallCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    personId: number
    authorId: number
    opponentId?: number | null
    managerId?: number | null
    calls?: CallUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutAppointmentsInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutAppointmentsInput, CaseUncheckedCreateWithoutAppointmentsInput>
  }

  export type PersonUpsertWithoutAppointmentsInput = {
    update: XOR<PersonUpdateWithoutAppointmentsInput, PersonUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<PersonCreateWithoutAppointmentsInput, PersonUncheckedCreateWithoutAppointmentsInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutAppointmentsInput, PersonUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PersonUpdateWithoutAppointmentsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    author?: EmployeeUpdateOneRequiredWithoutAuthoredPersonsNestedInput
    origin?: OriginUpdateOneRequiredWithoutPersonsNestedInput
    cases?: CaseUpdateManyWithoutPersonNestedInput
    calls?: CallUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    originId?: IntFieldUpdateOperationsInput | number
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    cases?: CaseUncheckedUpdateManyWithoutPersonNestedInput
    calls?: CallUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type EmployeeUpsertWithoutAuthoredAppointmentsInput = {
    update: XOR<EmployeeUpdateWithoutAuthoredAppointmentsInput, EmployeeUncheckedUpdateWithoutAuthoredAppointmentsInput>
    create: XOR<EmployeeCreateWithoutAuthoredAppointmentsInput, EmployeeUncheckedCreateWithoutAuthoredAppointmentsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAuthoredAppointmentsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAuthoredAppointmentsInput, EmployeeUncheckedUpdateWithoutAuthoredAppointmentsInput>
  }

  export type EmployeeUpdateWithoutAuthoredAppointmentsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUpdateManyWithoutAuthorNestedInput
    authoredOrigins?: OriginUpdateManyWithoutAuthorNestedInput
    authoredPersons?: PersonUpdateManyWithoutAuthorNestedInput
    authoredCases?: CaseUpdateManyWithoutAuthorNestedInput
    managedCases?: CaseUpdateManyWithoutManagerNestedInput
    authoredOpponents?: OpponentUpdateManyWithoutAuthorNestedInput
    authoredCalls?: CallUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAuthoredAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roles?: EmployeeUpdaterolesInput | $Enums.ROLE[]
    authoredBloggers?: BloggerUncheckedUpdateManyWithoutAuthorNestedInput
    authoredOrigins?: OriginUncheckedUpdateManyWithoutAuthorNestedInput
    authoredPersons?: PersonUncheckedUpdateManyWithoutAuthorNestedInput
    authoredCases?: CaseUncheckedUpdateManyWithoutAuthorNestedInput
    managedCases?: CaseUncheckedUpdateManyWithoutManagerNestedInput
    authoredOpponents?: OpponentUncheckedUpdateManyWithoutAuthorNestedInput
    authoredCalls?: CallUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type CaseUpsertWithoutAppointmentsInput = {
    update: XOR<CaseUpdateWithoutAppointmentsInput, CaseUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<CaseCreateWithoutAppointmentsInput, CaseUncheckedCreateWithoutAppointmentsInput>
    where?: CaseWhereInput
  }

  export type CaseUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: CaseWhereInput
    data: XOR<CaseUpdateWithoutAppointmentsInput, CaseUncheckedUpdateWithoutAppointmentsInput>
  }

  export type CaseUpdateWithoutAppointmentsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    author?: EmployeeUpdateOneRequiredWithoutAuthoredCasesNestedInput
    manager?: EmployeeUpdateOneWithoutManagedCasesNestedInput
    opponent?: OpponentUpdateOneWithoutCasesNestedInput
    person?: PersonUpdateOneRequiredWithoutCasesNestedInput
    calls?: CallUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    personId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    calls?: CallUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type BloggerCreateManyAuthorInput = {
    id?: number
    createdAt?: Date | string
    name: string
    link: string
    phoneNumber?: string | null
    email?: string | null
    info?: string | null
    subscribersCount: bigint | number
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    categories?: BloggerCreatecategoriesInput | $Enums.CASE_CATEGORY[]
  }

  export type OriginCreateManyAuthorInput = {
    id?: number
    createdAt?: Date | string
    title: string
    link?: string | null
    categories?: OriginCreatecategoriesInput | $Enums.CASE_CATEGORY[]
  }

  export type PersonCreateManyAuthorInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    link?: string | null
    email?: string | null
    homeAddress?: string | null
    originId: number
    leadStatus?: $Enums.LEAD_STATUS
  }

  export type CaseCreateManyAuthorInput = {
    id?: number
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    personId: number
    opponentId?: number | null
    managerId?: number | null
  }

  export type CaseCreateManyManagerInput = {
    id?: number
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    personId: number
    authorId: number
    opponentId?: number | null
  }

  export type OpponentCreateManyAuthorInput = {
    id?: number
    createdAt?: Date | string
    name: string
    link?: string | null
    info?: string | null
  }

  export type CallCreateManyAuthorInput = {
    id?: number
    createdAt?: Date | string
    callStatus: $Enums.CALL_STATUS
    info?: string | null
    caseId: number
    personId: number
  }

  export type AppointmentCreateManyAuthorInput = {
    id?: number
    createAt?: Date | string
    date: Date | string
    appointmentStatus: $Enums.APPOINTMENT_STATUS
    caseId: number
    personId: number
  }

  export type BloggerUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    subscribersCount?: BigIntFieldUpdateOperationsInput | bigint | number
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    categories?: BloggerUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
  }

  export type BloggerUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    subscribersCount?: BigIntFieldUpdateOperationsInput | bigint | number
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    categories?: BloggerUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
  }

  export type BloggerUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    subscribersCount?: BigIntFieldUpdateOperationsInput | bigint | number
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    categories?: BloggerUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
  }

  export type OriginUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: OriginUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    persons?: PersonUpdateManyWithoutOriginNestedInput
  }

  export type OriginUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: OriginUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    persons?: PersonUncheckedUpdateManyWithoutOriginNestedInput
  }

  export type OriginUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: OriginUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
  }

  export type PersonUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    origin?: OriginUpdateOneRequiredWithoutPersonsNestedInput
    cases?: CaseUpdateManyWithoutPersonNestedInput
    calls?: CallUpdateManyWithoutPersonNestedInput
    appointments?: AppointmentUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    originId?: IntFieldUpdateOperationsInput | number
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    cases?: CaseUncheckedUpdateManyWithoutPersonNestedInput
    calls?: CallUncheckedUpdateManyWithoutPersonNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    originId?: IntFieldUpdateOperationsInput | number
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
  }

  export type CaseUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    manager?: EmployeeUpdateOneWithoutManagedCasesNestedInput
    opponent?: OpponentUpdateOneWithoutCasesNestedInput
    person?: PersonUpdateOneRequiredWithoutCasesNestedInput
    appointments?: AppointmentUpdateManyWithoutCaseNestedInput
    calls?: CallUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    personId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    appointments?: AppointmentUncheckedUpdateManyWithoutCaseNestedInput
    calls?: CallUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    personId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CaseUpdateWithoutManagerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    author?: EmployeeUpdateOneRequiredWithoutAuthoredCasesNestedInput
    opponent?: OpponentUpdateOneWithoutCasesNestedInput
    person?: PersonUpdateOneRequiredWithoutCasesNestedInput
    appointments?: AppointmentUpdateManyWithoutCaseNestedInput
    calls?: CallUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    personId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
    appointments?: AppointmentUncheckedUpdateManyWithoutCaseNestedInput
    calls?: CallUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateManyWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    personId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OpponentUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    cases?: CaseUpdateManyWithoutOpponentNestedInput
  }

  export type OpponentUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    cases?: CaseUncheckedUpdateManyWithoutOpponentNestedInput
  }

  export type OpponentUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CallUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callStatus?: EnumCALL_STATUSFieldUpdateOperationsInput | $Enums.CALL_STATUS
    info?: NullableStringFieldUpdateOperationsInput | string | null
    case?: CaseUpdateOneRequiredWithoutCallsNestedInput
    person?: PersonUpdateOneRequiredWithoutCallsNestedInput
  }

  export type CallUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callStatus?: EnumCALL_STATUSFieldUpdateOperationsInput | $Enums.CALL_STATUS
    info?: NullableStringFieldUpdateOperationsInput | string | null
    caseId?: IntFieldUpdateOperationsInput | number
    personId?: IntFieldUpdateOperationsInput | number
  }

  export type CallUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callStatus?: EnumCALL_STATUSFieldUpdateOperationsInput | $Enums.CALL_STATUS
    info?: NullableStringFieldUpdateOperationsInput | string | null
    caseId?: IntFieldUpdateOperationsInput | number
    personId?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentUpdateWithoutAuthorInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentStatus?: EnumAPPOINTMENT_STATUSFieldUpdateOperationsInput | $Enums.APPOINTMENT_STATUS
    person?: PersonUpdateOneRequiredWithoutAppointmentsNestedInput
    case?: CaseUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentStatus?: EnumAPPOINTMENT_STATUSFieldUpdateOperationsInput | $Enums.APPOINTMENT_STATUS
    caseId?: IntFieldUpdateOperationsInput | number
    personId?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentStatus?: EnumAPPOINTMENT_STATUSFieldUpdateOperationsInput | $Enums.APPOINTMENT_STATUS
    caseId?: IntFieldUpdateOperationsInput | number
    personId?: IntFieldUpdateOperationsInput | number
  }

  export type CaseCreateManyPersonInput = {
    id?: number
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    authorId: number
    opponentId?: number | null
    managerId?: number | null
  }

  export type CallCreateManyPersonInput = {
    id?: number
    createdAt?: Date | string
    callStatus: $Enums.CALL_STATUS
    info?: string | null
    caseId: number
    authorId: number
  }

  export type AppointmentCreateManyPersonInput = {
    id?: number
    createAt?: Date | string
    date: Date | string
    appointmentStatus: $Enums.APPOINTMENT_STATUS
    caseId: number
    authorId: number
  }

  export type CaseUpdateWithoutPersonInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    author?: EmployeeUpdateOneRequiredWithoutAuthoredCasesNestedInput
    manager?: EmployeeUpdateOneWithoutManagedCasesNestedInput
    opponent?: OpponentUpdateOneWithoutCasesNestedInput
    appointments?: AppointmentUpdateManyWithoutCaseNestedInput
    calls?: CallUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    appointments?: AppointmentUncheckedUpdateManyWithoutCaseNestedInput
    calls?: CallUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateManyWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    opponentId?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CallUpdateWithoutPersonInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callStatus?: EnumCALL_STATUSFieldUpdateOperationsInput | $Enums.CALL_STATUS
    info?: NullableStringFieldUpdateOperationsInput | string | null
    case?: CaseUpdateOneRequiredWithoutCallsNestedInput
    author?: EmployeeUpdateOneRequiredWithoutAuthoredCallsNestedInput
  }

  export type CallUncheckedUpdateWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callStatus?: EnumCALL_STATUSFieldUpdateOperationsInput | $Enums.CALL_STATUS
    info?: NullableStringFieldUpdateOperationsInput | string | null
    caseId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type CallUncheckedUpdateManyWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callStatus?: EnumCALL_STATUSFieldUpdateOperationsInput | $Enums.CALL_STATUS
    info?: NullableStringFieldUpdateOperationsInput | string | null
    caseId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentUpdateWithoutPersonInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentStatus?: EnumAPPOINTMENT_STATUSFieldUpdateOperationsInput | $Enums.APPOINTMENT_STATUS
    author?: EmployeeUpdateOneRequiredWithoutAuthoredAppointmentsNestedInput
    case?: CaseUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentStatus?: EnumAPPOINTMENT_STATUSFieldUpdateOperationsInput | $Enums.APPOINTMENT_STATUS
    caseId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentUncheckedUpdateManyWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentStatus?: EnumAPPOINTMENT_STATUSFieldUpdateOperationsInput | $Enums.APPOINTMENT_STATUS
    caseId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentCreateManyCaseInput = {
    id?: number
    createAt?: Date | string
    date: Date | string
    appointmentStatus: $Enums.APPOINTMENT_STATUS
    personId: number
    authorId: number
  }

  export type CallCreateManyCaseInput = {
    id?: number
    createdAt?: Date | string
    callStatus: $Enums.CALL_STATUS
    info?: string | null
    personId: number
    authorId: number
  }

  export type AppointmentUpdateWithoutCaseInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentStatus?: EnumAPPOINTMENT_STATUSFieldUpdateOperationsInput | $Enums.APPOINTMENT_STATUS
    person?: PersonUpdateOneRequiredWithoutAppointmentsNestedInput
    author?: EmployeeUpdateOneRequiredWithoutAuthoredAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutCaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentStatus?: EnumAPPOINTMENT_STATUSFieldUpdateOperationsInput | $Enums.APPOINTMENT_STATUS
    personId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentUncheckedUpdateManyWithoutCaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentStatus?: EnumAPPOINTMENT_STATUSFieldUpdateOperationsInput | $Enums.APPOINTMENT_STATUS
    personId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type CallUpdateWithoutCaseInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callStatus?: EnumCALL_STATUSFieldUpdateOperationsInput | $Enums.CALL_STATUS
    info?: NullableStringFieldUpdateOperationsInput | string | null
    author?: EmployeeUpdateOneRequiredWithoutAuthoredCallsNestedInput
    person?: PersonUpdateOneRequiredWithoutCallsNestedInput
  }

  export type CallUncheckedUpdateWithoutCaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callStatus?: EnumCALL_STATUSFieldUpdateOperationsInput | $Enums.CALL_STATUS
    info?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type CallUncheckedUpdateManyWithoutCaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callStatus?: EnumCALL_STATUSFieldUpdateOperationsInput | $Enums.CALL_STATUS
    info?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type PersonCreateManyOriginInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    link?: string | null
    email?: string | null
    homeAddress?: string | null
    authorId: number
    leadStatus?: $Enums.LEAD_STATUS
  }

  export type PersonUpdateWithoutOriginInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    author?: EmployeeUpdateOneRequiredWithoutAuthoredPersonsNestedInput
    cases?: CaseUpdateManyWithoutPersonNestedInput
    calls?: CallUpdateManyWithoutPersonNestedInput
    appointments?: AppointmentUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutOriginInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
    cases?: CaseUncheckedUpdateManyWithoutPersonNestedInput
    calls?: CallUncheckedUpdateManyWithoutPersonNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateManyWithoutOriginInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    homeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    leadStatus?: EnumLEAD_STATUSFieldUpdateOperationsInput | $Enums.LEAD_STATUS
  }

  export type CaseCreateManyOpponentInput = {
    id?: number
    createdAt?: Date | string
    caseImportance?: $Enums.IMPORTANCE
    caseUrgency?: $Enums.URGENCY
    caseStatus?: $Enums.CASE_STATUS
    categories?: CaseCreatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: string | null
    problemFull?: string | null
    nearestTask?: string | null
    courtInfo?: string | null
    nearestTaskDeadline?: Date | string | null
    timeOfPerformance?: Date | string | null
    assignmentTime?: Date | string | null
    nextDialDate?: Date | string | null
    lastDialDate?: Date | string | null
    refusalReason?: $Enums.REFUSAL_REASON | null
    legalAction?: $Enums.LEGAL_ACTION | null
    statusInCourt?: $Enums.STATUS_IN_COURT | null
    priceSOM?: bigint | number | null
    priceUSD?: bigint | number | null
    personId: number
    authorId: number
    managerId?: number | null
  }

  export type CaseUpdateWithoutOpponentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    author?: EmployeeUpdateOneRequiredWithoutAuthoredCasesNestedInput
    manager?: EmployeeUpdateOneWithoutManagedCasesNestedInput
    person?: PersonUpdateOneRequiredWithoutCasesNestedInput
    appointments?: AppointmentUpdateManyWithoutCaseNestedInput
    calls?: CallUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutOpponentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    personId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    appointments?: AppointmentUncheckedUpdateManyWithoutCaseNestedInput
    calls?: CallUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateManyWithoutOpponentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseImportance?: EnumIMPORTANCEFieldUpdateOperationsInput | $Enums.IMPORTANCE
    caseUrgency?: EnumURGENCYFieldUpdateOperationsInput | $Enums.URGENCY
    caseStatus?: EnumCASE_STATUSFieldUpdateOperationsInput | $Enums.CASE_STATUS
    categories?: CaseUpdatecategoriesInput | $Enums.CASE_CATEGORY[]
    problemShort?: NullableStringFieldUpdateOperationsInput | string | null
    problemFull?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTask?: NullableStringFieldUpdateOperationsInput | string | null
    courtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    nearestTaskDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeOfPerformance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignmentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refusalReason?: NullableEnumREFUSAL_REASONFieldUpdateOperationsInput | $Enums.REFUSAL_REASON | null
    legalAction?: NullableEnumLEGAL_ACTIONFieldUpdateOperationsInput | $Enums.LEGAL_ACTION | null
    statusInCourt?: NullableEnumSTATUS_IN_COURTFieldUpdateOperationsInput | $Enums.STATUS_IN_COURT | null
    priceSOM?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceUSD?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    personId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
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