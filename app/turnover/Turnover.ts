import {Field, Float, ID, InputType, InterfaceType, ObjectType} from "type-graphql";

@InterfaceType("ITurnover")
@InputType()
export class TurnoverInput {

  constructor(date: Date, amount: number) {
    this.date = date;
    this.amount = amount;
  }

  @Field()
  date!: Date;

  @Field(type => Float)
  amount!: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  category?: string;

}

@ObjectType({ implements: TurnoverInput })
export class Turnover extends TurnoverInput {

  // todo remove
  constructor(id: number, date: Date, amount: number) {
    super(date, amount);
    this.id = id;
  }

  @Field(type => ID)
  id!: number;

}
