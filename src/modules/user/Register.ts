import { Resolver, Mutation, Query } from "type-graphql";

@Resolver()
export class RegisterResolver {
  @Query(() => String, { nullable: true })
  async hello() {
    return "Hello World";
  }
}
