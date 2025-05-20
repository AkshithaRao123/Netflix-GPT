import { CohereClient } from "cohere-ai";
import { cohereApiKey } from "./constants";

const cohere = new CohereClient({
    token: cohereApiKey,
});

export default cohere;