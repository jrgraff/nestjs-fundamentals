
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    getUser(): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    discordId: string;
    username: string;
    avatar?: Nullable<string>;
    discriminator: string;
}

type Nullable<T> = T | null;
