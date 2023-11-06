import { Model, RelationMappings } from 'objection';
import Channel from './channel';

class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get relationMappings(): RelationMappings {
    return {
      channel: {
        relation: Model.HasOneRelation,
        modelClass: Channel,
        join: {
          from: 'user.channelId',
          to: 'channel.id',
        },
      },
    };
  }
}

export default User;
