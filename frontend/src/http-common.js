import axios from "axios";

export default axios.create({
    baseURL: "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/restaurant_reviews-flbcr/service/restaurants/incoming_webhook/",
    headers: {
        "Content-type": "application/json"
    }
})