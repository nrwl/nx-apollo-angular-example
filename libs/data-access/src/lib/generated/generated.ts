import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { MutationOptionsAlone, QueryOptionsAlone, SubscriptionOptionsAlone, WatchQueryOptionsAlone } from 'apollo-angular/types';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};



export type Mutation = {
   __typename?: 'Mutation',
  addSet?: Maybe<Set>,
};


export type MutationAddSetArgs = {
  name?: Maybe<Scalars['String']>,
  year?: Maybe<Scalars['String']>,
  numParts?: Maybe<Scalars['Int']>
};

export type Query = {
   __typename?: 'Query',
  allSets?: Maybe<Array<Maybe<Set>>>,
};

export type Set = {
   __typename?: 'Set',
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>,
  year?: Maybe<Scalars['Int']>,
  numParts?: Maybe<Scalars['Int']>,
};

export type SetListQueryVariables = {};


export type SetListQuery = (
  { __typename?: 'Query' }
  & { allSets: Maybe<Array<Maybe<(
    { __typename?: 'Set' }
    & Pick<Set, 'id' | 'name' | 'numParts' | 'year'>
  )>>> }
);

export type AddSetMutationVariables = {
  name: Scalars['String'],
  year: Scalars['String'],
  numParts: Scalars['Int']
};


export type AddSetMutation = (
  { __typename?: 'Mutation' }
  & { addSet: Maybe<(
    { __typename?: 'Set' }
    & Pick<Set, 'id' | 'name' | 'numParts' | 'year'>
  )> }
);

export const SetListDocument = gql`
    query setList {
  allSets {
    id
    name
    numParts
    year
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SetListGQL extends Apollo.Query<SetListQuery, SetListQueryVariables> {
    document = SetListDocument;
    
  }
export const AddSetDocument = gql`
    mutation addSet($name: String!, $year: String!, $numParts: Int!) {
  addSet(name: $name, year: $year, numParts: $numParts) {
    id
    name
    numParts
    year
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddSetGQL extends Apollo.Mutation<AddSetMutation, AddSetMutationVariables> {
    document = AddSetDocument;
    
  }