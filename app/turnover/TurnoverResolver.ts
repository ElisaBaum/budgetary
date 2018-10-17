import {Arg, Mutation, Query, Resolver} from "type-graphql";

import {Turnover} from "./Turnover";
import {AddTurnoverInput, AddTurnoverPayload} from "./AddTurnover";
import {EditTurnoverInput, EditTurnoverPayload} from "./EditTurnover";

@Resolver()
export class TurnoverResolver {

  id: number = 1;

  turnoverData: Turnover[] = [
    new Turnover(this.id++, new Date(),-102.8),
    new Turnover(this.id++, new Date(),1000)
  ];

  @Query(() => [Turnover])
  turnovers() {
    return this.turnoverData;
  }

  @Mutation()
  addTurnover(@Arg("input") input: AddTurnoverInput): AddTurnoverPayload {
    const result = new AddTurnoverPayload();

    const createdTurnover = new Turnover(this.id++, input.turnover.date, input.turnover.amount);
    Object.assign(createdTurnover, input.turnover);
    createdTurnover.id = this.id++;

    this.turnoverData.push(createdTurnover);
    result.turnover = createdTurnover;
    return result;
  }

  @Mutation()
  editTurnover(@Arg("input") input: EditTurnoverInput): EditTurnoverPayload {
    const currentData = this.turnoverData.find(current => current.id == input.id);
    const result = new EditTurnoverPayload();

    if (currentData) {
      Object.assign(currentData, input.patch);
      result.turnover = currentData;
    }
    else {
      // todo throw error
      console.error("not found: " + input.id )
    }
    return result;
  }
}
