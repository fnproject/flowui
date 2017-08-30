const mockActiveGraphEvents=[
	{
		"type": "model.GraphCreatedEvent",
		"sub": "_all",
		"data": {
			"graph_id": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"function_id": "ct/cloudthreads-example",
			"ts": "2017-08-30T13:49:07.757391506Z"
		}
	}
];

const mockSubscriptionData= {
	"7bf23d58-d521-4285-9dd3-3939eed92700": [
		{
			"type": "model.GraphCreatedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"graph_id": "7bf23d58-d521-4285-9dd3-3939eed92700",
				"function_id": "ct/cloudthreads-example",
				"ts": "2017-08-30T13:49:07.757391506Z"
			}
		},
		{
			"type": "model.GraphCreatedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"graph_id": "7bf23d58-d521-4285-9dd3-3939eed92700",
				"function_id": "ct/cloudthreads-example",
				"ts": "2017-08-30T13:49:07.757391506Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "0",
				"op": "delay",
				"closure": null,
				"dependencies": [],
				"ts": "2017-08-30T13:49:07.786317075Z"
			}
		},
		{
			"type": "model.DelayScheduledEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "0",
				"time_ms": "1504100948289",
				"ts": "2017-08-30T13:49:07.789935597Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "1",
				"op": "thenRun",
				"closure": {
					"blob_id": "32f514c2-9d9d-4690-b99d-b583d96054eb",
					"content_type": "application/java-serialized-object",
					"length": "605"
				},
				"dependencies": [
					"0"
				],
				"ts": "2017-08-30T13:49:07.971427042Z"
			}
		},
		{
			"type": "model.GraphCommittedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"graph_id": "7bf23d58-d521-4285-9dd3-3939eed92700",
				"ts": "2017-08-30T13:49:07.987686782Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "0",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-08-30T13:49:08.291359393Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "1",
				"ts": "2017-08-30T13:49:08.294425848Z",
				"function_id": "ct/cloudthreads-example"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "2",
				"op": "supply",
				"closure": {
					"blob_id": "e171e1d2-a4c6-4ab7-a3d8-34a5ebfa0a8c",
					"content_type": "application/java-serialized-object",
					"length": "633"
				},
				"dependencies": [],
				"ts": "2017-08-30T13:49:10.014011963Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "2",
				"ts": "2017-08-30T13:49:10.016295228Z",
				"function_id": "ct/cloudthreads-example"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "3",
				"op": "supply",
				"closure": {
					"blob_id": "bc0e9ef8-bc54-4615-8cec-536740ae1a80",
					"content_type": "application/java-serialized-object",
					"length": "633"
				},
				"dependencies": [],
				"ts": "2017-08-30T13:49:10.028398391Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "3",
				"ts": "2017-08-30T13:49:10.030327342Z",
				"function_id": "ct/cloudthreads-example"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "4",
				"op": "thenRun",
				"closure": {
					"blob_id": "847d62ac-a6c7-49f8-a3bf-83c6856808d1",
					"content_type": "application/java-serialized-object",
					"length": "596"
				},
				"dependencies": [
					"2"
				],
				"ts": "2017-08-30T13:49:10.043540398Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "5",
				"op": "thenCombine",
				"closure": {
					"blob_id": "c6c85126-2aad-4a4b-bf40-0e2f675cb46e",
					"content_type": "application/java-serialized-object",
					"length": "710"
				},
				"dependencies": [
					"2",
					"3"
				],
				"ts": "2017-08-30T13:49:10.057840397Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "6",
				"op": "thenAccept",
				"closure": {
					"blob_id": "c97d21ec-aa61-4efa-bfcd-b4968436372a",
					"content_type": "application/java-serialized-object",
					"length": "637"
				},
				"dependencies": [
					"5"
				],
				"ts": "2017-08-30T13:49:10.084184941Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "1",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-08-30T13:49:11.111704718Z",
				"call_id": "01BRSPE6AA07WJA00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "1",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-08-30T13:49:11.113412756Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "2",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "a3b89126-151a-4047-b954-928e61791492",
							"content_type": "application/java-serialized-object",
							"length": "81"
						}
					}
				},
				"ts": "2017-08-30T13:49:13.559760389Z",
				"call_id": "01BRSPE80307WJC00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "2",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "a3b89126-151a-4047-b954-928e61791492",
							"content_type": "application/java-serialized-object",
							"length": "81"
						}
					}
				},
				"ts": "2017-08-30T13:49:13.564971455Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "4",
				"ts": "2017-08-30T13:49:13.572095690Z",
				"function_id": "ct/cloudthreads-example"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "3",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "df3afdf8-c74b-4eae-aefb-a71755ab1ba1",
							"content_type": "application/java-serialized-object",
							"length": "81"
						}
					}
				},
				"ts": "2017-08-30T13:49:13.588899347Z",
				"call_id": "01BRSPE80X07WJE00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "3",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "df3afdf8-c74b-4eae-aefb-a71755ab1ba1",
							"content_type": "application/java-serialized-object",
							"length": "81"
						}
					}
				},
				"ts": "2017-08-30T13:49:13.590665299Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "5",
				"ts": "2017-08-30T13:49:13.591457433Z",
				"function_id": "ct/cloudthreads-example"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "5",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "1a8bcd1a-4afa-4bd2-bd08-ed4653389d5f",
							"content_type": "application/java-serialized-object",
							"length": "81"
						}
					}
				},
				"ts": "2017-08-30T13:49:16.743985031Z",
				"call_id": "01BRSPEBGF07WJJ00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "5",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "1a8bcd1a-4afa-4bd2-bd08-ed4653389d5f",
							"content_type": "application/java-serialized-object",
							"length": "81"
						}
					}
				},
				"ts": "2017-08-30T13:49:16.744770648Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "6",
				"ts": "2017-08-30T13:49:16.745808840Z",
				"function_id": "ct/cloudthreads-example"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "7",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-08-30T13:49:16.870882351Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "7",
				"ts": "2017-08-30T13:49:16.876682464Z",
				"function_id": "ct/echo"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "8",
				"op": "thenAccept",
				"closure": {
					"blob_id": "3ded941f-a00b-45b7-b54d-22641969d2b3",
					"content_type": "application/java-serialized-object",
					"length": "666"
				},
				"dependencies": [
					"7"
				],
				"ts": "2017-08-30T13:49:16.932575691Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "4",
				"result": {
					"successful": false,
					"datum": {
						"blob": {
							"blob_id": "11cf1f69-1297-44ae-b382-938e1bf693da",
							"content_type": "application/java-serialized-object",
							"length": "1426"
						}
					}
				},
				"ts": "2017-08-30T13:49:18.866166660Z",
				"call_id": "01BRSPEBFB07WJG00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "4",
				"result": {
					"successful": false,
					"datum": {
						"blob": {
							"blob_id": "11cf1f69-1297-44ae-b382-938e1bf693da",
							"content_type": "application/java-serialized-object",
							"length": "1426"
						}
					}
				},
				"ts": "2017-08-30T13:49:18.872790370Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "6",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-08-30T13:49:19.908999049Z",
				"call_id": "01BRSPEEJY07WJM00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "6",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-08-30T13:49:19.909923569Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "7",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "d532929b-958c-4814-9e6f-d8dd09606589",
								"content_type": "application/octet-stream",
								"length": "1"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Wed, 30 Aug 2017 13:49:20 GMT"
								},
								{
									"key": "Content-Length",
									"value": "1"
								},
								{
									"key": "Fn_call_id",
									"value": "01BRSPEEPM07WJP00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "1.449082796s"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-08-30T13:49:20.738782714Z",
				"call_id": "01BRSPEEPM07WJP00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "7",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "d532929b-958c-4814-9e6f-d8dd09606589",
								"content_type": "application/octet-stream",
								"length": "1"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Wed, 30 Aug 2017 13:49:20 GMT"
								},
								{
									"key": "Content-Length",
									"value": "1"
								},
								{
									"key": "Fn_call_id",
									"value": "01BRSPEEPM07WJP00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "1.449082796s"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-08-30T13:49:20.739713884Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "8",
				"ts": "2017-08-30T13:49:20.740509767Z",
				"function_id": "ct/cloudthreads-example"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "8",
				"result": {
					"successful": false,
					"datum": {
						"blob": {
							"blob_id": "269887d5-d643-43a8-904e-718f87fd3c23",
							"content_type": "application/java-serialized-object",
							"length": "1489"
						}
					}
				},
				"ts": "2017-08-30T13:49:23.072109287Z",
				"call_id": "01BRSPEJF507WJR00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"stage_id": "8",
				"result": {
					"successful": false,
					"datum": {
						"blob": {
							"blob_id": "269887d5-d643-43a8-904e-718f87fd3c23",
							"content_type": "application/java-serialized-object",
							"length": "1489"
						}
					}
				},
				"ts": "2017-08-30T13:49:23.075604416Z"
			}
		},
		{
			"type": "model.GraphCompletedEvent",
			"sub": "7bf23d58-d521-4285-9dd3-3939eed92700",
			"data": {
				"graph_id": "7bf23d58-d521-4285-9dd3-3939eed92700",
				"function_id": "ct/cloudthreads-example",
				"ts": "2017-08-30T13:49:23.077916988Z"
			}
		}
	]
};
   export {mockActiveGraphEvents,mockSubscriptionData} ;
