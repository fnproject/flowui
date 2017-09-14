const mockActiveGraphEvents=[
	{
		"type": "model.GraphCreatedEvent",
		"sub": "_all",
		"data": {
			"graph_id": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"function_id": "travel/saga",
			"ts": "2017-09-14T13:24:58.141768562Z"
		}
	},
    {
        "type": "model.GraphCreatedEvent",
        "sub": "_all",
        "data": {
            "graph_id": "1aa07def-7796-41e7-8f2d-fa1bc29566e4",
            "function_id": "myapp/flow",
            "ts": "2017-09-14T00:01:10.770984343Z"
        }
    }
];

const mockSubscriptionData= {
	"1a33f742-3227-4add-b569-939dd0b63ff8": [
		{
			"type": "model.GraphCreatedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"graph_id": "1a33f742-3227-4add-b569-939dd0b63ff8",
				"function_id": "travel/saga",
				"ts": "2017-09-14T13:24:58.141768562Z"
			}
		},
		{
			"type": "model.GraphCreatedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"graph_id": "1a33f742-3227-4add-b569-939dd0b63ff8",
				"function_id": "travel/saga",
				"ts": "2017-09-14T13:24:58.141768562Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "0",
				"op": "supply",
				"closure": {
					"blob_id": "4676781e-c1ad-4371-8cf9-7a35fcb595f6",
					"content_type": "application/java-serialized-object",
					"length": "783"
				},
				"dependencies": [],
				"ts": "2017-09-14T13:24:58.315535473Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "0",
				"ts": "2017-09-14T13:24:58.345975207Z",
				"function_id": "travel/saga"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "1",
				"op": "supply",
				"closure": {
					"blob_id": "9334deb7-db5e-42ed-b945-91f20b57d899",
					"content_type": "application/java-serialized-object",
					"length": "789"
				},
				"dependencies": [],
				"ts": "2017-09-14T13:24:58.397847989Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "1",
				"ts": "2017-09-14T13:24:58.424948440Z",
				"function_id": "travel/saga"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "2",
				"op": "thenCombine",
				"closure": {
					"blob_id": "d61d6ef3-948a-406e-a9c7-353d4cc06710",
					"content_type": "application/java-serialized-object",
					"length": "809"
				},
				"dependencies": [
					"0",
					"1"
				],
				"ts": "2017-09-14T13:24:58.495530103Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "3",
				"op": "supply",
				"closure": {
					"blob_id": "a1ac7d14-b57b-4bdc-a3cc-ebfbae5d40fe",
					"content_type": "application/java-serialized-object",
					"length": "786"
				},
				"dependencies": [],
				"ts": "2017-09-14T13:24:58.566866738Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "3",
				"ts": "2017-09-14T13:24:58.595541108Z",
				"function_id": "travel/saga"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "4",
				"op": "thenCombine",
				"closure": {
					"blob_id": "9a321b9c-93f3-4fad-8f99-373d01b56a00",
					"content_type": "application/java-serialized-object",
					"length": "833"
				},
				"dependencies": [
					"2",
					"3"
				],
				"ts": "2017-09-14T13:24:58.684391225Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "5",
				"op": "whenComplete",
				"closure": {
					"blob_id": "30606a2b-b1a6-48cb-867f-63d076999a12",
					"content_type": "application/java-serialized-object",
					"length": "1538"
				},
				"dependencies": [
					"4"
				],
				"ts": "2017-09-14T13:24:58.766256544Z"
			}
		},
		{
			"type": "model.GraphCommittedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"graph_id": "1a33f742-3227-4add-b569-939dd0b63ff8",
				"ts": "2017-09-14T13:24:58.833231444Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "0",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "1648ebf5-c97e-40c5-a788-f8106b05c4c2",
							"content_type": "application/java-serialized-object",
							"length": "13"
						}
					}
				},
				"ts": "2017-09-14T13:25:00.317038156Z",
				"call_id": "01BT090QC507WKJ00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "0",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "1648ebf5-c97e-40c5-a788-f8106b05c4c2",
							"content_type": "application/java-serialized-object",
							"length": "13"
						}
					}
				},
				"ts": "2017-09-14T13:25:00.355416330Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "1",
				"result": {
					"successful": false,
					"datum": {
						"blob": {
							"blob_id": "3de1ce2b-97b9-44da-be08-dfff95e468e3",
							"content_type": "application/java-serialized-object",
							"length": "1763"
						}
					}
				},
				"ts": "2017-09-14T13:25:01.884792037Z",
				"call_id": "01BT090S8X07WKP00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "1",
				"result": {
					"successful": false,
					"datum": {
						"blob": {
							"blob_id": "3de1ce2b-97b9-44da-be08-dfff95e468e3",
							"content_type": "application/java-serialized-object",
							"length": "1763"
						}
					}
				},
				"ts": "2017-09-14T13:25:01.926985092Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "2",
				"result": {
					"successful": false,
					"datum": {
						"blob": {
							"blob_id": "3de1ce2b-97b9-44da-be08-dfff95e468e3",
							"content_type": "application/java-serialized-object",
							"length": "1763"
						}
					}
				},
				"ts": "2017-09-14T13:25:01.980191939Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "4",
				"result": {
					"successful": false,
					"datum": {
						"blob": {
							"blob_id": "3de1ce2b-97b9-44da-be08-dfff95e468e3",
							"content_type": "application/java-serialized-object",
							"length": "1763"
						}
					}
				},
				"ts": "2017-09-14T13:25:02.023818442Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "5",
				"ts": "2017-09-14T13:25:02.054893312Z",
				"function_id": "travel/saga"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "3",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "ecad12dd-f451-4499-b652-1c7fe4c16096",
							"content_type": "application/java-serialized-object",
							"length": "14"
						}
					}
				},
				"ts": "2017-09-14T13:25:02.111323144Z",
				"call_id": "01BT090TSX07WKR00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "3",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "ecad12dd-f451-4499-b652-1c7fe4c16096",
							"content_type": "application/java-serialized-object",
							"length": "14"
						}
					}
				},
				"ts": "2017-09-14T13:25:02.138613654Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "6",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-14T13:25:02.291121097Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "6",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "9982fbc4-4a9a-430d-9af7-8d72e3c4864b",
							"content_type": "application/java-serialized-object",
							"length": "9"
						}
					}
				},
				"ts": "2017-09-14T13:25:02.324486181Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "7",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-14T13:25:02.403805753Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "7",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "e3f8b97b-d276-4087-a8e3-1e2b7f2070bd",
							"content_type": "application/java-serialized-object",
							"length": "9"
						}
					}
				},
				"ts": "2017-09-14T13:25:02.436677349Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "8",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-14T13:25:02.521368217Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "8",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "3d16da22-f793-413b-9bd7-44cb6d6da524",
							"content_type": "application/java-serialized-object",
							"length": "9"
						}
					}
				},
				"ts": "2017-09-14T13:25:02.549153772Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "9",
				"op": "allOf",
				"closure": null,
				"dependencies": [
					"6",
					"7",
					"8"
				],
				"ts": "2017-09-14T13:25:02.600046886Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "9",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-14T13:25:02.621220861Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "10",
				"op": "whenComplete",
				"closure": {
					"blob_id": "95f5d2a9-0005-44b3-96cc-ebd85c855770",
					"content_type": "application/java-serialized-object",
					"length": "1033"
				},
				"dependencies": [
					"9"
				],
				"ts": "2017-09-14T13:25:02.675084554Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "10",
				"ts": "2017-09-14T13:25:02.704471238Z",
				"function_id": "travel/saga"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "5",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-14T13:25:02.793457042Z",
				"call_id": "01BT090V2P07WKT00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "5",
				"result": {
					"successful": false,
					"datum": {
						"blob": {
							"blob_id": "3de1ce2b-97b9-44da-be08-dfff95e468e3",
							"content_type": "application/java-serialized-object",
							"length": "1763"
						}
					}
				},
				"ts": "2017-09-14T13:25:02.821953752Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "11",
				"op": "supply",
				"closure": {
					"blob_id": "5c1bae35-1e9e-4879-b14b-75f57f4f313e",
					"content_type": "application/java-serialized-object",
					"length": "811"
				},
				"dependencies": [],
				"ts": "2017-09-14T13:25:02.878952265Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "11",
				"ts": "2017-09-14T13:25:02.905027184Z",
				"function_id": "travel/saga"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "10",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-14T13:25:02.990191933Z",
				"call_id": "01BT090VP907WKW00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "10",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-14T13:25:03.049721883Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "11",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "ac69b02e-7b62-4741-905b-1cbc8ca1be2d",
							"content_type": "application/java-serialized-object",
							"length": "11"
						}
					}
				},
				"ts": "2017-09-14T13:25:03.106902278Z",
				"call_id": "01BT090VWF07WKY00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"stage_id": "11",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "ac69b02e-7b62-4741-905b-1cbc8ca1be2d",
							"content_type": "application/java-serialized-object",
							"length": "11"
						}
					}
				},
				"ts": "2017-09-14T13:25:03.136007853Z"
			}
		},
		{
			"type": "model.GraphTerminatingEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"graph_id": "1a33f742-3227-4add-b569-939dd0b63ff8",
				"function_id": "travel/saga",
				"state": "unknown_state",
				"ts": "2017-09-14T13:25:03.165572851Z"
			}
		},
		{
			"type": "model.GraphCompletedEvent",
			"sub": "1a33f742-3227-4add-b569-939dd0b63ff8",
			"data": {
				"graph_id": "1a33f742-3227-4add-b569-939dd0b63ff8",
				"function_id": "travel/saga",
				"ts": "2017-09-14T13:25:03.195794187Z"
			}
		}
	],

};
   export {mockActiveGraphEvents,mockSubscriptionData} ;
