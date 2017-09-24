const mockActiveGraphEvents=[
	{
		"type": "model.GraphCreatedEvent",
		"sub": "_all",
		"data": {
			"graph_id": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"function_id": "myapp/flow",
			"ts": "2017-09-24T02:01:30.315395015Z"
		}
	}
];

const mockSubscriptionData= {
	"47b0cec2-1a25-4e84-bfad-81e15bf0564a": [
		{
			"type": "model.GraphCreatedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"graph_id": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
				"function_id": "myapp/flow",
				"ts": "2017-09-24T02:01:30.315395015Z"
			}
		},
		{
			"type": "model.GraphCreatedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"graph_id": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
				"function_id": "myapp/flow",
				"ts": "2017-09-24T02:01:30.315395015Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "0",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:30.360252126Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": ""
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "0",
				"ts": "2017-09-24T02:01:30.360435318Z",
				"function_id": "myapp/post-slack"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "0",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "721",
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
									"value": "01BTRSWEFY07WYY00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "995.027588ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:36 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:01:36.642803357Z",
				"call_id": "01BTRSWEFY07WYY00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "0",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "721",
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
									"value": "01BTRSWEFY07WYY00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "995.027588ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:36 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:01:36.643305189Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "1",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:36.677972137Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": ""
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "1",
				"ts": "2017-09-24T02:01:36.678442205Z",
				"function_id": "myapp/scraper"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "2",
				"op": "thenApply",
				"closure": {
					"blob_id": "723",
					"content_type": "application/java-serialized-object",
					"length": "875"
				},
				"dependencies": [
					"1"
				],
				"ts": "2017-09-24T02:01:36.729738925Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:48)",
				"caller_id": ""
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "3",
				"op": "thenCompose",
				"closure": {
					"blob_id": "724",
					"content_type": "application/java-serialized-object",
					"length": "702"
				},
				"dependencies": [
					"2"
				],
				"ts": "2017-09-24T02:01:36.746038570Z",
				"code_location": "com.example.vista.VistaFlow.handleRequest(VistaFlow.java:31)",
				"caller_id": ""
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "4",
				"op": "whenComplete",
				"closure": {
					"blob_id": "725",
					"content_type": "application/java-serialized-object",
					"length": "667"
				},
				"dependencies": [
					"3"
				],
				"ts": "2017-09-24T02:01:36.763906938Z",
				"code_location": "com.example.vista.VistaFlow.handleRequest(VistaFlow.java:73)",
				"caller_id": ""
			}
		},
		{
			"type": "model.GraphCommittedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"graph_id": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
				"ts": "2017-09-24T02:01:36.797729343Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "1",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "726",
								"content_type": "text/plain; charset=utf-8",
								"length": "1343"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:40 GMT"
								},
								{
									"key": "Content-Length",
									"value": "1343"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTRSWMNN07WZ200000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "244.253646ms"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:01:40.275745587Z",
				"call_id": "01BTRSWMNN07WZ200000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "1",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "726",
								"content_type": "text/plain; charset=utf-8",
								"length": "1343"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:40 GMT"
								},
								{
									"key": "Content-Length",
									"value": "1343"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTRSWMNN07WZ200000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "244.253646ms"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:01:40.277017147Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "2",
				"ts": "2017-09-24T02:01:40.277761205Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "2",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "727",
							"content_type": "application/java-serialized-object",
							"length": "1114"
						}
					}
				},
				"ts": "2017-09-24T02:01:40.444096173Z",
				"call_id": "01BTRSWR5T07WZ600000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "2",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "727",
							"content_type": "application/java-serialized-object",
							"length": "1114"
						}
					}
				},
				"ts": "2017-09-24T02:01:40.444358077Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "3",
				"ts": "2017-09-24T02:01:40.444510205Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "5",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:40.466765806Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "5",
				"ts": "2017-09-24T02:01:40.470302901Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "6",
				"op": "thenApply",
				"closure": {
					"blob_id": "729",
					"content_type": "application/java-serialized-object",
					"length": "909"
				},
				"dependencies": [
					"5"
				],
				"ts": "2017-09-24T02:01:40.509016368Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:48)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "7",
				"op": "thenCompose",
				"closure": {
					"blob_id": "730",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"6"
				],
				"ts": "2017-09-24T02:01:40.528077187Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$0(VistaFlow.java:43)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "8",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:40.547100548Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "8",
				"ts": "2017-09-24T02:01:40.547376635Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "9",
				"op": "thenApply",
				"closure": {
					"blob_id": "732",
					"content_type": "application/java-serialized-object",
					"length": "909"
				},
				"dependencies": [
					"8"
				],
				"ts": "2017-09-24T02:01:40.589087708Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:48)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "10",
				"op": "thenCompose",
				"closure": {
					"blob_id": "733",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"9"
				],
				"ts": "2017-09-24T02:01:40.604376098Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$0(VistaFlow.java:43)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "11",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:40.621337793Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "11",
				"ts": "2017-09-24T02:01:40.625338663Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "12",
				"op": "thenApply",
				"closure": {
					"blob_id": "735",
					"content_type": "application/java-serialized-object",
					"length": "909"
				},
				"dependencies": [
					"11"
				],
				"ts": "2017-09-24T02:01:40.631598475Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:48)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "13",
				"op": "thenCompose",
				"closure": {
					"blob_id": "736",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"12"
				],
				"ts": "2017-09-24T02:01:40.655307731Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$0(VistaFlow.java:43)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "14",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:40.675486384Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "14",
				"ts": "2017-09-24T02:01:40.676731274Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "15",
				"op": "thenApply",
				"closure": {
					"blob_id": "738",
					"content_type": "application/java-serialized-object",
					"length": "909"
				},
				"dependencies": [
					"14"
				],
				"ts": "2017-09-24T02:01:40.704332922Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:48)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "16",
				"op": "thenCompose",
				"closure": {
					"blob_id": "739",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"15"
				],
				"ts": "2017-09-24T02:01:40.719170523Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$0(VistaFlow.java:43)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "17",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:40.757254402Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "17",
				"ts": "2017-09-24T02:01:40.761757004Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "18",
				"op": "thenApply",
				"closure": {
					"blob_id": "741",
					"content_type": "application/java-serialized-object",
					"length": "909"
				},
				"dependencies": [
					"17"
				],
				"ts": "2017-09-24T02:01:40.776859305Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:48)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "19",
				"op": "thenCompose",
				"closure": {
					"blob_id": "742",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"18"
				],
				"ts": "2017-09-24T02:01:40.817753803Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$0(VistaFlow.java:43)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "20",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:40.835535070Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "20",
				"ts": "2017-09-24T02:01:40.840679245Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "21",
				"op": "thenApply",
				"closure": {
					"blob_id": "744",
					"content_type": "application/java-serialized-object",
					"length": "909"
				},
				"dependencies": [
					"20"
				],
				"ts": "2017-09-24T02:01:40.879157079Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:48)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "22",
				"op": "thenCompose",
				"closure": {
					"blob_id": "745",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"21"
				],
				"ts": "2017-09-24T02:01:40.913376435Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$0(VistaFlow.java:43)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "23",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:40.922004665Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "23",
				"ts": "2017-09-24T02:01:40.923061569Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "24",
				"op": "thenApply",
				"closure": {
					"blob_id": "747",
					"content_type": "application/java-serialized-object",
					"length": "909"
				},
				"dependencies": [
					"23"
				],
				"ts": "2017-09-24T02:01:40.953122632Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:48)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "25",
				"op": "thenCompose",
				"closure": {
					"blob_id": "748",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"24"
				],
				"ts": "2017-09-24T02:01:40.983186892Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$0(VistaFlow.java:43)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "26",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:41.030168598Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "26",
				"ts": "2017-09-24T02:01:41.032523731Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "27",
				"op": "thenApply",
				"closure": {
					"blob_id": "750",
					"content_type": "application/java-serialized-object",
					"length": "909"
				},
				"dependencies": [
					"26"
				],
				"ts": "2017-09-24T02:01:41.070231836Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:48)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "28",
				"op": "thenCompose",
				"closure": {
					"blob_id": "751",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"27"
				],
				"ts": "2017-09-24T02:01:41.085909086Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$0(VistaFlow.java:43)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "29",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:41.104069324Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "29",
				"ts": "2017-09-24T02:01:41.105228811Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "30",
				"op": "thenApply",
				"closure": {
					"blob_id": "753",
					"content_type": "application/java-serialized-object",
					"length": "909"
				},
				"dependencies": [
					"29"
				],
				"ts": "2017-09-24T02:01:41.131058466Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:48)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "31",
				"op": "thenCompose",
				"closure": {
					"blob_id": "754",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"30"
				],
				"ts": "2017-09-24T02:01:41.153474186Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$0(VistaFlow.java:43)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "32",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:41.165582177Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "32",
				"ts": "2017-09-24T02:01:41.165844779Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "33",
				"op": "thenApply",
				"closure": {
					"blob_id": "756",
					"content_type": "application/java-serialized-object",
					"length": "909"
				},
				"dependencies": [
					"32"
				],
				"ts": "2017-09-24T02:01:41.186165571Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:48)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "34",
				"op": "thenCompose",
				"closure": {
					"blob_id": "757",
					"content_type": "application/java-serialized-object",
					"length": "1030"
				},
				"dependencies": [
					"33"
				],
				"ts": "2017-09-24T02:01:41.198904448Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$0(VistaFlow.java:43)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "35",
				"op": "allOf",
				"closure": null,
				"dependencies": [
					"7",
					"10",
					"13",
					"16",
					"19",
					"22",
					"25",
					"28",
					"31",
					"34"
				],
				"ts": "2017-09-24T02:01:41.233741504Z",
				"code_location": "com.example.vista.VistaFlow.lambda$handleRequest$d8973b84$1(VistaFlow.java:71)",
				"caller_id": "3"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "3",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "35"
						}
					}
				},
				"ts": "2017-09-24T02:01:41.278887288Z",
				"call_id": "01BTRSWRAX07WZ800000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "3",
				"composed_stage_id": "35",
				"ts": "2017-09-24T02:01:41.279336279Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "14",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "758",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSWRJJ07WZP00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "538.396105ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:48 GMT"
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
				"ts": "2017-09-24T02:01:48.051050260Z",
				"call_id": "01BTRSWRJJ07WZP00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "14",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "758",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSWRJJ07WZP00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "538.396105ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:48 GMT"
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
				"ts": "2017-09-24T02:01:48.054140261Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "15",
				"ts": "2017-09-24T02:01:48.101331030Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "15",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "759",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-24T02:01:48.313023543Z",
				"call_id": "01BTRSWZTS07WGJ00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "15",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "759",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-24T02:01:48.317157362Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "16",
				"ts": "2017-09-24T02:01:48.318258516Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "36",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:48.499560138Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:48)",
				"caller_id": "16"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "36",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "760",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-24T02:01:48.508785793Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "16",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "36"
						}
					}
				},
				"ts": "2017-09-24T02:01:48.697793390Z",
				"call_id": "01BTRSX01307WGM00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "16",
				"composed_stage_id": "36",
				"ts": "2017-09-24T02:01:48.698646824Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "16",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "760",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-24T02:01:48.700600712Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "29",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "761",
								"content_type": "text/plain; charset=utf-8",
								"length": "188"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSWRZW07WGA00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "394.479454ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:48 GMT"
								},
								{
									"key": "Content-Length",
									"value": "188"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:01:48.770820406Z",
				"call_id": "01BTRSWRZW07WGA00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "29",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "761",
								"content_type": "text/plain; charset=utf-8",
								"length": "188"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSWRZW07WGA00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "394.479454ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:48 GMT"
								},
								{
									"key": "Content-Length",
									"value": "188"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:01:48.771953923Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "30",
				"ts": "2017-09-24T02:01:48.772354769Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "30",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "762",
							"content_type": "application/java-serialized-object",
							"length": "296"
						}
					}
				},
				"ts": "2017-09-24T02:01:48.942251205Z",
				"call_id": "01BTRSX0FG07WGP00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "30",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "762",
							"content_type": "application/java-serialized-object",
							"length": "296"
						}
					}
				},
				"ts": "2017-09-24T02:01:48.949855395Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "31",
				"ts": "2017-09-24T02:01:48.959392197Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "23",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "763",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSWRV307WG200000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "463.029538ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:48 GMT"
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
				"ts": "2017-09-24T02:01:48.961243601Z",
				"call_id": "01BTRSWRV307WG200000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "23",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "763",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSWRV307WG200000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "463.029538ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:48 GMT"
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
				"ts": "2017-09-24T02:01:49.001317527Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "24",
				"ts": "2017-09-24T02:01:49.001978080Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "37",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:49.058942083Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": "31"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "37",
				"ts": "2017-09-24T02:01:49.066350694Z",
				"function_id": "myapp/draw"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "38",
				"op": "thenApply",
				"closure": {
					"blob_id": "765",
					"content_type": "application/java-serialized-object",
					"length": "862"
				},
				"dependencies": [
					"37"
				],
				"ts": "2017-09-24T02:01:49.125207254Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:48)",
				"caller_id": "31"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "17",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "767",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSWRN007WZT00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "529.651706ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:49 GMT"
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
				"ts": "2017-09-24T02:01:49.203659028Z",
				"call_id": "01BTRSWRN007WZT00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "17",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "767",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSWRN007WZT00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "529.651706ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:49 GMT"
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
				"ts": "2017-09-24T02:01:49.207250561Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "18",
				"ts": "2017-09-24T02:01:49.208175314Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "39",
				"op": "thenCompose",
				"closure": {
					"blob_id": "766",
					"content_type": "application/java-serialized-object",
					"length": "1086"
				},
				"dependencies": [
					"38"
				],
				"ts": "2017-09-24T02:01:49.213953472Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:54)",
				"caller_id": "31"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "31",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "39"
						}
					}
				},
				"ts": "2017-09-24T02:01:49.304137262Z",
				"call_id": "01BTRSX0N107WGR00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "31",
				"composed_stage_id": "39",
				"ts": "2017-09-24T02:01:49.307699129Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "24",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "768",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-24T02:01:49.569923128Z",
				"call_id": "01BTRSX0PM07WGT00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "24",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "768",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-24T02:01:49.571680239Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "25",
				"ts": "2017-09-24T02:01:49.593133848Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "26",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "769",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:49 GMT"
								},
								{
									"key": "Content-Length",
									"value": "72"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTRSWRY107WG600000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "445.436159ms"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:01:49.640890176Z",
				"call_id": "01BTRSWRY107WG600000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "26",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "769",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:49 GMT"
								},
								{
									"key": "Content-Length",
									"value": "72"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTRSWRY107WG600000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "445.436159ms"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:01:49.642879424Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "27",
				"ts": "2017-09-24T02:01:49.643923941Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "18",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "770",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-24T02:01:49.855581494Z",
				"call_id": "01BTRSX0XC07WH200000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "18",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "770",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-24T02:01:49.855888646Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "19",
				"ts": "2017-09-24T02:01:49.856081528Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "40",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:49.869046648Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:48)",
				"caller_id": "25"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "40",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "771",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-24T02:01:49.872532901Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "20",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "772",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSWRR507WZY00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "513.354858ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:49 GMT"
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
				"ts": "2017-09-24T02:01:49.928963308Z",
				"call_id": "01BTRSWRR507WZY00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "20",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "772",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSWRR507WZY00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "513.354858ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:49 GMT"
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
				"ts": "2017-09-24T02:01:49.930071154Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "21",
				"ts": "2017-09-24T02:01:49.930434242Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "25",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "40"
						}
					}
				},
				"ts": "2017-09-24T02:01:50.026198414Z",
				"call_id": "01BTRSX1A307WH600000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "25",
				"composed_stage_id": "40",
				"ts": "2017-09-24T02:01:50.026644809Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "25",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "771",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-24T02:01:50.031993653Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "27",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "773",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-24T02:01:50.127524289Z",
				"call_id": "01BTRSX1AH07WH800000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "27",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "773",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-24T02:01:50.128291620Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "28",
				"ts": "2017-09-24T02:01:50.130247206Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "41",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:50.167431904Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:48)",
				"caller_id": "19"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "41",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "774",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-24T02:01:50.167940228Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "19",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "41"
						}
					}
				},
				"ts": "2017-09-24T02:01:50.212425960Z",
				"call_id": "01BTRSX1H207WHE00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "19",
				"composed_stage_id": "41",
				"ts": "2017-09-24T02:01:50.216166724Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "19",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "774",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-24T02:01:50.222471586Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "21",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "775",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-24T02:01:50.405796917Z",
				"call_id": "01BTRSX1KE07WHG00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "21",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "775",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-24T02:01:50.406116255Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "22",
				"ts": "2017-09-24T02:01:50.406432997Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "42",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:50.446028765Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:48)",
				"caller_id": "28"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "42",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "776",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-24T02:01:50.450252383Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "28",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "42"
						}
					}
				},
				"ts": "2017-09-24T02:01:50.649494892Z",
				"call_id": "01BTRSX1SP07WHP00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "28",
				"composed_stage_id": "42",
				"ts": "2017-09-24T02:01:50.658507687Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "28",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "776",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-24T02:01:50.692134513Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "5",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "777",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSWRC907WZA00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "304.515814ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:50 GMT"
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
				"ts": "2017-09-24T02:01:50.723280349Z",
				"call_id": "01BTRSWRC907WZA00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "5",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "777",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSWRC907WZA00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "304.515814ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:50 GMT"
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
				"ts": "2017-09-24T02:01:50.724612740Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "6",
				"ts": "2017-09-24T02:01:50.725470769Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "43",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:50.725886997Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:48)",
				"caller_id": "22"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "43",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "778",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-24T02:01:50.728115874Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "8",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "779",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSWREF07WZE00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "502.38418ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:50 GMT"
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
				"ts": "2017-09-24T02:01:50.825761116Z",
				"call_id": "01BTRSWREF07WZE00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "8",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "779",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSWREF07WZE00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "502.38418ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:50 GMT"
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
				"ts": "2017-09-24T02:01:50.827027582Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "9",
				"ts": "2017-09-24T02:01:50.858670854Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "22",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "43"
						}
					}
				},
				"ts": "2017-09-24T02:01:50.941318477Z",
				"call_id": "01BTRSX22807WHT00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "22",
				"composed_stage_id": "43",
				"ts": "2017-09-24T02:01:50.942622301Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "22",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "778",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-24T02:01:50.943394027Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "9",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "780",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-24T02:01:51.152841382Z",
				"call_id": "01BTRSX2GF07WJ000000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "9",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "780",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-24T02:01:51.164646216Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "10",
				"ts": "2017-09-24T02:01:51.194226823Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "11",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "781",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:51 GMT"
								},
								{
									"key": "Content-Length",
									"value": "72"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTRSWRGW07WZJ00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "502.002012ms"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:01:51.250380344Z",
				"call_id": "01BTRSWRGW07WZJ00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "11",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "781",
								"content_type": "text/plain; charset=utf-8",
								"length": "72"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:51 GMT"
								},
								{
									"key": "Content-Length",
									"value": "72"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTRSWRGW07WZJ00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "502.002012ms"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:01:51.250793276Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "12",
				"ts": "2017-09-24T02:01:51.251078454Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "6",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "782",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-24T02:01:51.372302099Z",
				"call_id": "01BTRSX2CR07WHY00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "6",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "782",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-24T02:01:51.373374485Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "7",
				"ts": "2017-09-24T02:01:51.374196654Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "12",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "783",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-24T02:01:51.451570049Z",
				"call_id": "01BTRSX2X207WJ600000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "12",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "783",
							"content_type": "application/java-serialized-object",
							"length": "141"
						}
					}
				},
				"ts": "2017-09-24T02:01:51.452617563Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "13",
				"ts": "2017-09-24T02:01:51.453421053Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "44",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:51.522561269Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:48)",
				"caller_id": "10"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "44",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "784",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-24T02:01:51.523855304Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "10",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "44"
						}
					}
				},
				"ts": "2017-09-24T02:01:51.675882073Z",
				"call_id": "01BTRSX2V107WJ400000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "10",
				"composed_stage_id": "44",
				"ts": "2017-09-24T02:01:51.676853873Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "10",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "784",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-24T02:01:51.678548354Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "45",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:51.736037762Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:48)",
				"caller_id": "7"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "45",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "785",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-24T02:01:51.769883541Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "7",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "45"
						}
					}
				},
				"ts": "2017-09-24T02:01:51.884705734Z",
				"call_id": "01BTRSX30J07WJA00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "7",
				"composed_stage_id": "45",
				"ts": "2017-09-24T02:01:51.885422223Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "7",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "785",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-24T02:01:51.899447743Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "46",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:01:51.929086984Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:48)",
				"caller_id": "13"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "46",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "786",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-24T02:01:51.929780798Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "13",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "46"
						}
					}
				},
				"ts": "2017-09-24T02:01:52.004429278Z",
				"call_id": "01BTRSX33N07WJC00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "13",
				"composed_stage_id": "46",
				"ts": "2017-09-24T02:01:52.005306585Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "13",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "786",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-24T02:01:52.006904476Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "32",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "787",
								"content_type": "text/plain; charset=utf-8",
								"length": "186"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSWS1T07WGE00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "395.000164ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:54 GMT"
								},
								{
									"key": "Content-Length",
									"value": "186"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:01:54.658667838Z",
				"call_id": "01BTRSWS1T07WGE00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "32",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "787",
								"content_type": "text/plain; charset=utf-8",
								"length": "186"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSWS1T07WGE00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "395.000164ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:01:54 GMT"
								},
								{
									"key": "Content-Length",
									"value": "186"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:01:54.673372888Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "33",
				"ts": "2017-09-24T02:01:54.713211381Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "33",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "788",
							"content_type": "application/java-serialized-object",
							"length": "294"
						}
					}
				},
				"ts": "2017-09-24T02:01:54.911876544Z",
				"call_id": "01BTRSX6B207WJJ00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "33",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "788",
							"content_type": "application/java-serialized-object",
							"length": "294"
						}
					}
				},
				"ts": "2017-09-24T02:01:54.912399152Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "34",
				"ts": "2017-09-24T02:01:54.913207737Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "37",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "789",
								"content_type": "text/plain; charset=utf-8",
								"length": "111"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSX0RK07WGW00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "447.009877ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:02:02 GMT"
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
				"ts": "2017-09-24T02:02:02.702531037Z",
				"call_id": "01BTRSX0RK07WGW00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "37",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "789",
								"content_type": "text/plain; charset=utf-8",
								"length": "111"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSX0RK07WGW00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "447.009877ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:02:02 GMT"
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
				"ts": "2017-09-24T02:02:02.708551321Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "38",
				"ts": "2017-09-24T02:02:02.712876324Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "47",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:02:06.298589429Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": "34"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "47",
				"ts": "2017-09-24T02:02:06.299104446Z",
				"function_id": "myapp/draw"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "48",
				"op": "thenApply",
				"closure": {
					"blob_id": "791",
					"content_type": "application/java-serialized-object",
					"length": "862"
				},
				"dependencies": [
					"47"
				],
				"ts": "2017-09-24T02:02:06.377370929Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:48)",
				"caller_id": "34"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "49",
				"op": "thenCompose",
				"closure": {
					"blob_id": "792",
					"content_type": "application/java-serialized-object",
					"length": "1084"
				},
				"dependencies": [
					"48"
				],
				"ts": "2017-09-24T02:02:06.395732939Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$ca732154$1(VistaFlow.java:54)",
				"caller_id": "34"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "34",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "49"
						}
					}
				},
				"ts": "2017-09-24T02:02:06.500174985Z",
				"call_id": "01BTRSX6F607WJM00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "34",
				"composed_stage_id": "49",
				"ts": "2017-09-24T02:02:06.500555754Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "38",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "793",
							"content_type": "application/java-serialized-object",
							"length": "167"
						}
					}
				},
				"ts": "2017-09-24T02:02:06.839648619Z",
				"call_id": "01BTRSXE3507WJP00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "38",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "793",
							"content_type": "application/java-serialized-object",
							"length": "167"
						}
					}
				},
				"ts": "2017-09-24T02:02:06.839983939Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "39",
				"ts": "2017-09-24T02:02:06.840161139Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "50",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:02:08.136357031Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": "39"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "50",
				"ts": "2017-09-24T02:02:08.142177441Z",
				"function_id": "myapp/alert"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "51",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:02:08.192099317Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": "39"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "51",
				"ts": "2017-09-24T02:02:08.193604413Z",
				"function_id": "myapp/post-slack"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "52",
				"op": "allOf",
				"closure": null,
				"dependencies": [
					"50",
					"51"
				],
				"ts": "2017-09-24T02:02:08.335217073Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$732ec3da$1(VistaFlow.java:57)",
				"caller_id": "39"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "39",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "52"
						}
					}
				},
				"ts": "2017-09-24T02:02:08.552474585Z",
				"call_id": "01BTRSXJ3T07WJW00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "39",
				"composed_stage_id": "52",
				"ts": "2017-09-24T02:02:08.574722295Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "51",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "796",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "262.103µs"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:02:09 GMT"
								},
								{
									"key": "Content-Length",
									"value": "0"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTRSXKES07WK200000000000"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:02:09.759192788Z",
				"call_id": "01BTRSXKES07WK200000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "51",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "796",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "262.103µs"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:02:09 GMT"
								},
								{
									"key": "Content-Length",
									"value": "0"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTRSXKES07WK200000000000"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:02:09.759805694Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "47",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "797",
								"content_type": "text/plain; charset=utf-8",
								"length": "111"
							},
							"headers": [
								{
									"key": "Content-Length",
									"value": "111"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTRSXHK807WJR00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "279.0035ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:02:10 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:02:10.758636176Z",
				"call_id": "01BTRSXHK807WJR00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "47",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "797",
								"content_type": "text/plain; charset=utf-8",
								"length": "111"
							},
							"headers": [
								{
									"key": "Content-Length",
									"value": "111"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTRSXHK807WJR00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "279.0035ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:02:10 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:02:10.758969998Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "48",
				"ts": "2017-09-24T02:02:10.759433773Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "48",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "798",
							"content_type": "application/java-serialized-object",
							"length": "167"
						}
					}
				},
				"ts": "2017-09-24T02:02:11.648689720Z",
				"call_id": "01BTRSXNYH07WK400000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "48",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "798",
							"content_type": "application/java-serialized-object",
							"length": "167"
						}
					}
				},
				"ts": "2017-09-24T02:02:11.648985685Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "49",
				"ts": "2017-09-24T02:02:11.649136514Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "53",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:02:11.695703090Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": "49"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "53",
				"ts": "2017-09-24T02:02:11.696198229Z",
				"function_id": "myapp/alert"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "54",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:02:11.708929514Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": "49"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "54",
				"ts": "2017-09-24T02:02:11.709176535Z",
				"function_id": "myapp/post-slack"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "55",
				"op": "allOf",
				"closure": null,
				"dependencies": [
					"53",
					"54"
				],
				"ts": "2017-09-24T02:02:11.734304783Z",
				"code_location": "com.example.vista.VistaFlow.lambda$null$732ec3da$1(VistaFlow.java:57)",
				"caller_id": "49"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "49",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "55"
						}
					}
				},
				"ts": "2017-09-24T02:02:11.799565692Z",
				"call_id": "01BTRSXPT207WK600000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "49",
				"composed_stage_id": "55",
				"ts": "2017-09-24T02:02:11.801367252Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "50",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "801",
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
									"value": "01BTRSXKCM07WJY00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "244.79833ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:02:12 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:02:12.086754525Z",
				"call_id": "01BTRSXKCM07WJY00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "50",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "801",
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
									"value": "01BTRSXKCM07WJY00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "244.79833ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:02:12 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:02:12.099465034Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "52",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-24T02:02:12.102053003Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "39",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-24T02:02:12.103072249Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "31",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-24T02:02:12.103755875Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "54",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "802",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:02:13 GMT"
								},
								{
									"key": "Content-Length",
									"value": "0"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTRSXPW607WKC00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "321.536µs"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:02:13.211370787Z",
				"call_id": "01BTRSXPW607WKC00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "54",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "802",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:02:13 GMT"
								},
								{
									"key": "Content-Length",
									"value": "0"
								},
								{
									"key": "Fn_call_id",
									"value": "01BTRSXPW607WKC00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "321.536µs"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:02:13.211849445Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "53",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "803",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSXPVH07WK800000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "298.187879ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:02:19 GMT"
								},
								{
									"key": "Content-Length",
									"value": "0"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:02:19.637501851Z",
				"call_id": "01BTRSXPVH07WK800000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "53",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "803",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BTRSXPVH07WK800000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "298.187879ms"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:02:19 GMT"
								},
								{
									"key": "Content-Length",
									"value": "0"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:02:19.637784931Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "55",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-24T02:02:19.638165799Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "49",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-24T02:02:19.638358781Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "34",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-24T02:02:19.638591018Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "35",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-24T02:02:19.638894474Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "3",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-24T02:02:19.639082561Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "4",
				"ts": "2017-09-24T02:02:19.639281636Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "56",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-24T02:02:20.414770895Z",
				"code_location": "com.fnproject.fn.runtime.flow.JsonInvoke.invokeFunction(JsonInvoke.java:80)",
				"caller_id": "4"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "56",
				"ts": "2017-09-24T02:02:20.416625994Z",
				"function_id": "myapp/post-slack"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "4",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-24T02:02:20.516639255Z",
				"call_id": "01BTRSXYMJ07WKE00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "4",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-24T02:02:20.517182939Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "56",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "805",
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
									"value": "01BTRSXZC507WKG00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "508.624µs"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:02:20 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:02:20.671024653Z",
				"call_id": "01BTRSXZC507WKG00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"stage_id": "56",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "805",
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
									"value": "01BTRSXZC507WKG00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "508.624µs"
								},
								{
									"key": "Date",
									"value": "Sun, 24 Sep 2017 02:02:20 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-24T02:02:20.682775049Z"
			}
		},
		{
			"type": "model.GraphTerminatingEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"graph_id": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
				"function_id": "myapp/flow",
				"state": "unknown_state",
				"ts": "2017-09-24T02:02:20.683562757Z"
			}
		},
		{
			"type": "model.GraphCompletedEvent",
			"sub": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
			"data": {
				"graph_id": "47b0cec2-1a25-4e84-bfad-81e15bf0564a",
				"function_id": "myapp/flow",
				"ts": "2017-09-24T02:02:20.683859921Z"
			}
		}
	]
};
   export {mockActiveGraphEvents,mockSubscriptionData} ;
