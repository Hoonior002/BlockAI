// Subscriber

import Publisher "canister:AIpub";

actor Subscriber {


  public func init(topic0 : Text) {
    Publisher.subscribe({
      topic = topic0;
    });
  };

  public query func getprompt() : async text {
    prompt;
  };
   let data: [Text] = [topic];

    public func getData() : async [Text] {
        return data;
    }
}

   