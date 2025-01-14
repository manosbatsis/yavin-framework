export default [
  {
    id: 1,
    title: 'Tumblr Goals Dashboard',
    ownerId: 'navi_user',
    dashboardWidgetIds: [1, 2, 3],
    editorIds: [],
    createdOn: '2016-01-01 00:00:00',
    updatedOn: '2016-01-01 00:00:00',
    deliveryRuleIds: [],
    presentation: {
      version: 1,
      layout: [
        { column: 0, row: 0, height: 4, width: 6, widgetId: 1 },
        { column: 6, row: 0, height: 4, width: 6, widgetId: 2 },
        { column: 0, row: 4, height: 4, width: 12, widgetId: 3 },
      ],
      columns: 12,
    },
  },
  {
    id: 2,
    title: 'Dashboard 2',
    ownerId: 'navi_user',
    dashboardWidgetIds: [4, 5],
    editorIds: [],
    createdOn: '2016-02-01 00:00:00',
    updatedOn: '2016-02-01 00:00:00',
    deliveryRuleIds: [3],
    filters: [
      {
        type: 'timeDimension',
        dimension: 'bardOne.network.dateTime',
        operator: 'bet',
        field: 'day',
        values: ['P7D', 'current'],
      },
      {
        dimension: 'bardOne.property',
        operator: 'contains',
        field: 'id',
        values: ['114', '100001'],
      },
      {
        dimension: 'property',
        operator: 'notin',
        field: 'id',
        values: ['1'],
      },
      {
        dimension: 'property',
        operator: 'notin',
        field: 'id',
        values: ['2', '3'],
      },
      {
        dimension: 'eventId',
        operator: 'in',
        field: 'id',
        values: ['1'],
      },
    ],
    presentation: {
      version: 1,
      layout: [
        { column: 0, row: 0, height: 6, width: 9, widgetId: 4 },
        { column: 0, row: 6, height: 5, width: 9, widgetId: 5 },
      ],
      columns: 12,
    },
  },
  {
    id: 3,
    title: 'Dashboard 3',
    ownerId: 'ciela',
    editorIds: ['navi_user'],
    dashboardWidgetIds: [],
    createdOn: '2016-01-03 00:00:00',
    updatedOn: '2016-01-03 00:00:00',
    deliveryRuleIds: [],
    presentation: {
      version: 1,
      layout: [{ column: 0, row: 0, height: 6, width: 9, widgetId: 12 }],
      columns: 12,
    },
  },
  {
    id: 4,
    title: 'Revenue Dashboard',
    ownerId: 'ciela',
    dashboardWidgetIds: [6],
    editorIds: [],
    createdOn: '2016-01-01 00:00:00',
    updatedOn: '2016-01-01 00:00:00',
    deliveryRuleIds: [],
    filters: [
      {
        dimension: 'commaDim',
        operator: 'in',
        field: 'id',
        values: ['yes, comma'],
      },
    ],
    presentation: {
      version: 1,
      layout: [{ column: 0, row: 0, height: 6, width: 9, widgetId: 6 }],
      columns: 12,
    },
  },
  {
    id: 5,
    title: 'Empty Dashboard',
    ownerId: 'navi_user',
    dashboardWidgetIds: [],
    editorIds: [],
    createdOn: '2016-01-01 03:00:00',
    updatedOn: '2016-01-01 03:00:00',
    deliveryRuleIds: [],
    presentation: {
      version: 1,
      layout: [],
      columns: 12,
    },
  },
  {
    id: 6,
    title: 'Multi Source Dashboard',
    ownerId: 'navi_user',
    dashboardWidgetIds: [7, 8, 9],
    editorIds: [],
    createdOn: '2016-01-01 03:00:00',
    updatedOn: '2016-01-01 03:00:00',
    deliveryRuleIds: [],
    filters: [
      {
        type: 'timeDimension',
        dimension: 'bardOne.network.dateTime',
        operator: 'bet',
        field: 'day',
        values: ['P7D', 'current'],
      },
      { type: 'dimension', dimension: 'bardOne.age', operator: 'in', field: 'id', values: [1, 2, 3] },
      { type: 'dimension', dimension: 'bardTwo.container', operator: 'notin', field: 'id', values: [1] },
    ],
    presentation: {
      version: 1,
      layout: [
        { column: 0, row: 0, height: 4, width: 6, widgetId: 9 },
        { column: 6, row: 0, height: 4, width: 6, widgetId: 7 },
        { column: 0, row: 4, height: 4, width: 12, widgetId: 8 },
      ],
      columns: 12,
    },
  },
  {
    id: 7,
    title: 'Datasource Error Dashboard',
    ownerId: 'navi_user',
    createdOn: '2016-01-01 03:00:00',
    updatedOn: '2016-01-01 03:00:00',
    deliveryRuleIds: [],
    filters: [],
    presentation: {
      version: 1,
      layout: [
        { column: 0, row: 0, height: 4, width: 6, widgetId: 10 },
        { column: 6, row: 0, height: 4, width: 6, widgetId: 11 },
      ],
      columns: 12,
    },
  },
  {
    id: 8,
    title: 'Table Dashboard',
    ownerId: 'navi_user',
    createdOn: '2016-01-01 03:00:00',
    updatedOn: '2016-01-01 03:00:00',
    deliveryRuleIds: [],
    filters: [],
    presentation: {
      version: 1,
      layout: [{ column: 0, row: 0, height: 4, width: 6, widgetId: 13 }],
      columns: 12,
    },
  },
];
