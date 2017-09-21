const mockActiveGraphEvents=[
	{
		"type": "model.GraphCreatedEvent",
		"sub": "_all",
		"data": {
			"graph_id": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"function_id": "flowapp/flow",
			"ts": "2017-09-20T19:26:59.705782459Z"
		}
	}
];

const mockSubscriptionData= {
	"cd1178c5-0d22-4bcb-88fa-17431bb2f803": [
		{
			"type": "model.GraphCreatedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"graph_id": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
				"function_id": "flowapp/flow",
				"ts": "2017-09-20T19:26:59.705782459Z"
			}
		},
		{
			"type": "model.GraphCreatedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"graph_id": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
				"function_id": "flowapp/flow",
				"ts": "2017-09-20T19:26:59.705782459Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "0",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:26:59.727247423Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:98)",
				"caller_id": ""
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "0",
				"ts": "2017-09-20T19:26:59.727293642Z",
				"function_id": "flowapp/post-slack"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "1",
				"op": "handle",
				"closure": {
					"blob_id": "1",
					"content_type": "application/java-serialized-object",
					"length": "835"
				},
				"dependencies": [
					"0"
				],
				"ts": "2017-09-20T19:26:59.756430318Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:99)",
				"caller_id": ""
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "0",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "2",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Content-Length",
									"value": "0"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTGC3XMM07WZ600000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "1.024709167s"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:04 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:04.782632976Z",
				"call_id": "01BTGC3XMM07WZ600000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "0",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "2",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Content-Length",
									"value": "0"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTGC3XMM07WZ600000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "1.024709167s"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:04 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:04.783362146Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "1",
				"ts": "2017-09-20T19:27:04.784198831Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "1",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:07.088081788Z",
				"call_id": "01BTGC42JX07WZA00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "1",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:07.092606449Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "2",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:07.106966050Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:78)",
				"caller_id": ""
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "2",
				"ts": "2017-09-20T19:27:07.107661870Z",
				"function_id": "flowapp/scraper"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "3",
				"op": "thenApply",
				"closure": {
					"blob_id": "4",
					"content_type": "application/java-serialized-object",
					"length": "843"
				},
				"dependencies": [
					"2"
				],
				"ts": "2017-09-20T19:27:07.124974610Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:79)",
				"caller_id": ""
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "4",
				"op": "whenComplete",
				"closure": {
					"blob_id": "5",
					"content_type": "application/java-serialized-object",
					"length": "742"
				},
				"dependencies": [
					"3"
				],
				"ts": "2017-09-20T19:27:07.139881994Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:80)",
				"caller_id": ""
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "5",
				"op": "thenCompose",
				"closure": {
					"blob_id": "6",
					"content_type": "application/java-serialized-object",
					"length": "702"
				},
				"dependencies": [
					"4"
				],
				"ts": "2017-09-20T19:27:07.150658748Z",
				"code_location": "com.example.vista.VistaFlow.handleRequest(VistaFlow.java:43)",
				"caller_id": ""
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "6",
				"op": "whenComplete",
				"closure": {
					"blob_id": "7",
					"content_type": "application/java-serialized-object",
					"length": "667"
				},
				"dependencies": [
					"5"
				],
				"ts": "2017-09-20T19:27:07.156294525Z",
				"code_location": "com.example.vista.VistaFlow.handleRequest(VistaFlow.java:90)",
				"caller_id": ""
			}
		},
		{
			"type": "model.GraphCommittedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"graph_id": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
				"ts": "2017-09-20T19:27:07.173170773Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "2",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "8",
								"content_type": "text/plain; charset=utf-8",
								"length": "1343"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTGC44V807WZE00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "265.274558ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:11 GMT"
								},
								{
									"key": "Content-Length",
									"value": "1343"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:11.541259746Z",
				"call_id": "01BTGC44V807WZE00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "2",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "8",
								"content_type": "text/plain; charset=utf-8",
								"length": "1343"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTGC44V807WZE00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "265.274558ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:11 GMT"
								},
								{
									"key": "Content-Length",
									"value": "1343"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:11.541852128Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "3",
				"ts": "2017-09-20T19:27:11.542215013Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "3",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "9",
							"content_type": "application/java-serialized-object",
							"length": "1114"
						}
					}
				},
				"ts": "2017-09-20T19:27:11.701423138Z",
				"call_id": "01BTGC495Y07WZJ00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "3",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "9",
							"content_type": "application/java-serialized-object",
							"length": "1114"
						}
					}
				},
				"ts": "2017-09-20T19:27:11.703231916Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "4",
				"ts": "2017-09-20T19:27:11.709850253Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "4",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:11.818143746Z",
				"call_id": "01BTGC49B207WZM00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "4",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "9",
							"content_type": "application/java-serialized-object",
							"length": "1114"
						}
					}
				},
				"ts": "2017-09-20T19:27:11.818575826Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "5",
				"ts": "2017-09-20T19:27:11.819134742Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "7",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:11.913790430Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:78)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "7",
				"ts": "2017-09-20T19:27:11.914361853Z",
				"function_id": "flowapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "8",
				"op": "thenApply",
				"closure": {
					"blob_id": "11",
					"content_type": "application/java-serialized-object",
					"length": "877"
				},
				"dependencies": [
					"7"
				],
				"ts": "2017-09-20T19:27:11.934528208Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:79)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "9",
				"op": "whenComplete",
				"closure": {
					"blob_id": "12",
					"content_type": "application/java-serialized-object",
					"length": "748"
				},
				"dependencies": [
					"8"
				],
				"ts": "2017-09-20T19:27:11.943618262Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:80)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "10",
				"op": "thenCompose",
				"closure": {
					"blob_id": "13",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"9"
				],
				"ts": "2017-09-20T19:27:11.952537316Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$1(VistaFlow.java:57)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "11",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:11.959971534Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:78)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "11",
				"ts": "2017-09-20T19:27:11.962192507Z",
				"function_id": "flowapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "12",
				"op": "thenApply",
				"closure": {
					"blob_id": "15",
					"content_type": "application/java-serialized-object",
					"length": "877"
				},
				"dependencies": [
					"11"
				],
				"ts": "2017-09-20T19:27:11.972690113Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:79)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "13",
				"op": "whenComplete",
				"closure": {
					"blob_id": "16",
					"content_type": "application/java-serialized-object",
					"length": "748"
				},
				"dependencies": [
					"12"
				],
				"ts": "2017-09-20T19:27:12.003914173Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:80)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "14",
				"op": "thenCompose",
				"closure": {
					"blob_id": "17",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"13"
				],
				"ts": "2017-09-20T19:27:12.011695527Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$1(VistaFlow.java:57)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "15",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:12.019557916Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:78)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "15",
				"ts": "2017-09-20T19:27:12.025401194Z",
				"function_id": "flowapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "16",
				"op": "thenApply",
				"closure": {
					"blob_id": "19",
					"content_type": "application/java-serialized-object",
					"length": "877"
				},
				"dependencies": [
					"15"
				],
				"ts": "2017-09-20T19:27:12.035788255Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:79)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "17",
				"op": "whenComplete",
				"closure": {
					"blob_id": "20",
					"content_type": "application/java-serialized-object",
					"length": "748"
				},
				"dependencies": [
					"16"
				],
				"ts": "2017-09-20T19:27:12.048096863Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:80)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "18",
				"op": "thenCompose",
				"closure": {
					"blob_id": "21",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"17"
				],
				"ts": "2017-09-20T19:27:12.067521376Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$1(VistaFlow.java:57)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "19",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:12.079121555Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:78)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "19",
				"ts": "2017-09-20T19:27:12.091280159Z",
				"function_id": "flowapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "20",
				"op": "thenApply",
				"closure": {
					"blob_id": "23",
					"content_type": "application/java-serialized-object",
					"length": "877"
				},
				"dependencies": [
					"19"
				],
				"ts": "2017-09-20T19:27:12.110199037Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:79)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "21",
				"op": "whenComplete",
				"closure": {
					"blob_id": "24",
					"content_type": "application/java-serialized-object",
					"length": "748"
				},
				"dependencies": [
					"20"
				],
				"ts": "2017-09-20T19:27:12.124717230Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:80)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "22",
				"op": "thenCompose",
				"closure": {
					"blob_id": "25",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"21"
				],
				"ts": "2017-09-20T19:27:12.134080018Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$1(VistaFlow.java:57)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "23",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:12.146561024Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:78)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "23",
				"ts": "2017-09-20T19:27:12.150119834Z",
				"function_id": "flowapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "24",
				"op": "thenApply",
				"closure": {
					"blob_id": "27",
					"content_type": "application/java-serialized-object",
					"length": "877"
				},
				"dependencies": [
					"23"
				],
				"ts": "2017-09-20T19:27:12.172726311Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:79)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "25",
				"op": "whenComplete",
				"closure": {
					"blob_id": "28",
					"content_type": "application/java-serialized-object",
					"length": "748"
				},
				"dependencies": [
					"24"
				],
				"ts": "2017-09-20T19:27:12.200651051Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:80)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "26",
				"op": "thenCompose",
				"closure": {
					"blob_id": "29",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"25"
				],
				"ts": "2017-09-20T19:27:12.213025840Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$1(VistaFlow.java:57)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "27",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:12.226572271Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:78)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "27",
				"ts": "2017-09-20T19:27:12.227277267Z",
				"function_id": "flowapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "28",
				"op": "thenApply",
				"closure": {
					"blob_id": "31",
					"content_type": "application/java-serialized-object",
					"length": "877"
				},
				"dependencies": [
					"27"
				],
				"ts": "2017-09-20T19:27:12.317488889Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:79)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "29",
				"op": "whenComplete",
				"closure": {
					"blob_id": "32",
					"content_type": "application/java-serialized-object",
					"length": "748"
				},
				"dependencies": [
					"28"
				],
				"ts": "2017-09-20T19:27:12.330271618Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:80)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "30",
				"op": "thenCompose",
				"closure": {
					"blob_id": "33",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"29"
				],
				"ts": "2017-09-20T19:27:12.343873569Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$1(VistaFlow.java:57)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "31",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:12.364554008Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:78)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "31",
				"ts": "2017-09-20T19:27:12.364952981Z",
				"function_id": "flowapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "32",
				"op": "thenApply",
				"closure": {
					"blob_id": "35",
					"content_type": "application/java-serialized-object",
					"length": "877"
				},
				"dependencies": [
					"31"
				],
				"ts": "2017-09-20T19:27:12.383075637Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:79)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "33",
				"op": "whenComplete",
				"closure": {
					"blob_id": "36",
					"content_type": "application/java-serialized-object",
					"length": "748"
				},
				"dependencies": [
					"32"
				],
				"ts": "2017-09-20T19:27:12.403433756Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:80)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "34",
				"op": "thenCompose",
				"closure": {
					"blob_id": "37",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"33"
				],
				"ts": "2017-09-20T19:27:12.447227493Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$1(VistaFlow.java:57)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "35",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:12.478821034Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:78)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "35",
				"ts": "2017-09-20T19:27:12.486979669Z",
				"function_id": "flowapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "36",
				"op": "thenApply",
				"closure": {
					"blob_id": "39",
					"content_type": "application/java-serialized-object",
					"length": "877"
				},
				"dependencies": [
					"35"
				],
				"ts": "2017-09-20T19:27:12.521034972Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:79)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "37",
				"op": "whenComplete",
				"closure": {
					"blob_id": "40",
					"content_type": "application/java-serialized-object",
					"length": "748"
				},
				"dependencies": [
					"36"
				],
				"ts": "2017-09-20T19:27:12.542463760Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:80)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "38",
				"op": "thenCompose",
				"closure": {
					"blob_id": "41",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"37"
				],
				"ts": "2017-09-20T19:27:12.554689333Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$1(VistaFlow.java:57)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "39",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:12.560722731Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:78)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "39",
				"ts": "2017-09-20T19:27:12.565565375Z",
				"function_id": "flowapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "40",
				"op": "thenApply",
				"closure": {
					"blob_id": "43",
					"content_type": "application/java-serialized-object",
					"length": "877"
				},
				"dependencies": [
					"39"
				],
				"ts": "2017-09-20T19:27:12.572782378Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:79)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "41",
				"op": "whenComplete",
				"closure": {
					"blob_id": "44",
					"content_type": "application/java-serialized-object",
					"length": "748"
				},
				"dependencies": [
					"40"
				],
				"ts": "2017-09-20T19:27:12.583448811Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:80)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "42",
				"op": "thenCompose",
				"closure": {
					"blob_id": "45",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"41"
				],
				"ts": "2017-09-20T19:27:12.623725589Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$1(VistaFlow.java:57)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "43",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:12.638643225Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:78)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "43",
				"ts": "2017-09-20T19:27:12.639792149Z",
				"function_id": "flowapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "44",
				"op": "thenApply",
				"closure": {
					"blob_id": "47",
					"content_type": "application/java-serialized-object",
					"length": "877"
				},
				"dependencies": [
					"43"
				],
				"ts": "2017-09-20T19:27:12.649841948Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:79)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "45",
				"op": "whenComplete",
				"closure": {
					"blob_id": "48",
					"content_type": "application/java-serialized-object",
					"length": "748"
				},
				"dependencies": [
					"44"
				],
				"ts": "2017-09-20T19:27:12.699395439Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:80)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "46",
				"op": "thenCompose",
				"closure": {
					"blob_id": "49",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"45"
				],
				"ts": "2017-09-20T19:27:12.713433733Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$1(VistaFlow.java:57)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "47",
				"op": "allOf",
				"closure": null,
				"dependencies": [
					"10",
					"14",
					"18",
					"22",
					"26",
					"30",
					"34",
					"38",
					"42",
					"46"
				],
				"ts": "2017-09-20T19:27:12.735081171Z",
				"code_location": "com.example.vista.VistaFlow.lambda$handleRequest$d8973b84$1(VistaFlow.java:88)",
				"caller_id": "5"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "5",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "47"
						}
					}
				},
				"ts": "2017-09-20T19:27:12.845090675Z",
				"call_id": "01BTGC49EE07WZP00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "5",
				"composed_stage_id": "47",
				"ts": "2017-09-20T19:27:12.845937866Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "11",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "50",
								"content_type": "text/plain; charset=utf-8",
								"length": "187"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTGC49KN07WZW00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "423.083415ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:23 GMT"
								},
								{
									"key": "Content-Length",
									"value": "187"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:23.728605519Z",
				"call_id": "01BTGC49KN07WZW00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "11",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "50",
								"content_type": "text/plain; charset=utf-8",
								"length": "187"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTGC49KN07WZW00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "423.083415ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:23 GMT"
								},
								{
									"key": "Content-Length",
									"value": "187"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:23.731739776Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "12",
				"ts": "2017-09-20T19:27:23.736043064Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "12",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "51",
							"content_type": "application/java-serialized-object",
							"length": "295"
						}
					}
				},
				"ts": "2017-09-20T19:27:24.848935410Z",
				"call_id": "01BTGC4N3F07WH000000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "12",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "51",
							"content_type": "application/java-serialized-object",
							"length": "295"
						}
					}
				},
				"ts": "2017-09-20T19:27:24.850191451Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "13",
				"ts": "2017-09-20T19:27:24.850910231Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "23",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "52",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:24 GMT"
								},
								{
									"key": "Content-Length",
									"value": "72"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTGC49RZ07WG800000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "449.66957ms"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:24.918803373Z",
				"call_id": "01BTGC49RZ07WG800000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "23",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "52",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:24 GMT"
								},
								{
									"key": "Content-Length",
									"value": "72"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTGC49RZ07WG800000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "449.66957ms"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:24.924998537Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "24",
				"ts": "2017-09-20T19:27:24.933262882Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "24",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "53",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:25.051517529Z",
				"call_id": "01BTGC4P8H07WH400000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "24",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "53",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:25.053154919Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "25",
				"ts": "2017-09-20T19:27:25.054268401Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "13",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:25.572301974Z",
				"call_id": "01BTGC4P5M07WH200000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "13",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "51",
							"content_type": "application/java-serialized-object",
							"length": "295"
						}
					}
				},
				"ts": "2017-09-20T19:27:25.581388490Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "14",
				"ts": "2017-09-20T19:27:25.587771830Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "7",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "54",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Content-Length",
									"value": "72"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTGC49HM07WZR00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "246.883678ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:25 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:25.637814199Z",
				"call_id": "01BTGC49HM07WZR00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "7",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "54",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Content-Length",
									"value": "72"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTGC49HM07WZR00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "246.883678ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:25 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:25.651638175Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "8",
				"ts": "2017-09-20T19:27:25.693847997Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "48",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:25.983031460Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:78)",
				"caller_id": "14"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "48",
				"ts": "2017-09-20T19:27:26.065422766Z",
				"function_id": "flowapp/draw"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "25",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:26.092004043Z",
				"call_id": "01BTGC4PDT07WH600000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "25",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "53",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:26.142404111Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "26",
				"ts": "2017-09-20T19:27:26.169923019Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "49",
				"op": "thenApply",
				"closure": {
					"blob_id": "56",
					"content_type": "application/java-serialized-object",
					"length": "830"
				},
				"dependencies": [
					"48"
				],
				"ts": "2017-09-20T19:27:26.347592696Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:79)",
				"caller_id": "14"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "50",
				"op": "whenComplete",
				"closure": {
					"blob_id": "57",
					"content_type": "application/java-serialized-object",
					"length": "739"
				},
				"dependencies": [
					"49"
				],
				"ts": "2017-09-20T19:27:26.470568109Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:80)",
				"caller_id": "14"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "8",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "58",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:26.585719376Z",
				"call_id": "01BTGC4Q0R07WHA00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "8",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "58",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:26.600482088Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "9",
				"ts": "2017-09-20T19:27:26.611832644Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "43",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "59",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTGC4A8R07WGW00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "401.232499ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:26 GMT"
								},
								{
									"key": "Content-Length",
									"value": "72"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:26.666795567Z",
				"call_id": "01BTGC4A8R07WGW00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "43",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "59",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTGC4A8R07WGW00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "401.232499ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:26 GMT"
								},
								{
									"key": "Content-Length",
									"value": "72"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:26.667607053Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "44",
				"ts": "2017-09-20T19:27:26.668223184Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "51",
				"op": "thenCompose",
				"closure": {
					"blob_id": "60",
					"content_type": "application/java-serialized-object",
					"length": "1085"
				},
				"dependencies": [
					"50"
				],
				"ts": "2017-09-20T19:27:26.729582562Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:69)",
				"caller_id": "14"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "14",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "51"
						}
					}
				},
				"ts": "2017-09-20T19:27:27.118247968Z",
				"call_id": "01BTGC4PY607WH800000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "14",
				"composed_stage_id": "51",
				"ts": "2017-09-20T19:27:27.141120919Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "52",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:27.180912640Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:61)",
				"caller_id": "26"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "52",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "61",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:27.187922491Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "26",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "52"
						}
					}
				},
				"ts": "2017-09-20T19:27:27.586155039Z",
				"call_id": "01BTGC4QK007WHE00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "26",
				"composed_stage_id": "52",
				"ts": "2017-09-20T19:27:27.587220845Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "26",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "61",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:27.587533440Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "15",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "62",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Content-Length",
									"value": "72"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTGC49N707WG000000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "418.830089ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:27 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:27.637793645Z",
				"call_id": "01BTGC49N707WG000000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "15",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "62",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Content-Length",
									"value": "72"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTGC49N707WG000000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "418.830089ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:27 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:27.648890221Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "16",
				"ts": "2017-09-20T19:27:27.657347606Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "9",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:27.695950310Z",
				"call_id": "01BTGC4QX207WHP00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "9",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "58",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:27.729221705Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "10",
				"ts": "2017-09-20T19:27:27.731018674Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "44",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "63",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:27.770159077Z",
				"call_id": "01BTGC4QZR07WHR00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "44",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "63",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:27.773620729Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "45",
				"ts": "2017-09-20T19:27:27.788033279Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "53",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:27.792820345Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:61)",
				"caller_id": "10"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "53",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "64",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:27.801424745Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "10",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "53"
						}
					}
				},
				"ts": "2017-09-20T19:27:28.029929102Z",
				"call_id": "01BTGC4S0B07WJ000000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "10",
				"composed_stage_id": "53",
				"ts": "2017-09-20T19:27:28.050192509Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "10",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "64",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:28.058170503Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "27",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "65",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Content-Length",
									"value": "72"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTGC49W407WGC00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "461.904052ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:28 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:28.109529303Z",
				"call_id": "01BTGC49W407WGC00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "27",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "65",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Content-Length",
									"value": "72"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTGC49W407WGC00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "461.904052ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:28 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:28.111093446Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "28",
				"ts": "2017-09-20T19:27:28.114082508Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "16",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "66",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:28.132551967Z",
				"call_id": "01BTGC4RXY07WHY00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "16",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "66",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:28.147568642Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "17",
				"ts": "2017-09-20T19:27:28.155640334Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "28",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "67",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:28.267288909Z",
				"call_id": "01BTGC4SBT07WJ600000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "28",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "67",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:28.273396624Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "29",
				"ts": "2017-09-20T19:27:28.279891899Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "45",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:28.356420522Z",
				"call_id": "01BTGC4S1M07WJ200000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "45",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "63",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:28.356934948Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "46",
				"ts": "2017-09-20T19:27:28.357206327Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "17",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:28.544056545Z",
				"call_id": "01BTGC4SD907WJ800000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "17",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "66",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:28.544797857Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "18",
				"ts": "2017-09-20T19:27:28.545204964Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "29",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:28.623930886Z",
				"call_id": "01BTGC4SGW07WJA00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "29",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "67",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:28.642617497Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "30",
				"ts": "2017-09-20T19:27:28.645552627Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "54",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:28.658936451Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:61)",
				"caller_id": "46"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "54",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "68",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:28.735608958Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "55",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:28.759835939Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:61)",
				"caller_id": "18"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "55",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "69",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:28.760083170Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "46",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "54"
						}
					}
				},
				"ts": "2017-09-20T19:27:28.976879529Z",
				"call_id": "01BTGC4SK807WJC00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "46",
				"composed_stage_id": "54",
				"ts": "2017-09-20T19:27:28.981796628Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "46",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "68",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:28.982488133Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "56",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:29.008590094Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:61)",
				"caller_id": "30"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "56",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "70",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:29.028757288Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "18",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "55"
						}
					}
				},
				"ts": "2017-09-20T19:27:29.164224233Z",
				"call_id": "01BTGC4SS407WJG00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "18",
				"composed_stage_id": "55",
				"ts": "2017-09-20T19:27:29.174513912Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "18",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "69",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:29.176623455Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "31",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "71",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTGC49ZK07WGG00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "437.201369ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:29 GMT"
								},
								{
									"key": "Content-Length",
									"value": "72"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:29.180129812Z",
				"call_id": "01BTGC49ZK07WGG00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "31",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "71",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTGC49ZK07WGG00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "437.201369ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:29 GMT"
								},
								{
									"key": "Content-Length",
									"value": "72"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:29.215425311Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "32",
				"ts": "2017-09-20T19:27:29.233215030Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "30",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "56"
						}
					}
				},
				"ts": "2017-09-20T19:27:29.278851032Z",
				"call_id": "01BTGC4SWA07WJJ00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "30",
				"composed_stage_id": "56",
				"ts": "2017-09-20T19:27:29.280124934Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "30",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "70",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:29.280555409Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "35",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "72",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Content-Length",
									"value": "72"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTGC4A4G07WGM00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "328.112981ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:29 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:29.332179107Z",
				"call_id": "01BTGC4A4G07WGM00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "35",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "72",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Content-Length",
									"value": "72"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTGC4A4G07WGM00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "328.112981ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:29 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:29.332604082Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "36",
				"ts": "2017-09-20T19:27:29.336464281Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "36",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "73",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:29.563364493Z",
				"call_id": "01BTGC4TJ707WJR00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "36",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "73",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:29.564484197Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "37",
				"ts": "2017-09-20T19:27:29.567579312Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "32",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "74",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:29.710906381Z",
				"call_id": "01BTGC4TGD07WJP00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "32",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "74",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:29.711424416Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "33",
				"ts": "2017-09-20T19:27:29.721520983Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "37",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:29.909573456Z",
				"call_id": "01BTGC4TSB07WJT00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "37",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "73",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:29.910957311Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "38",
				"ts": "2017-09-20T19:27:29.911207992Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "33",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:29.962173038Z",
				"call_id": "01BTGC4TYJ07WJW00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "33",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "74",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:29.963772971Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "34",
				"ts": "2017-09-20T19:27:29.970747213Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "57",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:29.999937042Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:61)",
				"caller_id": "38"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "57",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "75",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:30.002432226Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "58",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:30.024894459Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:61)",
				"caller_id": "34"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "58",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "76",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:30.035655844Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "38",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "57"
						}
					}
				},
				"ts": "2017-09-20T19:27:30.080250961Z",
				"call_id": "01BTGC4V4B07WJY00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "38",
				"composed_stage_id": "57",
				"ts": "2017-09-20T19:27:30.080890073Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "38",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "75",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:30.081259565Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "34",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "58"
						}
					}
				},
				"ts": "2017-09-20T19:27:30.173098164Z",
				"call_id": "01BTGC4V5Q07WK000000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "34",
				"composed_stage_id": "58",
				"ts": "2017-09-20T19:27:30.173522714Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "34",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "76",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:30.173659784Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "39",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "77",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTGC4A6707WGR00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "395.633322ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:30 GMT"
								},
								{
									"key": "Content-Length",
									"value": "72"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:30.912997160Z",
				"call_id": "01BTGC4A6707WGR00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "39",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "77",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTGC4A6707WGR00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "395.633322ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:30 GMT"
								},
								{
									"key": "Content-Length",
									"value": "72"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:30.914707071Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "40",
				"ts": "2017-09-20T19:27:30.915716391Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "40",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "78",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:31.105743903Z",
				"call_id": "01BTGC4W3507WK200000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "40",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "78",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:31.106900297Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "41",
				"ts": "2017-09-20T19:27:31.152035923Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "19",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "79",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTGC49Q407WG400000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "413.594758ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:31 GMT"
								},
								{
									"key": "Content-Length",
									"value": "72"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:31.523018492Z",
				"call_id": "01BTGC49Q407WG400000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "19",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "79",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTGC49Q407WG400000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "413.594758ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:31 GMT"
								},
								{
									"key": "Content-Length",
									"value": "72"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:31.548575230Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "20",
				"ts": "2017-09-20T19:27:31.559883802Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "41",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:32.574727736Z",
				"call_id": "01BTGC4WDM07WK400000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "41",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "78",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:32.578067267Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "42",
				"ts": "2017-09-20T19:27:32.609709087Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "59",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:33.097341657Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:61)",
				"caller_id": "42"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "59",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "80",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:33.150654800Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "42",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "59"
						}
					}
				},
				"ts": "2017-09-20T19:27:33.410888551Z",
				"call_id": "01BTGC4XRB07WK800000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "42",
				"composed_stage_id": "59",
				"ts": "2017-09-20T19:27:33.411508895Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "42",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "80",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:33.411655905Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "20",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "81",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:40.125808093Z",
				"call_id": "01BTGC4WV807WK600000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "20",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "81",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:40.140758495Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "21",
				"ts": "2017-09-20T19:27:40.148746402Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "21",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:40.445190064Z",
				"call_id": "01BTGC554207WKA00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "21",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "81",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-20T19:27:40.445810259Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "22",
				"ts": "2017-09-20T19:27:40.446157452Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "60",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:40.523578955Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:61)",
				"caller_id": "22"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "60",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "82",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:40.524041538Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "22",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "60"
						}
					}
				},
				"ts": "2017-09-20T19:27:40.622042679Z",
				"call_id": "01BTGC55D307WKC00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "22",
				"composed_stage_id": "60",
				"ts": "2017-09-20T19:27:40.623338670Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "22",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "82",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-20T19:27:40.623931241Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "48",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "83",
								"content_type": "text/plain; charset=utf-8",
								"length": "111"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTGC4QVT07WHJ00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "545.419352ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:47 GMT"
								},
								{
									"key": "Content-Length",
									"value": "111"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:47.645519352Z",
				"call_id": "01BTGC4QVT07WHJ00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "48",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "83",
								"content_type": "text/plain; charset=utf-8",
								"length": "111"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTGC4QVT07WHJ00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "545.419352ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:47 GMT"
								},
								{
									"key": "Content-Length",
									"value": "111"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:47.645882371Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "49",
				"ts": "2017-09-20T19:27:47.646065240Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "49",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "84",
							"content_type": "application/java-serialized-object",
							"length": "167"
						}
					}
				},
				"ts": "2017-09-20T19:27:48.547344662Z",
				"call_id": "01BTGC5CE407WKE00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "49",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "84",
							"content_type": "application/java-serialized-object",
							"length": "167"
						}
					}
				},
				"ts": "2017-09-20T19:27:48.547782076Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "50",
				"ts": "2017-09-20T19:27:48.547985566Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "50",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:49.201113304Z",
				"call_id": "01BTGC5DA607WKG00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "50",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "84",
							"content_type": "application/java-serialized-object",
							"length": "167"
						}
					}
				},
				"ts": "2017-09-20T19:27:49.204270460Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "51",
				"ts": "2017-09-20T19:27:49.208008733Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "61",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:50.452701138Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:98)",
				"caller_id": "51"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "61",
				"ts": "2017-09-20T19:27:50.459595547Z",
				"function_id": "flowapp/alert"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "62",
				"op": "handle",
				"closure": {
					"blob_id": "86",
					"content_type": "application/java-serialized-object",
					"length": "830"
				},
				"dependencies": [
					"61"
				],
				"ts": "2017-09-20T19:27:50.538565794Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:99)",
				"caller_id": "51"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "63",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:50.573159774Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:98)",
				"caller_id": "51"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "63",
				"ts": "2017-09-20T19:27:50.581996302Z",
				"function_id": "flowapp/post-slack"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "64",
				"op": "handle",
				"closure": {
					"blob_id": "88",
					"content_type": "application/java-serialized-object",
					"length": "835"
				},
				"dependencies": [
					"63"
				],
				"ts": "2017-09-20T19:27:50.624287093Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:99)",
				"caller_id": "51"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "65",
				"op": "allOf",
				"closure": null,
				"dependencies": [
					"62",
					"64"
				],
				"ts": "2017-09-20T19:27:50.665417649Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$732ec3da$1(VistaFlow.java:73)",
				"caller_id": "51"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "51",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "65"
						}
					}
				},
				"ts": "2017-09-20T19:27:50.911954259Z",
				"call_id": "01BTGC5DYX07WKJ00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "51",
				"composed_stage_id": "65",
				"ts": "2017-09-20T19:27:50.920049327Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "63",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "89",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Content-Length",
									"value": "0"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTGC5FAF07WKR00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "390.279µs"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:52 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:52.748888215Z",
				"call_id": "01BTGC5FAF07WKR00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "63",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "89",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Content-Length",
									"value": "0"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTGC5FAF07WKR00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "390.279µs"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:52 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:52.750224150Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "64",
				"ts": "2017-09-20T19:27:52.752865696Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "64",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:54.160815780Z",
				"call_id": "01BTGC5HE207WKT00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "64",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:54.161682391Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "61",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "90",
								"content_type": "text/plain; charset=utf-8",
								"length": "122"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTGC5F6F07WKM00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "232.480829ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:58 GMT"
								},
								{
									"key": "Content-Length",
									"value": "122"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:58.307962264Z",
				"call_id": "01BTGC5F6F07WKM00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "61",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "90",
								"content_type": "text/plain; charset=utf-8",
								"length": "122"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTGC5F6F07WKM00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "232.480829ms"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:27:58 GMT"
								},
								{
									"key": "Content-Length",
									"value": "122"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:27:58.308854404Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "62",
				"ts": "2017-09-20T19:27:58.309242089Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "62",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:58.987869075Z",
				"call_id": "01BTGC5PVD07WKW00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "62",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:58.988783536Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "65",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:58.989273296Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "51",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:58.989565415Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "14",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:58.989841786Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "47",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:58.990279113Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "5",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:58.990743962Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "6",
				"ts": "2017-09-20T19:27:58.991158152Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "66",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-20T19:27:59.751048563Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:98)",
				"caller_id": "6"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "66",
				"ts": "2017-09-20T19:27:59.751496360Z",
				"function_id": "flowapp/post-slack"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "67",
				"op": "handle",
				"closure": {
					"blob_id": "92",
					"content_type": "application/java-serialized-object",
					"length": "835"
				},
				"dependencies": [
					"66"
				],
				"ts": "2017-09-20T19:27:59.810238310Z",
				"code_location": "com.example.vista.Functions.wrapJsonFunction(Functions.java:99)",
				"caller_id": "6"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "6",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:59.860128739Z",
				"call_id": "01BTGC5QGM07WKY00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "6",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:27:59.862071576Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "66",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "93",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "98.204µs"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:28:00 GMT"
								},
								{
									"key": "Content-Length",
									"value": "0"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTGC5R8G07WM000000000000"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:28:00.050513821Z",
				"call_id": "01BTGC5R8G07WM000000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "66",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "93",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "98.204µs"
								},
								{
									"key": "Date",
									"value": "Wed, 20 Sep 2017 19:28:00 GMT"
								},
								{
									"key": "Content-Length",
									"value": "0"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTGC5R8G07WM000000000000"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-20T19:28:00.058072945Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "67",
				"ts": "2017-09-20T19:28:00.060407755Z",
				"function_id": "flowapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "67",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:28:00.131166718Z",
				"call_id": "01BTGC5RJ007WM200000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"stage_id": "67",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-20T19:28:00.136470938Z"
			}
		},
		{
			"type": "model.GraphTerminatingEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"graph_id": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
				"function_id": "flowapp/flow",
				"state": "unknown_state",
				"ts": "2017-09-20T19:28:00.139918994Z"
			}
		},
		{
			"type": "model.GraphCompletedEvent",
			"sub": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
			"data": {
				"graph_id": "cd1178c5-0d22-4bcb-88fa-17431bb2f803",
				"function_id": "flowapp/flow",
				"ts": "2017-09-20T19:28:00.141445457Z"
			}
		}
	]
};
   export {mockActiveGraphEvents,mockSubscriptionData} ;
