import { GenezioDeploy } from "@genezio/types";

@GenezioDeploy()
export class BackendService {
  secret = "Capybaras are AWESOME! Shhh... don't tell the cats!";

  async hello(name) {
    console.log(name);
    return name;
  }

  async getSecret(user) {
    console.log(user);
    return secret;
  }
}
