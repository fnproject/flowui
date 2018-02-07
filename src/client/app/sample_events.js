const mockActiveGraphEvents=[
	{
		"seq": "0",
		"flow_id": "b9a67d31-7cae-424b-aff8-cf4965f79a5a",
		"graph_created": {
			"flow_id": "b9a67d31-7cae-424b-aff8-cf4965f79a5a",
			"function_id": "test/foo",
			"ts": "2017-11-30T17:27:28.685007446Z"
		}
	}
];

const mockSubscriptionData= {
	"b9a67d31-7cae-424b-aff8-cf4965f79a5a": [
		{
			"seq": "0",
			"flow_id": "b9a67d31-7cae-424b-aff8-cf4965f79a5a",
			"graph_created": {
				"flow_id": "b9a67d31-7cae-424b-aff8-cf4965f79a5a",
				"function_id": "test/foo",
				"ts": "2017-11-30T17:27:28.685007446Z"
			}
		},
		{
			"seq": "1",
			"flow_id": "b9a67d31-7cae-424b-aff8-cf4965f79a5a",
			"stage_added": {
				"stage_id": "0",
				"op": "delay",
				"closure": null,
				"dependencies": [],
				"ts": "2017-11-30T17:29:08.478561846Z",
				"code_location": "",
				"caller_id": "",
				"flow_id": "b9a67d31-7cae-424b-aff8-cf4965f79a5a"
			}
		},
		{
			"seq": "2",
			"flow_id": "b9a67d31-7cae-424b-aff8-cf4965f79a5a",
			"delay_scheduled": {
				"stage_id": "0",
				"time_ms": "1512062958480",
				"ts": "2017-11-30T17:29:08.480184266Z",
				"flow_id": "b9a67d31-7cae-424b-aff8-cf4965f79a5a"
			}
		},
		{
			"seq": "3",
			"flow_id": "b9a67d31-7cae-424b-aff8-cf4965f79a5a",
			"stage_completed": {
				"stage_id": "0",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-11-30T17:29:18.484233585Z",
				"flow_id": "b9a67d31-7cae-424b-aff8-cf4965f79a5a"
			}
		}
	]
};
   export {mockActiveGraphEvents,mockSubscriptionData} ;
