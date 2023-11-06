import { Model } from 'objection';

class Video extends Model {
  static get tableName() {
    return 'video';
  }
}

export default Video;