import {checkReqErrors} from 'src/includes/status';

export default function requestHandler(req, res) {
  if (req.method === 'GET') {
    checkReqErrors({msg: 'Server alive'}, res);
  } else {
    checkReqErrors({error: 'No End Point to this Request'}, res);
  }
}

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};
