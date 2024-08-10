// search.mo
import Subscriber "main.mo";

actor Searcher {
    public func search(query: Text) : async ?Text {
        let data = await DataStore.getData();
        switch (List.findIndex((item) => item == query, data)) {
            case (null) { return null; } // Not found
            case (some(index)) { return data[index]; } // Found
        }
    }
}