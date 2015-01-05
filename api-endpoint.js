'use strict';

var endpoints = {
  api: {
    test: {
      url: 'https://slack.com/api/channels.test',
      description: 'Checks API calling code. Any arguments passed into this method are returned.',
      help: 'https://api.slack.com/methods/channels.test',
      arguments: [
        error: {
          required: false,
          description: 'Error response to return'
        }
      ]
      errors: {}
    }
  }
  auth: {
    test: {
      url: 'https://slack.com/api/channels.test',
      description: 'This method checks authentication and tells you who you are.',
      help: 'https://api.slack.com/methods/channels.test',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: identify)'
        }
      ]
      errors: {
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.'
      }
    }
  }
  channel: {
    archive: {
      url: 'https://slack.com/api/channels.archive',
      description: 'This method archives a channel.',
      help: 'https://api.slack.com/methods/channels.archive',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Channel to archive'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'already_archived': 'Channel has already been archived.',
        'cant_archive_general': 'You cannot archive the general channel.',
        'last_ra_channel': 'You cannot archive the last channel for a restricted account',
        'restricted_action': 'A team preference prevents the authenticated user from archiving.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_restricted': 'This method cannot be called by a restricted user or single channel guest.'
      }
    },
    create: {
      url: 'https://slack.com/api/channels.create',
      description: 'This method is used to create a channel.',
      help: 'https://api.slack.com/methods/channels.create',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: read)'
        },
        channel: {
          required: true,
          description: 'Name of channel to create'
        }
      ],
      errors: {
        'name_taken': 'A channel cannot be created with the given name.',
        'restricted_action': 'A team preference prevents the authenticated user from creating channels.',
        'no_channel': 'Value passed for name was empty.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_restricted': 'This method cannot be called by a restricted user or single channel guest.'
      }
    },
    history: {
      url: 'https://slack.com/api/channels.history',
      description: 'This method returns a portion of messages/events from the specified channel. To read the entire history for a channel, call the method with no latest or oldest arguments, and then continue paging using the instructions below.',
      help: 'https://api.slack.com/methods/channels.history'
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: read)'
        },
        channel: {
          required: true,
          description: 'Channel to fetch history for.'
        },
        latest: {
          required: false,
          description: 'Latest message timestamp to include in results.'
        },
        oldest: {
          required: false,
          description: 'Oldest message timestamp to include in results.'
        },
        count: {
          required: false,
          description: 'Number of messages to return, between 1 and 1000.'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'invalid_ts_latest': 'Value passed for latest was invalid',
        'invalid_ts_oldest': 'Value passed for oldest was invalid',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.'
      }
    },
    info: {
      url: 'https://slack.com/api/channels.info',
      description: 'This method returns information about a team channel.',
      help: 'https://api.slack.com/methods/channels.info',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: read)'
        },
        channel: {
          required: true,
          description: 'Channel to get info on'
        }
      ],
      error: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.'
      }
    },
    invite: {
      url: 'https://slack.com/api/channels.invite',
      description: 'This method is used to invite a user to a channel. The calling user must be a member of the channel.',
      help: 'https://api.slack.com/methods/channels.invite',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Channel to invite user to.'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'user_not_found': 'Value passed for user was invalid.',
        'cant_invite_self': 'Authenticated user cannot invite themselves to a channel.',
        'not_in_channel': 'Authenticated user is not in the channel.',
        'already_in_channel': 'Invited user is already in the channel.',
        'is_archived': 'Channel has been archived.',
        'cant_invite': 'User cannot be invited to this channel.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_ultra_restricted': 'This method cannot be called by a single channel guest.'
      }
    },
    join: {
      url: 'https://slack.com/api/channels.join',
      description: 'This method is used to join a channel. If the channel does not exist, it is created.',
      help: 'https://api.slack.com/methods/channels.join',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        name: {
          required: true,
          description: 'Name of channel to join'

        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'name_taken': 'A channel cannot be created with the given name.',
        'restricted_action': 'A team preference prevents the authenticated user from creating channels.',
        'no_channel': 'Value passed for name was empty.',
        'is_archived': 'Channel has been archived.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_restricted': 'This method cannot be called by a restricted user or single channel guest.'
      }
    },
    kick: {
      url: 'https://slack.com/api/channels.kick',
      description: 'This method allows a user to remove another member from a team channel.',
      help: 'https://api.slack.com/methods/channels.kick',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Channel to remove user from.'
        },
        user: {
          required: true,
          description: 'User to remove from channel.'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'user_not_found': 'Value passed for user was invalid.',
        'cant_kick_self': 'Authenticated user can\'t kick themselves from a channel.'
        'not_in_channel': 'User was not in the channel.',
        'cant_kick_from_general': 'User cannot be removed from #general.',
        'cant_kick_from_last_channel': 'User cannot be removed from the last channel they\'re in.',
        'restricted_action': 'A team preference prevents the authenticated user from kicking.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_restricted': 'This method cannot be called by a restricted user or single channel guest.'
      }
    },
    leave: {
      url: 'https://slack.com/api/channels.leave',
      description: 'This method is used to leave a channel.',
      help: 'https://api.slack.com/methods/channels.leave',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Channel to leave'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'is_archived': 'Channel has been archived.',
        'cant_leave_general': 'Authenticated user cannot leave the general channel.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_restricted': 'This method cannot be called by a restricted user or single channel guest.'
      }
    },
    list: {
      url: 'https://slack.com/api/channels.list',
      description: 'This method returns a list of all channels in the team. This includes channels the caller is in, channels they are not currently in, and archived channels. The number of (non-deactivated) members in each channel is also returned.',
      help: 'https://api.slack.com/methods/channels.list',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: read)'
        },
        exclude_archived: {
            required: false,
            description: 'Don\'t return archived channels.'
        }
      ],
      errors: {
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.'
      }
    },
    mark: {
      url: 'https://slack.com/api/channels.mark',
      description: 'This method moves the read cursor in a channel.',
      help: 'https://api.slack.com/methods/channels.mark',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Channel to set reading cursor in.'
        },
        ts: {
          required: true,
          description: 'Timestamp of the most recently seen message.'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'not_in_channel': 'Caller is not a member of the channel.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.'
      }
    },
    rename: {
      url: 'https://slack.com/api/channels.rename',
      description: 'This method renames a team channel.\nThe only people who can rename a channel are team admins, or the person that originally created the channel. Others will recieve a "not_authorized" error.',
      help: 'https://api.slack.com/methods/channels.rename',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Channel to rename'
        },
        name: {
          required: true,
          description: 'New name for channel.'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'not_in_channel': 'Caller is not a member of the channel.',
        'not_authorized': 'Caller cannot rename this channel',
        'invalid_name': 'New name is invalid',
        'name_taken': 'New channel name is taken',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_restricted': 'This method cannot be called by a restricted user or single channel guest.'
      }
    },
    setPurpose: {
      url: 'https://slack.com/api/channels.setPurpose',
      description: 'This method is used to change the purpose of a channel. The calling user must be a member of the channel.',
      help: 'https://api.slack.com/methods/channels.setPurpose',
      arguments: [
        token: {
          required: true,
          desciption: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Channel to set the purpose of'
        },
        purpose: {
          required: true,
          description: 'The new purpose'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'not_in_channel': 'Authenticated user is not in the channel.',
        'is_archived': 'Channel has been archived.',
        'too_long': 'Purpose was longer than 250 characters.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_restricted': 'This method cannot be called by a restricted user or single channel guest.'
      }
    },
    setTopic: {
      url: 'https://slack.com/api/channels.setTopic',
      description: 'This method is used to change the topic of a channel. The calling user must be a member of the channel.',
      help: 'https://api.slack.com/methods/channels.setTopic',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Channel to set the topic of'
        },
        topic: {
          required: true,
          description: 'The new topic'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'not_in_channel': 'Authenticated user is not in the channel.',
        'is_archived': 'Channel has been archived.',
        'too_long': 'Topic was longer than 250 characters.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_restricted': 'This method cannot be called by a restricted user or single channel guest.'
      }
    },
    unarchive: {
      url: 'https://slack.com/api/channels.unarchive',
      description: 'This method unarchives a channel. The calling user is added to the channel.',
      help: 'https://api.slack.com/methods/channels.unarchive',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Channel to unarchive'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'not_archived': 'Channel is not archived.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_restricted': 'This method cannot be called by a restricted user or single channel guest.'
      }
    }
  },
  chat: {
    delete: {
      url: 'https://slack.com/api/channels.delete',
      description: 'This method deletes a message from a channel.',
      help: 'https://api.slack.com/methods/channels.delete',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        ts: {
          required: true,
          description: 'Timestamp of the message to be deleted.'
        },
        channel: {
          required: true,
          description: 'Channel to unarchive'
        }
      ],
      errors: {
        'message_not_found': 'No message exists with the requested timestamp.',
        'channel_not_found': 'Value passed for channel was invalid.',
        'cant_delete_message': 'Authenticated user does not have permission to delete this message.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.'
      }
    },
    postMessage: {
      url: 'https://slack.com/api/channels.postMessage',
      description: 'Sends a message to a channel.',
      help: 'https://api.slack.com/methods/channels.postMessage',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name.'
        },
        text: {
          required: true,
          description: 'Text of the message to send. See below for an explanation of formatting.'
        },
        username: {
          required: false,
          description: 'Name of bot.'
        },
        parse: {
          required: false,
          description: 'Change how messages are treated.'
        },
        link_names: {
          required: false,
          description: 'Find and link channel names and usernames.'
        },
        attachments: {
          required: false,
          description: 'Structured message attachments.',
          validation: '^(full|none)$'
        },
        unfurl_links: {
          required: false,
          description: 'Pass true to enable unfurling of primarily text-based content.',
          validation: '^(true|false)$'
        },
        unfurl_media: {
          required: false,
          description: 'Pass false to disable unfurling of media content.',
          validation: '^(true|false)$'
        },
        icon_url: {
          required: false,
          description: 'URL to an image to use as the icon for this message'
        },
        icon_emoji: {
          required: false,
          description: 'emoji to use as the icon for this message. Overrides icon_url.',
          validation: '^:[^:\s]:$'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'is_archived': 'Channel has been archived.',
        'msg_too_long': 'Message text is too long',
        'no_text': 'No message text provided',
        'rate_limited': 'Application has posted too many messages, read the Rate Limit documentation for more information',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.'
      }
    },
    update: {
      url: 'https://slack.com/api/channels.update',
      description: 'This method updates a message in a channel.',
      help: 'https://api.slack.com/methods/channels.update',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)',
          validation: '.-.-.'
        },
        ts: {
          required: true,
          description: 'Timestamp of the message to be updated.',
          validation: '^\d{10}\.\d{6}$'
        },
        channel: {
          required: true,
          description: 'Channel containing the message to be updated.',
          validation: '^C\d{10}$'
        },
        text: {
          required: true,
          description: 'New text for the message, using the default formatting rules.'
        }
      ],
      errors: {
        'message_not_found': 'No message exists with the requested timestamp.',
        'cant_update_message': 'Authenticated user does not have permission to update this message.',
        'channel_not_found': 'Value passed for channel was invalid.',
        'edit_window_closed': 'The message cannot be edited due to the team message edit settings',
        'msg_too_long': 'Message text is too long',
        'no_text': 'No message text provided',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.'
      }
    }
  },
  emoji: {
    list: {
      url: 'https://slack.com/api/channels.list',
      description: 'This method lists the custom emoji for a team.',
      help: 'https://api.slack.com/methods/channels.list',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: read)'
        }
      ],
      errors: {
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.'
      }
    }
  },
  files: {
    info: {
      url: 'https://slack.com/api/channels.info',
      description: 'This method returns information about a file in your team.',
      help: 'https://api.slack.com/methods/channels.info',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: read)',
          validation: '.-.-.'
        },
        file: {
          required: true,
          description: 'File to fetch info for',
          validation: '^F\d{10}$'
        },
        count: {
          required: false,
          description: 'Number of items to return per page.',
          validation: '^\d+$'
        },
        page: {
          required: false,
          description: 'Page number of results to return.',
          validation: '^\d+$'
        }
      ],
      errors: {
        'file_not_found': 'Value passed for file was invalid',
        'file_deleted': 'The requested file has been deleted',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.'
      }
    },
    list: {
      url: 'https://slack.com/api/channels.list',
      description: 'Lists & filters team files.',
      help: 'https://api.slack.com/methods/channels.list',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: read)',
          validation: '.-.-.'
        },
        user: {
          required: false,
          description: 'Filter files created by a single user.',
          validation: '^U\d{10}$'
        },
        ts_from: {
          required: false,
          description: 'Filter files created after this timestamp (inclusive).',
          validation: '^\d{10}\.\d{6}$'
        },
        ts_to: {
          required: false,
          description: 'Filter files created before this timestamp (inclusive).',
          validation: '^\d{10}\.\d{6}$'
        },
        types: {
          required: false,
          description: 'Filter files by type:\n\nall - All files\nposts - Posts\nsnippets - Snippets\nimages - Image files\ngdocs - Google docs\nzips - Zip files\npdfs - PDF files\n\nYou can pass multiple values in the types argument, like types=posts,snippets.The default value is all, which does not filter the list.'
        },
        count: {
          required: false,
          description: 'Number of items to return per page.',
          validation: '^\d+$'
        },
        page: {
          required: false,
          description: 'Page number of results to return.',
          validation: '^\d+$'
        }
      ],
      errors: {
        'user_not_found': 'Value passed for user was invalid',
        'unknown_type': 'Value passed for types was invalid',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.'
      }
    },
    upload: {
      url: 'https://slack.com/api/channels.upload',
      description: 'This method allows you to create or upload an existing file.',
      help: 'https://api.slack.com/methods/channels.upload',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)',
          validation: '.-.-.'
        },
        file: {
          required: false,
          description: 'File contents via multipart/form-data.'
        },
        content: {
          required: false,
          description: 'File contents via a POST var.'
        },
        filetype: {
          required: false,
          description: 'Slack-internal file type identifier.'
        },
        title: {
          required: false,
          description: 'Title of file.'
        },
        initial_comment: {
          required: false,
          description: 'Initial comment to add to file.'
        },
        channels: {
          required: false,
          description: 'Comma separated list of channels to share the file into.'
        }
      ],
      errors: {
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.'
      }
    }
  },
  groups: {
    archive: {
      url: 'https://slack.com/api/groups.archive',
      description: 'This method archives a private group.',
      help: 'https://api.slack.com/methods/groups.archive',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Private group to archive'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'already_archived': 'Group has already been archived.',
        'group_contains_others': 'Restricted accounts cannot archive groups containing others.',
        'last_ra_channel': 'You cannot archive the last channel for a restricted account.',
        'restricted_action': 'A team preference prevents the authenticated user from archiving.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_ultra_restricted': 'This method cannot be called by a single channel guest.'
      }
    },
    close: {
      url: 'https://slack.com/api/groups.close',
      description: 'This method closes a private group.',
      help: 'https://api.slack.com/methods/groups.close',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Private group to close'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.'
      }
    },
    create: {
      url: 'https://slack.com/api/groups.create',
      description: 'This method creates a private group.',
      help: 'https://api.slack.com/methods/groups.create',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Name of group to create'
        }
      ],
      errors: {
        'no_channel': 'No group name was passed.',
        'restricted_action': 'A team preference prevents the authenticated user from creating groups.',
        'name_taken': 'A group cannot be created with the given name.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_ultra_restricted': 'This method cannot be called by a single channel guest.'
      }
    },
    createChild: {
      url: 'https://slack.com/api/groups.createChild',
      description: 'This method takes an existing private group and performs the following steps:\n\nRenames the existing group (from "example" to "example-archived").\nArchives the existing group.\nCreates a new group with the name of the existing group.\nAdds all members of the existing group to the new group.\nThis is useful when inviting a new member to an existing group while hiding all previous chat history from them. In this scenario you can call groups.createChild followed by groups.invite.\n\nThe new group will have a special parent_group property pointing to the original archived group. This will only be returned for members of both groups, so will not be visible to any newly invited members.',
      help: 'https://api.slack.com/methods/groups.createChild',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Group to clone and archive.'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'already_archived': 'An archived group cannot be cloned',
        'restricted_action': 'A team preference prevents the authenticated user from creating groups.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_ultra_restricted': 'This method cannot be called by a single channel guest.'
      }
    },
    history: {
      url: 'https://slack.com/api/groups.history',
      description: 'This method returns a portion of messages/events from the specified private group. To read the entire history for a group, call the method with no latest or oldest arguments, and then continue paging using the instructions below.',
      help: 'https://api.slack.com/methods/groups.history',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: read)'
        },
        channel: {
          required: true,
          description: 'Group to fetch history for.',
          validation: '^G\d{10}$'
        },
        latest: {
          required: false,
          description: 'Latest message timestamp to include in results.',
          validation: '^\d{10}\.\d{6}$'
        },
        oldest: {
          required: false,
          description: 'Oldest message timestamp to include in results.',
          validation: '^\d{10}\.\d{6}$'
        },
        count: {
          required: false,
          description: 'Number of messages to return, between 1 and 1000.',
          validation: '^(1000|\d{1,3})$'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'invalid_ts_latest': 'Value passed for latest was invalid',
        'invalid_ts_oldest': 'Value passed for oldest was invalid',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.'
      }
    },
    invite: {
      url: 'https://slack.com/api/groups.invite',
      description: 'This method is used to invite a user to a private group. The calling user must be a member of the group.\n\nTo invite a new member to a group without giving them access to the archives of the group call the groups.createChild method before inviting.',
      help: 'https://api.slack.com/methods/groups.invite',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Private group to invite user to.',
          validation: '^G\d{10}$'
        },
        user: {
          required: true,
          description: 'User to invite.',
          validation: '^U\d{10}$'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'user_not_found': 'Value passed for user was invalid.',
        'cant_invite_self': 'Authenticated user cannot invite themselves to a group.',
        'is_archived': 'Group has been archived.',
        'cant_invite': 'User cannot be invited to this group.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_ultra_restricted': 'This method cannot be called by a single channel guest.'
      }
    },
    kick: {
      url: 'https://slack.com/api/groups.kick',
      description: 'This method allows a user to remove another member from a private group.',
      help: 'https://api.slack.com/methods/groups.kick',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Group to remove user from.',
          validation: '^G\d{10}$'
        },
        user: {
          required: true,
          description: 'User to remove from group.',
          validation: '^U\d{10}$'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'user_not_found': 'Value passed for user was invalid.',
        'cant_kick_self': 'You can\'t remove yourself from a group',
        'not_in_group': 'User or caller were are not in the group',
        'restricted_action': 'A team preference prevents the authenticated user from kicking.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_restricted': 'This method cannot be called by a restricted user or single channel guest.'
      }
    },
    leave: {
      url: 'https://slack.com/api/groups.leave',
      description: 'This method is used to leave a private group.',
      help: 'https://api.slack.com/methods/groups.leave',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Group to leave.',
          validation: '^G\d{10}$'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'is_archived': 'Group has been archived.',
        'cant_leave_last_channel': 'Authenticated user cannot leave the last channel they are in',
        'last_member': 'Authenticated user is the last member of a group and cannot leave it',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_ultra_restricted': 'This method cannot be called by a single channel guest.'
      }
    },
    list: {
      url: 'https://slack.com/api/groups.list',
      description: 'This method returns a list of groups in the team that the caller is in and archived groups that the caller was in. The list of (non-deactivated) members in each group is also returned.',
      help: 'https://api.slack.com/methods/groups.list',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: read)'
        },
        exclude_archived: {
          required: false,
          description: 'Don\'t return archived groups.'
        }
      ],
      errors: {
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.'
      }
    },
    mark: {
      url: 'https://slack.com/api/groups.mark',
      description: 'This method moves the read cursor in a private group.',
      help: 'https://api.slack.com/methods/groups.mark',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Group to set reading cursor in.'
        },
        ts: {
          required: true,
          description: 'Timestamp of the most recently seen message.'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'not_in_channel': 'Caller is not a member of the channel.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.'
      }
    },
    open: {
      url: 'https://slack.com/api/groups.open',
      description: 'This method opens a private group.',
      help: 'https://api.slack.com/methods/groups.open',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: read)'
        },
        channel: {
          required: true,
          description: 'Group to open.'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team'
      }
    },
    rename: {
      url: 'https://slack.com/api/groups.rename',
      description: 'This method renames a private group.',
      help: 'https://api.slack.com/methods/groups.rename',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Group to rename.'
        },
        name: {
          required: true,
          description: 'New name for group.'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'invalid_name': 'New name is invalid',
        'name_taken': 'New channel name is taken',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_restricted': 'This method cannot be called by a restricted user or single channel guest.'
      }
    },
    setPurpose: {
      url: 'https://slack.com/api/groups.setPurpose',
      description: 'This method is used to change the purpose of a private group. The calling user must be a member of the private group.',
      help: 'https://api.slack.com/methods/groups.setPurpose',
      arguments: [
        token: {
          required: true,
          description: 'Authentication token (Requires scope: post)'
        },
        channel: {
          required: true,
          description: 'Private group to set the purpose of'
        },
        name: {
          required: true,
          description: 'The new purpose'
        }
      ],
      errors: {
        'channel_not_found': 'Value passed for channel was invalid.',
        'not_in_channel': 'Authenticated user is not in the private group.',
        'is_archived': 'Private group has been archived',
        'too_long': 'Purpose was longer than 250 characters.',
        'not_authed': 'No authentication token provided.',
        'invalid_auth': 'Invalid authentication token.',
        'account_inactive': 'Authentication token is for a deleted user or team.',
        'user_is_bot': 'This method cannot be called by a bot user.',
        'user_is_restricted': 'This method cannot be called by a restricted user or single channel guest.'
      }
    },
    setTopic: {
      url: 'https://slack.com/api/groups.setTopic',
      description: 'Sets the topic for a private group.',
      help: 'https://api.slack.com/methods/groups.setTopic',
      arguments: [],
      errors: {}
    },
    unarchive: {
      url: 'https://slack.com/api/groups.unarchive',
      description: 'Unarchives a private group.',
      help: 'https://api.slack.com/methods/groups.unarchive',
      arguments: [],
      errors: {}
    }
  },
  im: {
    .close: {
      url: 'https://slack.com/api/im.close',
      description: 'Close a direct message channel.',
      help: 'https://api.slack.com/methods/im.close',
      arguments: [],
      errors: {}
    },
    .history: {
      url: 'https://slack.com/api/im.history',
      description: 'Fetches history of messages and events from direct message channel.',
      help: 'https://api.slack.com/methods/im.history',
      arguments: [],
      errors: {}
    },
    .list: {
      url: 'https://slack.com/api/im.list',
      description: 'Lists direct message channels for the calling user.',
      help: 'https://api.slack.com/methods/im.list',
      arguments: [],
      errors: {}
    },
    .mark: {
      url: 'https://slack.com/api/im.mark',
      description: 'Sets the read cursor in a direct message channel.',
      help: 'https://api.slack.com/methods/im.mark',
      arguments: [],
      errors: {}
    },
    .open: {
      url: 'https://slack.com/api/im.open',
      description: 'Opens a direct message channel.',
      help: 'https://api.slack.com/methods/im.open',
      arguments: [],
      errors: {}
    }
  },
  auth: {
    access: {
      url: 'https://slack.com/api/auth.access',
      description: 'Exchanges a temporary OAuth code for an API token.',
      help: 'https://api.slack.com/methods/auth.access',
      arguments: [],
      errors: {}
    }
  },
  rtm: {
    start: {
      url: 'https://slack.com/api/rtm.start',
      description: 'Starts a Real Time Messaging session.',
      help: 'https://api.slack.com/methods/rtm.start',
      arguments: [],
      errors: {}
    }
  },
  search: {
    all: {
      url: 'https://slack.com/api/search.all',
      description: 'Searches for messages and files matching a query.',
      help: 'https://api.slack.com/methods/search.all',
      arguments: [],
      errors: {}
    },
    files: {
      url: 'https://slack.com/api/search.files',
      description: 'Searches for files matching a query.',
      help: 'https://api.slack.com/methods/search.files',
      arguments: [],
      errors: {}
    },
    messages: {
      url: 'https://slack.com/api/search.messages',
      description: 'Searches for messages matching a query.',
      help: 'https://api.slack.com/methods/search.messages',
      arguments: [],
      errors: {}
    }
  },
  stars: {
    list: {
      url: 'https://slack.com/api/stars.list',
      description: 'Lists stars for a user.',
      help: 'https://api.slack.com/methods/stars.list',
      arguments: [],
      errors: {}
    }
  },
  users: {
    getPresence: {
      url: 'https://slack.com/api/users.getPresence',
      description: 'Gets user presence information.',
      help: 'https://api.slack.com/methods/users.getPresence',
      arguments: [],
      errors: {}
    },
    info: {
      url: 'https://slack.com/api/users.info',
      description: 'Gets information about a user.',
      help: 'https://api.slack.com/methods/users.info',
      arguments: [],
      errors: {}
    },
    list: {
      url: 'https://slack.com/api/users.list',
      description: 'Lists all users in a Slack team.',
      help: 'https://api.slack.com/methods/users.list',
      arguments: [],
      errors: {}
    },
    setActive: {
      url: 'https://slack.com/api/users.setActive',
      description: 'Marks a user as active.',
      help: 'https://api.slack.com/methods/users.setActive',
      arguments: [],
      errors: {}
    },
    setPresence: {
      url: 'https://slack.com/api/users.setPresence',
      description: 'Manually sets user presence.',
      help: 'https://api.slack.com/methods/users.setPresence',
      arguments: [],
      errors: {}
    }
  }
}
