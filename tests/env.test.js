import test from "ava";
import {
  AUTHER_ENDPOINT,
  AUTHER_MOCK_USERNAME,
  AUTHER_MOCK_PASSWORD
} from "babel-dotenv";

test("AUTHER_ENDPOINT set", t => {
  t.is(AUTHER_ENDPOINT, "http://localhost:3000/api");
});

test("AUTHER_MOCK_USERNAME set", t => {
  t.truthy(AUTHER_MOCK_USERNAME);
});

test("AUTHER_MOCK_PASSWORD set", t => {
  t.truthy(AUTHER_MOCK_PASSWORD);
});
