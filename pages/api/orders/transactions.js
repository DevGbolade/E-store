import nc from "next-connect";
import Transaction from "../../../models/Transaction";
// import { isAuth } from "../../../utils/auth";
import db from "../../../utils/db";
import { onError } from "../../../utils/error";

const handler = nc({
  onError,
});
// handler.use(isAuth);

handler.post(async (req, res) => {
  await db.connect();
  console.log(req.body);
  const newTrx = new Transaction({
    ...req.body
  });
  const trx = await newTrx.save();
  res.status(201).send(trx);
});

export default handler;
