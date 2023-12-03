cube(`Events`, {
  sql: `SELECT * FROM analytics.events`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [userCity, userCountryCode, userCountryName, userCountryRegion, clickId, eventId]
    }
  },
  
  dimensions: {
    isMobile: {
      sql: `is_mobile`,
      type: `string`
    },
    
    userInEu: {
      sql: `user_in_eu`,
      type: `string`
    },
    
    eventType: {
      sql: `event_type`,
      type: `string`
    },
    
    pagePath: {
      sql: `page_path`,
      type: `string`
    },
    
    userIp: {
      sql: `user_ip`,
      type: `string`
    },
    
    userCity: {
      sql: `user_city`,
      type: `string`
    },
    
    userCountryCode: {
      sql: `user_country_code`,
      type: `string`
    },
    
    userCountryName: {
      sql: `user_country_name`,
      type: `string`
    },
    
    userCountryRegion: {
      sql: `user_country_region`,
      type: `string`
    },
    
    userContinent: {
      sql: `user_continent`,
      type: `string`
    },
    
    userTimezone: {
      sql: `user_timezone`,
      type: `string`
    },
    
    userLanguages: {
      sql: `user_languages`,
      type: `string`
    },
    
    userAgent: {
      sql: `user_agent`,
      type: `string`
    },
    
    userOs: {
      sql: `user_os`,
      type: `string`
    },
    
    clickText: {
      sql: `click_text`,
      type: `string`
    },
    
    clickId: {
      sql: `click_id`,
      type: `string`
    },
    
    clickClass: {
      sql: `click_class`,
      type: `string`
    },
    
    eventId: {
      sql: `event_id`,
      type: `string`
    },
    
    eventTime: {
      sql: `event_time`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
