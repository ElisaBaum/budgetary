import {Field, ID, InputType, ObjectType} from "type-graphql";

import {Turnover, TurnoverInput} from "./Turnover";

@InputType()
export class EditTurnoverInput  {

  @Field(type => ID)
  id!: number;

  @Field()
  patch!: TurnoverInput;

}

@ObjectType()
export class EditTurnoverPayload {

  @Field({ nullable: true })
  turnover?: Turnover;

}
