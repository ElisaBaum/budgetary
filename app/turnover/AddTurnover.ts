import {Field, InputType, ObjectType} from "type-graphql";

import {Turnover, TurnoverInput} from "./Turnover";

@InputType()
export class AddTurnoverInput  {

  @Field()
  turnover!: TurnoverInput;

}

@ObjectType()
export class AddTurnoverPayload {

  @Field({ nullable: true })
  turnover?: Turnover;

}
