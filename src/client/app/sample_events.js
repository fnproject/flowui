const mockActiveGraphEvents=[
	{
		"type": "model.GraphCreatedEvent",
		"sub": "_all",
		"data": {
			"graph_id": "a267d930-7167-417d-8ebe-0842089f3a69",
			"function_id": "fnflowchatbot/chatbotexample",
			"ts": "2017-09-08T12:20:25.095957437Z"
		}
	}
];

const mockSubscriptionData= {
	"a267d930-7167-417d-8ebe-0842089f3a69": [
		{
			"type": "model.GraphCreatedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"graph_id": "a267d930-7167-417d-8ebe-0842089f3a69",
				"function_id": "fnflowchatbot/chatbotexample",
				"ts": "2017-09-08T12:20:25.095957437Z"
			}
		},
		{
			"type": "model.GraphCreatedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"graph_id": "a267d930-7167-417d-8ebe-0842089f3a69",
				"function_id": "fnflowchatbot/chatbotexample",
				"ts": "2017-09-08T12:20:25.095957437Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "0",
				"op": "terminationHook",
				"closure": {
					"blob_id": "8de2ce6f-6af0-461d-806c-635e7044ce2d",
					"content_type": "application/java-serialized-object",
					"length": "1556"
				},
				"dependencies": [],
				"ts": "2017-09-08T12:20:25.619875617Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "1",
				"op": "externalCompletion",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-08T12:20:26.305493923Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "2",
				"op": "thenApply",
				"closure": {
					"blob_id": "e325328a-99bf-4a6e-97bf-c5ae47380796",
					"content_type": "application/java-serialized-object",
					"length": "927"
				},
				"dependencies": [
					"1"
				],
				"ts": "2017-09-08T12:20:26.492669333Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "3",
				"op": "thenCompose",
				"closure": {
					"blob_id": "01ba1458-b152-4797-b804-d587cf0cfd18",
					"content_type": "application/java-serialized-object",
					"length": "1643"
				},
				"dependencies": [
					"2"
				],
				"ts": "2017-09-08T12:20:26.716734007Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "4",
				"op": "thenCompose",
				"closure": {
					"blob_id": "e5b3feaa-722b-4f85-ae86-3d90cd979696",
					"content_type": "application/java-serialized-object",
					"length": "1617"
				},
				"dependencies": [
					"3"
				],
				"ts": "2017-09-08T12:20:26.918552440Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "5",
				"op": "thenAccept",
				"closure": {
					"blob_id": "a4c67b19-7deb-452e-b8c5-cb851c1a2a01",
					"content_type": "application/java-serialized-object",
					"length": "1452"
				},
				"dependencies": [
					"4"
				],
				"ts": "2017-09-08T12:20:27.101343418Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "6",
				"op": "delay",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-08T12:20:27.189236768Z"
			}
		},
		{
			"type": "model.DelayScheduledEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "6",
				"time_ms": "1504873527274",
				"ts": "2017-09-08T12:20:27.274130284Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "7",
				"op": "acceptEither",
				"closure": {
					"blob_id": "577a7320-d96e-4a57-9295-f62020288261",
					"content_type": "application/java-serialized-object",
					"length": "1446"
				},
				"dependencies": [
					"5",
					"6"
				],
				"ts": "2017-09-08T12:20:27.452288245Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "8",
				"op": "whenComplete",
				"closure": {
					"blob_id": "a411d67d-ce07-4def-9cfc-79711b77155c",
					"content_type": "application/java-serialized-object",
					"length": "1508"
				},
				"dependencies": [
					"7"
				],
				"ts": "2017-09-08T12:20:27.623777714Z"
			}
		},
		{
			"type": "model.GraphCommittedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"graph_id": "a267d930-7167-417d-8ebe-0842089f3a69",
				"ts": "2017-09-08T12:20:27.740286713Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "1",
				"result": {
					"successful": true,
					"datum": {
						"http_req": {
							"body": {
								"blob_id": "eab060f2-be8b-4c66-957d-ef9e82532e7b",
								"content_type": "application/octet-stream",
								"length": "176"
							},
							"headers": [
								{
									"key": "Content-Type",
									"value": "application/octet-stream"
								},
								{
									"key": "Content-Length",
									"value": "176"
								},
								{
									"key": "Connection",
									"value": "close"
								}
							],
							"method": "post"
						}
					}
				},
				"ts": "2017-09-08T12:20:32.331333557Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "2",
				"ts": "2017-09-08T12:20:32.418133352Z",
				"function_id": "fnflowchatbot/chatbotexample"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "2",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "ac300a02-2bb6-4a8e-b5ae-059e548d604a",
							"content_type": "application/java-serialized-object",
							"length": "295"
						}
					}
				},
				"ts": "2017-09-08T12:20:32.664247203Z",
				"call_id": "01BSGPYE3X07WPT00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "2",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "ac300a02-2bb6-4a8e-b5ae-059e548d604a",
							"content_type": "application/java-serialized-object",
							"length": "295"
						}
					}
				},
				"ts": "2017-09-08T12:20:32.749723975Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "3",
				"ts": "2017-09-08T12:20:32.830208861Z",
				"function_id": "fnflowchatbot/chatbotexample"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "9",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-08T12:20:34.014633240Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "9",
				"ts": "2017-09-08T12:20:34.093081210Z",
				"function_id": "fnflowchatbot/reverse"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "10",
				"op": "thenApply",
				"closure": {
					"blob_id": "83d760d2-f811-490e-a154-70ad6dc9d10f",
					"content_type": "application/java-serialized-object",
					"length": "690"
				},
				"dependencies": [
					"9"
				],
				"ts": "2017-09-08T12:20:34.263512996Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "11",
				"op": "exceptionally",
				"closure": {
					"blob_id": "9b9267a1-ba7f-4fa0-ad8e-f01b16db5817",
					"content_type": "application/java-serialized-object",
					"length": "663"
				},
				"dependencies": [
					"10"
				],
				"ts": "2017-09-08T12:20:34.423087556Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "3",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "11"
						}
					}
				},
				"ts": "2017-09-08T12:20:34.522418844Z",
				"call_id": "01BSGPYEGH07WPW00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "3",
				"composed_stage_id": "11",
				"ts": "2017-09-08T12:20:34.646171247Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "9",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "db6345ac-6492-4e90-8d67-9fb5a20b3e25",
								"content_type": "text/plain; charset=utf-8",
								"length": "5"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSGPYG2W07WPY00000000000"
								},
								{
									"key": "Date",
									"value": "Fri, 08 Sep 2017 12:20:35 GMT"
								},
								{
									"key": "Content-Length",
									"value": "5"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-08T12:20:36.067150771Z",
				"call_id": "01BSGPYG2W07WPY00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "9",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "db6345ac-6492-4e90-8d67-9fb5a20b3e25",
								"content_type": "text/plain; charset=utf-8",
								"length": "5"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSGPYG2W07WPY00000000000"
								},
								{
									"key": "Date",
									"value": "Fri, 08 Sep 2017 12:20:35 GMT"
								},
								{
									"key": "Content-Length",
									"value": "5"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-08T12:20:36.147570438Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "10",
				"ts": "2017-09-08T12:20:36.227879085Z",
				"function_id": "fnflowchatbot/chatbotexample"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "10",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "7920925a-c825-4393-924a-962c9fefada7",
							"content_type": "application/java-serialized-object",
							"length": "12"
						}
					}
				},
				"ts": "2017-09-08T12:20:36.423156549Z",
				"call_id": "01BSGPYHTS07WQ200000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "10",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "7920925a-c825-4393-924a-962c9fefada7",
							"content_type": "application/java-serialized-object",
							"length": "12"
						}
					}
				},
				"ts": "2017-09-08T12:20:36.500444781Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "11",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "7920925a-c825-4393-924a-962c9fefada7",
							"content_type": "application/java-serialized-object",
							"length": "12"
						}
					}
				},
				"ts": "2017-09-08T12:20:36.584278779Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "3",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "7920925a-c825-4393-924a-962c9fefada7",
							"content_type": "application/java-serialized-object",
							"length": "12"
						}
					}
				},
				"ts": "2017-09-08T12:20:36.692800544Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "4",
				"ts": "2017-09-08T12:20:36.773081035Z",
				"function_id": "fnflowchatbot/chatbotexample"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "12",
				"op": "externalCompletion",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-08T12:20:38.369884079Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "13",
				"op": "thenApply",
				"closure": {
					"blob_id": "ee1588a6-1648-492e-b850-46c21ce02f3b",
					"content_type": "application/java-serialized-object",
					"length": "927"
				},
				"dependencies": [
					"12"
				],
				"ts": "2017-09-08T12:20:38.545192967Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "14",
				"op": "thenCompose",
				"closure": {
					"blob_id": "7934e90f-2284-4b4c-ac27-178c400303f9",
					"content_type": "application/java-serialized-object",
					"length": "1729"
				},
				"dependencies": [
					"13"
				],
				"ts": "2017-09-08T12:20:38.721092125Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "4",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "14"
						}
					}
				},
				"ts": "2017-09-08T12:20:38.823136591Z",
				"call_id": "01BSGPYJBQ07WQ400000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "4",
				"composed_stage_id": "14",
				"ts": "2017-09-08T12:20:38.934730738Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "12",
				"result": {
					"successful": true,
					"datum": {
						"http_req": {
							"body": {
								"blob_id": "d27cffbc-a8cd-4113-9a09-9f55fb9fe1fd",
								"content_type": "application/octet-stream",
								"length": "173"
							},
							"headers": [
								{
									"key": "Connection",
									"value": "close"
								},
								{
									"key": "Content-Type",
									"value": "application/octet-stream"
								},
								{
									"key": "Content-Length",
									"value": "173"
								}
							],
							"method": "post"
						}
					}
				},
				"ts": "2017-09-08T12:20:43.398974546Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "13",
				"ts": "2017-09-08T12:20:43.511582976Z",
				"function_id": "fnflowchatbot/chatbotexample"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "13",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "677de17f-5e0d-42e4-9a8a-501fb0fc6b96",
							"content_type": "application/java-serialized-object",
							"length": "292"
						}
					}
				},
				"ts": "2017-09-08T12:20:43.704583660Z",
				"call_id": "01BSGPYRY907WQ600000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "13",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "677de17f-5e0d-42e4-9a8a-501fb0fc6b96",
							"content_type": "application/java-serialized-object",
							"length": "292"
						}
					}
				},
				"ts": "2017-09-08T12:20:43.788537343Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "14",
				"ts": "2017-09-08T12:20:43.873496403Z",
				"function_id": "fnflowchatbot/chatbotexample"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "15",
				"op": "externalCompletion",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-08T12:20:45.114717464Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "16",
				"op": "thenApply",
				"closure": {
					"blob_id": "e5b8d4c6-cdcc-4f9e-b41e-5df652f6cc24",
					"content_type": "application/java-serialized-object",
					"length": "927"
				},
				"dependencies": [
					"15"
				],
				"ts": "2017-09-08T12:20:45.281577160Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "17",
				"op": "thenCompose",
				"closure": {
					"blob_id": "f4132c9c-177f-45c9-8e81-e83c25127bc2",
					"content_type": "application/java-serialized-object",
					"length": "1729"
				},
				"dependencies": [
					"16"
				],
				"ts": "2017-09-08T12:20:45.438460567Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "14",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "17"
						}
					}
				},
				"ts": "2017-09-08T12:20:45.545429369Z",
				"call_id": "01BSGPYS9E07WQ800000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "14",
				"composed_stage_id": "17",
				"ts": "2017-09-08T12:20:45.622447796Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "15",
				"result": {
					"successful": true,
					"datum": {
						"http_req": {
							"body": {
								"blob_id": "8e6470ea-2744-400c-8f3f-44b34a82725f",
								"content_type": "application/octet-stream",
								"length": "173"
							},
							"headers": [
								{
									"key": "Content-Type",
									"value": "application/octet-stream"
								},
								{
									"key": "Content-Length",
									"value": "173"
								},
								{
									"key": "Connection",
									"value": "close"
								}
							],
							"method": "post"
						}
					}
				},
				"ts": "2017-09-08T12:20:47.500725756Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "16",
				"ts": "2017-09-08T12:20:47.576242545Z",
				"function_id": "fnflowchatbot/chatbotexample"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "16",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "19795436-16cc-4a8e-b2e1-dae0aa9b9ecd",
							"content_type": "application/java-serialized-object",
							"length": "292"
						}
					}
				},
				"ts": "2017-09-08T12:20:47.764623992Z",
				"call_id": "01BSGPYWXA07WQA00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "16",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "19795436-16cc-4a8e-b2e1-dae0aa9b9ecd",
							"content_type": "application/java-serialized-object",
							"length": "292"
						}
					}
				},
				"ts": "2017-09-08T12:20:47.842021985Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "17",
				"ts": "2017-09-08T12:20:47.917508434Z",
				"function_id": "fnflowchatbot/chatbotexample"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "18",
				"op": "externalCompletion",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-08T12:20:48.857773363Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "19",
				"op": "thenApply",
				"closure": {
					"blob_id": "a82e75be-be03-475b-b246-68a32ff1c488",
					"content_type": "application/java-serialized-object",
					"length": "927"
				},
				"dependencies": [
					"18"
				],
				"ts": "2017-09-08T12:20:49.027121373Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "20",
				"op": "thenCompose",
				"closure": {
					"blob_id": "32adaab5-d497-4d32-802b-e84e46a7d424",
					"content_type": "application/java-serialized-object",
					"length": "1724"
				},
				"dependencies": [
					"19"
				],
				"ts": "2017-09-08T12:20:49.203017048Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "17",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "20"
						}
					}
				},
				"ts": "2017-09-08T12:20:49.307276836Z",
				"call_id": "01BSGPYX8207WQC00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "17",
				"composed_stage_id": "20",
				"ts": "2017-09-08T12:20:49.385969680Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "18",
				"result": {
					"successful": true,
					"datum": {
						"http_req": {
							"body": {
								"blob_id": "e29cc7b6-d95a-4e3f-9055-0c48a5be448f",
								"content_type": "application/octet-stream",
								"length": "173"
							},
							"headers": [
								{
									"key": "Content-Type",
									"value": "application/octet-stream"
								},
								{
									"key": "Content-Length",
									"value": "173"
								},
								{
									"key": "Connection",
									"value": "close"
								}
							],
							"method": "post"
						}
					}
				},
				"ts": "2017-09-08T12:20:52.111187187Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "19",
				"ts": "2017-09-08T12:20:52.191693190Z",
				"function_id": "fnflowchatbot/chatbotexample"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "19",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "c5d3932c-e516-4f74-b527-f48bcf23c761",
							"content_type": "application/java-serialized-object",
							"length": "292"
						}
					}
				},
				"ts": "2017-09-08T12:20:52.381620792Z",
				"call_id": "01BSGPZ1DS07WQE00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "19",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "c5d3932c-e516-4f74-b527-f48bcf23c761",
							"content_type": "application/java-serialized-object",
							"length": "292"
						}
					}
				},
				"ts": "2017-09-08T12:20:52.483157443Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "20",
				"ts": "2017-09-08T12:20:52.565099208Z",
				"function_id": "fnflowchatbot/chatbotexample"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "21",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-08T12:20:53.373182610Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "21",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "38f75765-fbcc-4fbf-a058-eddbcc5f4289",
							"content_type": "application/java-serialized-object",
							"length": "47"
						}
					}
				},
				"ts": "2017-09-08T12:20:53.449544506Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "20",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "21"
						}
					}
				},
				"ts": "2017-09-08T12:20:53.556776300Z",
				"call_id": "01BSGPZ1S507WQG00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "20",
				"composed_stage_id": "21",
				"ts": "2017-09-08T12:20:53.635612141Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "20",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "38f75765-fbcc-4fbf-a058-eddbcc5f4289",
							"content_type": "application/java-serialized-object",
							"length": "47"
						}
					}
				},
				"ts": "2017-09-08T12:20:53.714941751Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "17",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "38f75765-fbcc-4fbf-a058-eddbcc5f4289",
							"content_type": "application/java-serialized-object",
							"length": "47"
						}
					}
				},
				"ts": "2017-09-08T12:20:53.795963903Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "14",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "38f75765-fbcc-4fbf-a058-eddbcc5f4289",
							"content_type": "application/java-serialized-object",
							"length": "47"
						}
					}
				},
				"ts": "2017-09-08T12:20:53.875004793Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "4",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "38f75765-fbcc-4fbf-a058-eddbcc5f4289",
							"content_type": "application/java-serialized-object",
							"length": "47"
						}
					}
				},
				"ts": "2017-09-08T12:20:53.952613084Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "5",
				"ts": "2017-09-08T12:20:54.033449940Z",
				"function_id": "fnflowchatbot/chatbotexample"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "5",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-08T12:20:54.713814313Z",
				"call_id": "01BSGPZ37C07WQJ00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "5",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-08T12:20:54.813370454Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "7",
				"ts": "2017-09-08T12:20:54.882685818Z",
				"function_id": "fnflowchatbot/chatbotexample"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "7",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-08T12:20:55.668389504Z",
				"call_id": "01BSGPZ41H07WQM00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "7",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-08T12:20:55.747166332Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "8",
				"ts": "2017-09-08T12:20:55.825884630Z",
				"function_id": "fnflowchatbot/chatbotexample"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "8",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-08T12:20:56.349853357Z",
				"call_id": "01BSGPZ4YW07WQP00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "a267d930-7167-417d-8ebe-0842089f3a69",
			"data": {
				"stage_id": "8",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-08T12:20:56.440263476Z"
			}
		}
	]
};
   export {mockActiveGraphEvents,mockSubscriptionData} ;
