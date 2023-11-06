import { Model } from 'objection';

class Channel extends Model {
  static get tableName() {
    return 'channel';
  }
}

export default Channel;
