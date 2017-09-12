const mockActiveGraphEvents=[
	{
		"type": "model.GraphCreatedEvent",
		"sub": "_all",
		"data": {
			"graph_id": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"function_id": "myapp/flow",
			"ts": "2017-09-12T09:45:54.475132928Z"
		}
	}
];

const mockSubscriptionData= {
	"0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d": [
		{
			"type": "model.GraphCreatedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"graph_id": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
				"function_id": "myapp/flow",
				"ts": "2017-09-12T09:45:54.475132928Z"
			}
		},
		{
			"type": "model.GraphCreatedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"graph_id": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
				"function_id": "myapp/flow",
				"ts": "2017-09-12T09:45:54.475132928Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "0",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:45:54.676434340Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "0",
				"ts": "2017-09-12T09:45:54.769213267Z",
				"function_id": "myapp/scraper"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "1",
				"op": "whenComplete",
				"closure": {
					"blob_id": "98c85aff-c62f-4d7f-b6cd-3d6ae019eabe",
					"content_type": "application/java-serialized-object",
					"length": "756"
				},
				"dependencies": [
					"0"
				],
				"ts": "2017-09-12T09:45:55.046992068Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "2",
				"op": "thenCompose",
				"closure": {
					"blob_id": "85ed472f-6bcb-4f58-ac95-f2ad62aa0a1d",
					"content_type": "application/java-serialized-object",
					"length": "703"
				},
				"dependencies": [
					"1"
				],
				"ts": "2017-09-12T09:45:55.357481524Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "3",
				"op": "whenComplete",
				"closure": {
					"blob_id": "4b4d13e9-4179-405d-b959-e17d3663c470",
					"content_type": "application/java-serialized-object",
					"length": "667"
				},
				"dependencies": [
					"2"
				],
				"ts": "2017-09-12T09:45:55.568382340Z"
			}
		},
		{
			"type": "model.GraphCommittedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"graph_id": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
				"ts": "2017-09-12T09:45:55.718573998Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "0",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "d6f7dcf6-462a-4df3-bdd7-f48dc15d7076",
								"content_type": "text/plain; charset=utf-8",
								"length": "1013"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQP5XP07WY000000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "256.810364ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:45:59 GMT"
								},
								{
									"key": "Content-Length",
									"value": "1013"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:45:59.754177866Z",
				"call_id": "01BSTQP5XP07WY000000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "0",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "d6f7dcf6-462a-4df3-bdd7-f48dc15d7076",
								"content_type": "text/plain; charset=utf-8",
								"length": "1013"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQP5XP07WY000000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "256.810364ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:45:59 GMT"
								},
								{
									"key": "Content-Length",
									"value": "1013"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:45:59.840198623Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "1",
				"ts": "2017-09-12T09:45:59.918299604Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "1",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:46:01.889801575Z",
				"call_id": "01BSTQPAY307WY400000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "1",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "d6f7dcf6-462a-4df3-bdd7-f48dc15d7076",
								"content_type": "text/plain; charset=utf-8",
								"length": "1013"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQP5XP07WY000000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "256.810364ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:45:59 GMT"
								},
								{
									"key": "Content-Length",
									"value": "1013"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:01.974428484Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "2",
				"ts": "2017-09-12T09:46:02.066453551Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "4",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:46:03.936438431Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "4",
				"ts": "2017-09-12T09:46:04.013816218Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "5",
				"op": "whenComplete",
				"closure": {
					"blob_id": "f3fbe2dd-e945-4cc6-8898-cb8a00f89e52",
					"content_type": "application/java-serialized-object",
					"length": "772"
				},
				"dependencies": [
					"4"
				],
				"ts": "2017-09-12T09:46:04.176499658Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "6",
				"op": "thenCompose",
				"closure": {
					"blob_id": "50bec8ac-13fb-4be9-a3d9-bb28e0880ba9",
					"content_type": "application/java-serialized-object",
					"length": "1012"
				},
				"dependencies": [
					"5"
				],
				"ts": "2017-09-12T09:46:04.336392606Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "7",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:46:05.643642881Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "7",
				"ts": "2017-09-12T09:46:05.721983194Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "8",
				"op": "whenComplete",
				"closure": {
					"blob_id": "c77f6bd7-a342-4ca8-93ac-4bac3be149bf",
					"content_type": "application/java-serialized-object",
					"length": "772"
				},
				"dependencies": [
					"7"
				],
				"ts": "2017-09-12T09:46:05.889588450Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "9",
				"op": "thenCompose",
				"closure": {
					"blob_id": "9078c685-257c-463b-ba33-7cd0f6a2fb7b",
					"content_type": "application/java-serialized-object",
					"length": "1012"
				},
				"dependencies": [
					"8"
				],
				"ts": "2017-09-12T09:46:06.059523810Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "10",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:46:06.395734108Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "10",
				"ts": "2017-09-12T09:46:06.477355965Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "11",
				"op": "whenComplete",
				"closure": {
					"blob_id": "2d589a54-d057-4f88-a0ac-61b69816cdd6",
					"content_type": "application/java-serialized-object",
					"length": "772"
				},
				"dependencies": [
					"10"
				],
				"ts": "2017-09-12T09:46:06.664897808Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "12",
				"op": "thenCompose",
				"closure": {
					"blob_id": "82b49a06-b2a7-4da4-932e-e30e755c7aee",
					"content_type": "application/java-serialized-object",
					"length": "1012"
				},
				"dependencies": [
					"11"
				],
				"ts": "2017-09-12T09:46:06.833877133Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "13",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:46:07.177468207Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "13",
				"ts": "2017-09-12T09:46:07.260296121Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "14",
				"op": "whenComplete",
				"closure": {
					"blob_id": "012c9851-59fa-453f-8b13-fbc1da5d6bdb",
					"content_type": "application/java-serialized-object",
					"length": "772"
				},
				"dependencies": [
					"13"
				],
				"ts": "2017-09-12T09:46:07.461985001Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "15",
				"op": "thenCompose",
				"closure": {
					"blob_id": "74cfce1c-7bea-4052-8fa8-07dcf8dab229",
					"content_type": "application/java-serialized-object",
					"length": "1012"
				},
				"dependencies": [
					"14"
				],
				"ts": "2017-09-12T09:46:07.637976613Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "16",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:46:08.079384001Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "16",
				"ts": "2017-09-12T09:46:08.169576110Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "17",
				"op": "whenComplete",
				"closure": {
					"blob_id": "b0f1e663-33bf-4c5e-8aab-4d5a2dc06157",
					"content_type": "application/java-serialized-object",
					"length": "772"
				},
				"dependencies": [
					"16"
				],
				"ts": "2017-09-12T09:46:08.344735749Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "18",
				"op": "thenCompose",
				"closure": {
					"blob_id": "b329ee1c-1b5b-4d90-a9fa-56e88dadeb09",
					"content_type": "application/java-serialized-object",
					"length": "1012"
				},
				"dependencies": [
					"17"
				],
				"ts": "2017-09-12T09:46:08.507047902Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "19",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:46:08.823615286Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "19",
				"ts": "2017-09-12T09:46:08.909847107Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "20",
				"op": "whenComplete",
				"closure": {
					"blob_id": "f194eb57-cdd2-4c98-974d-0d8c019cfbf8",
					"content_type": "application/java-serialized-object",
					"length": "772"
				},
				"dependencies": [
					"19"
				],
				"ts": "2017-09-12T09:46:09.089747064Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "21",
				"op": "thenCompose",
				"closure": {
					"blob_id": "751e53a6-fac9-4882-bf9b-a4d23ca06ba9",
					"content_type": "application/java-serialized-object",
					"length": "1012"
				},
				"dependencies": [
					"20"
				],
				"ts": "2017-09-12T09:46:09.253239103Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "22",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:46:09.588395075Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "22",
				"ts": "2017-09-12T09:46:09.682706994Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "23",
				"op": "whenComplete",
				"closure": {
					"blob_id": "9d328161-0b9f-44a9-9910-6a695bfd1027",
					"content_type": "application/java-serialized-object",
					"length": "772"
				},
				"dependencies": [
					"22"
				],
				"ts": "2017-09-12T09:46:09.864943448Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "24",
				"op": "thenCompose",
				"closure": {
					"blob_id": "528d3940-ab59-4c3e-b005-b89b58a9870c",
					"content_type": "application/java-serialized-object",
					"length": "1012"
				},
				"dependencies": [
					"23"
				],
				"ts": "2017-09-12T09:46:10.037589087Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "25",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:46:10.370483080Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "25",
				"ts": "2017-09-12T09:46:10.459555437Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "26",
				"op": "whenComplete",
				"closure": {
					"blob_id": "41ed425a-4382-48fe-b3ca-05005fadb587",
					"content_type": "application/java-serialized-object",
					"length": "772"
				},
				"dependencies": [
					"25"
				],
				"ts": "2017-09-12T09:46:10.638023789Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "27",
				"op": "thenCompose",
				"closure": {
					"blob_id": "2bcb04c6-266f-4822-8860-c8e18acd1f66",
					"content_type": "application/java-serialized-object",
					"length": "1012"
				},
				"dependencies": [
					"26"
				],
				"ts": "2017-09-12T09:46:10.853487321Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "28",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:46:11.185959984Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "28",
				"ts": "2017-09-12T09:46:11.267193374Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "29",
				"op": "whenComplete",
				"closure": {
					"blob_id": "b98c05d9-98c6-4294-829d-fce1445df95f",
					"content_type": "application/java-serialized-object",
					"length": "772"
				},
				"dependencies": [
					"28"
				],
				"ts": "2017-09-12T09:46:11.443408437Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "30",
				"op": "thenCompose",
				"closure": {
					"blob_id": "79fee0b8-7856-482e-bb88-975122c8e9fa",
					"content_type": "application/java-serialized-object",
					"length": "1012"
				},
				"dependencies": [
					"29"
				],
				"ts": "2017-09-12T09:46:11.616043089Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "31",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:46:11.997378509Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "31",
				"ts": "2017-09-12T09:46:12.083756967Z",
				"function_id": "myapp/detect-plates"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "32",
				"op": "whenComplete",
				"closure": {
					"blob_id": "af12b2b4-32a0-43c9-8722-695ce58a1c12",
					"content_type": "application/java-serialized-object",
					"length": "772"
				},
				"dependencies": [
					"31"
				],
				"ts": "2017-09-12T09:46:12.275815177Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "33",
				"op": "thenCompose",
				"closure": {
					"blob_id": "a61cf106-9029-4a7b-9ff1-026cd226deb2",
					"content_type": "application/java-serialized-object",
					"length": "1012"
				},
				"dependencies": [
					"32"
				],
				"ts": "2017-09-12T09:46:12.500567361Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "34",
				"op": "allOf",
				"closure": null,
				"dependencies": [
					"33",
					"12",
					"24",
					"15",
					"27",
					"6",
					"18",
					"9",
					"30",
					"21"
				],
				"ts": "2017-09-12T09:46:12.609518968Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "2",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "34"
						}
					}
				},
				"ts": "2017-09-12T09:46:12.734148207Z",
				"call_id": "01BSTQPD1907WY600000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "2",
				"composed_stage_id": "34",
				"ts": "2017-09-12T09:46:12.883413597Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "4",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "02a992b0-9e63-499b-afe9-60528f308296",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQPQC407WY800000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "357.791053ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:15 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:15.711595663Z",
				"call_id": "01BSTQPQC407WY800000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "4",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "02a992b0-9e63-499b-afe9-60528f308296",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQPQC407WY800000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "357.791053ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:15 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:15.831519745Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "5",
				"ts": "2017-09-12T09:46:15.981692524Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "7",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "fbd9d262-265e-4068-a8c8-72bd09d0b28f",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:18 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								},
								{
									"key": "Fn_call_id",
									"value": "01BSTQPT9107WYC00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "346.245417ms"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:18.594413324Z",
				"call_id": "01BSTQPT9107WYC00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "7",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "fbd9d262-265e-4068-a8c8-72bd09d0b28f",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:18 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								},
								{
									"key": "Fn_call_id",
									"value": "01BSTQPT9107WYC00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "346.245417ms"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:18.728698774Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "8",
				"ts": "2017-09-12T09:46:18.872138515Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "10",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "9587a747-54da-48c7-9154-d07061a4ae03",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQPX3707WYG00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "349.523823ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:22 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:22.157256967Z",
				"call_id": "01BSTQPX3707WYG00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "10",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "9587a747-54da-48c7-9154-d07061a4ae03",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQPX3707WYG00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "349.523823ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:22 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:22.316087944Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "11",
				"ts": "2017-09-12T09:46:22.491055127Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "13",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "11c11ee6-6885-41c0-b9c1-127985df866c",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQ0JF07WYM00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "428.005004ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:25 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:26.011357809Z",
				"call_id": "01BSTQQ0JF07WYM00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "13",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "11c11ee6-6885-41c0-b9c1-127985df866c",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQ0JF07WYM00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "428.005004ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:25 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:26.166067482Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "14",
				"ts": "2017-09-12T09:46:26.290900373Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "16",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "df032195-f902-4db0-b774-601db3913b53",
								"content_type": "text/plain; charset=utf-8",
								"length": "102"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQ4B207WYR00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "354.245958ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:29 GMT"
								},
								{
									"key": "Content-Length",
									"value": "102"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:29.366332160Z",
				"call_id": "01BSTQQ4B207WYR00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "16",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "df032195-f902-4db0-b774-601db3913b53",
								"content_type": "text/plain; charset=utf-8",
								"length": "102"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQ4B207WYR00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "354.245958ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:29 GMT"
								},
								{
									"key": "Content-Length",
									"value": "102"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:29.527532395Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "17",
				"ts": "2017-09-12T09:46:29.656487189Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "19",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "5c779604-2f17-4ae9-9bde-16b9b6c589d0",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQ7KQ07WYW00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "290.060735ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:32 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:32.626497038Z",
				"call_id": "01BSTQQ7KQ07WYW00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "19",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "5c779604-2f17-4ae9-9bde-16b9b6c589d0",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQ7KQ07WYW00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "290.060735ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:32 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:32.751785921Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "20",
				"ts": "2017-09-12T09:46:32.890259600Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "22",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "4883e93e-3eed-43b5-bc4f-4bfe07dbaf2e",
								"content_type": "text/plain; charset=utf-8",
								"length": "101"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQASZ07WZ000000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "335.81581ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:35 GMT"
								},
								{
									"key": "Content-Length",
									"value": "101"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:35.290260403Z",
				"call_id": "01BSTQQASZ07WZ000000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "22",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "4883e93e-3eed-43b5-bc4f-4bfe07dbaf2e",
								"content_type": "text/plain; charset=utf-8",
								"length": "101"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQASZ07WZ000000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "335.81581ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:35 GMT"
								},
								{
									"key": "Content-Length",
									"value": "101"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:35.398195438Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "23",
				"ts": "2017-09-12T09:46:35.528699704Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "25",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "c0b86412-863f-4f16-ba57-09df68f7a2ca",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "237.437119ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:38 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								},
								{
									"key": "Fn_call_id",
									"value": "01BSTQQDCV07WZ400000000000"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:38.500710622Z",
				"call_id": "01BSTQQDCV07WZ400000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "25",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "c0b86412-863f-4f16-ba57-09df68f7a2ca",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "237.437119ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:38 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								},
								{
									"key": "Fn_call_id",
									"value": "01BSTQQDCV07WZ400000000000"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:38.642434876Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "26",
				"ts": "2017-09-12T09:46:38.767789985Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "28",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "09ca4126-9a3f-4080-98c3-bed2fc556e12",
								"content_type": "text/plain; charset=utf-8",
								"length": "102"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQGHF07WZ800000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "332.39872ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:41 GMT"
								},
								{
									"key": "Content-Length",
									"value": "102"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:41.625736004Z",
				"call_id": "01BSTQQGHF07WZ800000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "28",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "09ca4126-9a3f-4080-98c3-bed2fc556e12",
								"content_type": "text/plain; charset=utf-8",
								"length": "102"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQGHF07WZ800000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "332.39872ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:41 GMT"
								},
								{
									"key": "Content-Length",
									"value": "102"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:41.737679069Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "29",
				"ts": "2017-09-12T09:46:41.883711818Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "31",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "949d7a97-60c8-43eb-8a64-77b60a986c93",
								"content_type": "text/plain; charset=utf-8",
								"length": "100"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQKPB07WZC00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "331.916159ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:45 GMT"
								},
								{
									"key": "Content-Length",
									"value": "100"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:45.532742248Z",
				"call_id": "01BSTQQKPB07WZC00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "31",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "949d7a97-60c8-43eb-8a64-77b60a986c93",
								"content_type": "text/plain; charset=utf-8",
								"length": "100"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQKPB07WZC00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "331.916159ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:45 GMT"
								},
								{
									"key": "Content-Length",
									"value": "100"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:45.647547321Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "32",
				"ts": "2017-09-12T09:46:45.750731954Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "5",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:46:51.795566966Z",
				"call_id": "01BSTQQQD607WZG00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "5",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "02a992b0-9e63-499b-afe9-60528f308296",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQPQC407WY800000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "357.791053ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:15 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:51.915067204Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "6",
				"ts": "2017-09-12T09:46:52.003489199Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "8",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:46:52.121169566Z",
				"call_id": "01BSTQQXGY07WZM00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "8",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "fbd9d262-265e-4068-a8c8-72bd09d0b28f",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:18 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								},
								{
									"key": "Fn_call_id",
									"value": "01BSTQPT9107WYC00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "346.245417ms"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:52.225868809Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "9",
				"ts": "2017-09-12T09:46:52.313716844Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "11",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:46:52.445901836Z",
				"call_id": "01BSTQQXTT07WZP00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "11",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "9587a747-54da-48c7-9154-d07061a4ae03",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQPX3707WYG00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "349.523823ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:22 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:52.564036996Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "12",
				"ts": "2017-09-12T09:46:52.642473726Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "14",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:46:52.805293555Z",
				"call_id": "01BSTQQY4Z07WZR00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "14",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "11c11ee6-6885-41c0-b9c1-127985df866c",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQ0JF07WYM00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "428.005004ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:25 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:52.882795927Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "15",
				"ts": "2017-09-12T09:46:52.998484415Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "17",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:46:53.767530402Z",
				"call_id": "01BSTQQYJM07WZT00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "17",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "df032195-f902-4db0-b774-601db3913b53",
								"content_type": "text/plain; charset=utf-8",
								"length": "102"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQ4B207WYR00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "354.245958ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:29 GMT"
								},
								{
									"key": "Content-Length",
									"value": "102"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:53.874441079Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "18",
				"ts": "2017-09-12T09:46:53.950231960Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "20",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:46:54.772657620Z",
				"call_id": "01BSTQQZE807WZW00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "20",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "5c779604-2f17-4ae9-9bde-16b9b6c589d0",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQ7KQ07WYW00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "290.060735ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:32 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:54.879923700Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "21",
				"ts": "2017-09-12T09:46:54.967179496Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "23",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:46:55.042738635Z",
				"call_id": "01BSTQR0DN07WZY00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "23",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "4883e93e-3eed-43b5-bc4f-4bfe07dbaf2e",
								"content_type": "text/plain; charset=utf-8",
								"length": "101"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQASZ07WZ000000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "335.81581ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:35 GMT"
								},
								{
									"key": "Content-Length",
									"value": "101"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:55.150114393Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "24",
				"ts": "2017-09-12T09:46:55.249864455Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "26",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:46:55.590107728Z",
				"call_id": "01BSTQR0P307WG000000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "26",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "c0b86412-863f-4f16-ba57-09df68f7a2ca",
								"content_type": "text/plain; charset=utf-8",
								"length": "20"
							},
							"headers": [
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "237.437119ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:38 GMT"
								},
								{
									"key": "Content-Length",
									"value": "20"
								},
								{
									"key": "Fn_call_id",
									"value": "01BSTQQDCV07WZ400000000000"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:55.673544882Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "27",
				"ts": "2017-09-12T09:46:55.787645741Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "29",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:46:55.874700260Z",
				"call_id": "01BSTQR19T07WG200000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "29",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "09ca4126-9a3f-4080-98c3-bed2fc556e12",
								"content_type": "text/plain; charset=utf-8",
								"length": "102"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQGHF07WZ800000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "332.39872ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:41 GMT"
								},
								{
									"key": "Content-Length",
									"value": "102"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:55.986574602Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "30",
				"ts": "2017-09-12T09:46:56.066444634Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "32",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:46:56.177538246Z",
				"call_id": "01BSTQR1G507WG400000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "32",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "949d7a97-60c8-43eb-8a64-77b60a986c93",
								"content_type": "text/plain; charset=utf-8",
								"length": "100"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQQKPB07WZC00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "331.916159ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:46:45 GMT"
								},
								{
									"key": "Content-Length",
									"value": "100"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:46:56.251261133Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "33",
				"ts": "2017-09-12T09:46:56.366991275Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "35",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:46:56.561268723Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "35",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "1d024cf4-a1bb-4041-aa1e-4a241dcd270c",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-12T09:46:56.641865944Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "6",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "35"
						}
					}
				},
				"ts": "2017-09-12T09:46:56.770392916Z",
				"call_id": "01BSTQR1VW07WG600000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "6",
				"composed_stage_id": "35",
				"ts": "2017-09-12T09:46:56.881271368Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "6",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "1d024cf4-a1bb-4041-aa1e-4a241dcd270c",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-12T09:46:57.061359839Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "36",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:46:57.149068430Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "36",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "92b7c639-a4d4-403b-8981-566b8cc6a5c2",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-12T09:46:57.227791341Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "9",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "36"
						}
					}
				},
				"ts": "2017-09-12T09:46:57.361518313Z",
				"call_id": "01BSTQR2C307WG800000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "9",
				"composed_stage_id": "36",
				"ts": "2017-09-12T09:46:57.477975245Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "9",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "92b7c639-a4d4-403b-8981-566b8cc6a5c2",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-12T09:46:57.666079777Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "37",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:46:57.747759391Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "37",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "9419db42-30d5-4213-8ed5-ed50b4b0f8be",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-12T09:46:57.824631066Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "12",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "37"
						}
					}
				},
				"ts": "2017-09-12T09:46:57.933205488Z",
				"call_id": "01BSTQR2Z207WGA00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "12",
				"composed_stage_id": "37",
				"ts": "2017-09-12T09:46:58.044235971Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "12",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "9419db42-30d5-4213-8ed5-ed50b4b0f8be",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-12T09:46:58.196926096Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "38",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:46:58.270126965Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "38",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "a91d4bff-ffba-4032-98d7-ad593620faf7",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-12T09:46:58.372417694Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "15",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "38"
						}
					}
				},
				"ts": "2017-09-12T09:46:58.486194015Z",
				"call_id": "01BSTQR3GE07WGC00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "15",
				"composed_stage_id": "38",
				"ts": "2017-09-12T09:46:58.599431936Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "15",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "a91d4bff-ffba-4032-98d7-ad593620faf7",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-12T09:46:58.676252568Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "39",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:47:00.993104696Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "39",
				"ts": "2017-09-12T09:47:01.075721465Z",
				"function_id": "myapp/alert"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "40",
				"op": "whenComplete",
				"closure": {
					"blob_id": "77a30330-1ada-4e2f-8e33-2bcae1b81e0f",
					"content_type": "application/java-serialized-object",
					"length": "764"
				},
				"dependencies": [
					"39"
				],
				"ts": "2017-09-12T09:47:01.250945062Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "41",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:47:01.927564020Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "41",
				"ts": "2017-09-12T09:47:02.016499742Z",
				"function_id": "myapp/draw"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "42",
				"op": "whenComplete",
				"closure": {
					"blob_id": "28ddadf9-aa88-4853-a724-c02a18f870b9",
					"content_type": "application/java-serialized-object",
					"length": "763"
				},
				"dependencies": [
					"41"
				],
				"ts": "2017-09-12T09:47:02.200992302Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "43",
				"op": "allOf",
				"closure": null,
				"dependencies": [
					"40",
					"42"
				],
				"ts": "2017-09-12T09:47:02.305373800Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "18",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "43"
						}
					}
				},
				"ts": "2017-09-12T09:47:02.458275090Z",
				"call_id": "01BSTQR41Q07WGE00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "18",
				"composed_stage_id": "43",
				"ts": "2017-09-12T09:47:02.574933696Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "44",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:47:02.742930552Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "44",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "f76d0cf3-040b-43ce-aa39-42ba6d4eac11",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-12T09:47:02.844290419Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "21",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "44"
						}
					}
				},
				"ts": "2017-09-12T09:47:02.981323404Z",
				"call_id": "01BSTQR7Y307WGG00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "21",
				"composed_stage_id": "44",
				"ts": "2017-09-12T09:47:03.080393425Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "21",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "f76d0cf3-040b-43ce-aa39-42ba6d4eac11",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-12T09:47:03.151485646Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "45",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:47:05.650680831Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "45",
				"ts": "2017-09-12T09:47:05.730467356Z",
				"function_id": "myapp/alert"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "46",
				"op": "whenComplete",
				"closure": {
					"blob_id": "bd6cc64b-33e2-49da-b8ad-02237d5795a5",
					"content_type": "application/java-serialized-object",
					"length": "764"
				},
				"dependencies": [
					"45"
				],
				"ts": "2017-09-12T09:47:05.892669474Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "47",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:47:06.487596532Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "47",
				"ts": "2017-09-12T09:47:06.576181745Z",
				"function_id": "myapp/draw"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "48",
				"op": "whenComplete",
				"closure": {
					"blob_id": "d4d6a238-8bcc-4206-85ae-da5fad86e378",
					"content_type": "application/java-serialized-object",
					"length": "763"
				},
				"dependencies": [
					"47"
				],
				"ts": "2017-09-12T09:47:06.733453361Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "49",
				"op": "allOf",
				"closure": null,
				"dependencies": [
					"46",
					"48"
				],
				"ts": "2017-09-12T09:47:06.825273067Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "24",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "49"
						}
					}
				},
				"ts": "2017-09-12T09:47:06.953945576Z",
				"call_id": "01BSTQR8E707WGJ00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "24",
				"composed_stage_id": "49",
				"ts": "2017-09-12T09:47:07.079747187Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "50",
				"op": "completedValue",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:47:07.243622339Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "50",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "5213aac0-8eb9-4e04-98ed-0c62ee4ff8e9",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-12T09:47:07.319367570Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "27",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "50"
						}
					}
				},
				"ts": "2017-09-12T09:47:07.432868998Z",
				"call_id": "01BSTQRCAA07WGM00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "27",
				"composed_stage_id": "50",
				"ts": "2017-09-12T09:47:07.513982043Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "27",
				"result": {
					"successful": true,
					"datum": {
						"blob": {
							"blob_id": "5213aac0-8eb9-4e04-98ed-0c62ee4ff8e9",
							"content_type": "application/java-serialized-object",
							"length": "5"
						}
					}
				},
				"ts": "2017-09-12T09:47:07.618962373Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "51",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:47:09.928030781Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "51",
				"ts": "2017-09-12T09:47:10.005389713Z",
				"function_id": "myapp/alert"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "52",
				"op": "whenComplete",
				"closure": {
					"blob_id": "da98d5de-e07a-4711-9165-010eedbd82d7",
					"content_type": "application/java-serialized-object",
					"length": "764"
				},
				"dependencies": [
					"51"
				],
				"ts": "2017-09-12T09:47:10.176009344Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "53",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:47:10.508484080Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "53",
				"ts": "2017-09-12T09:47:10.581772551Z",
				"function_id": "myapp/draw"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "54",
				"op": "whenComplete",
				"closure": {
					"blob_id": "6f963264-97bf-4dd8-a753-7f8050868c22",
					"content_type": "application/java-serialized-object",
					"length": "763"
				},
				"dependencies": [
					"53"
				],
				"ts": "2017-09-12T09:47:10.751871263Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "55",
				"op": "allOf",
				"closure": null,
				"dependencies": [
					"52",
					"54"
				],
				"ts": "2017-09-12T09:47:10.842508388Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "30",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "55"
						}
					}
				},
				"ts": "2017-09-12T09:47:10.961421080Z",
				"call_id": "01BSTQRCVZ07WGP00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "30",
				"composed_stage_id": "55",
				"ts": "2017-09-12T09:47:11.065532679Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "56",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:47:11.887524423Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "56",
				"ts": "2017-09-12T09:47:11.970171158Z",
				"function_id": "myapp/alert"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "57",
				"op": "whenComplete",
				"closure": {
					"blob_id": "dfdc67ae-ca6f-4d3a-97f9-9c1d5b4c9c24",
					"content_type": "application/java-serialized-object",
					"length": "764"
				},
				"dependencies": [
					"56"
				],
				"ts": "2017-09-12T09:47:12.133588221Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "58",
				"op": "invokeFunction",
				"closure": null,
				"dependencies": [],
				"ts": "2017-09-12T09:47:12.516249790Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "58",
				"ts": "2017-09-12T09:47:12.607669742Z",
				"function_id": "myapp/draw"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "59",
				"op": "whenComplete",
				"closure": {
					"blob_id": "23c19840-b407-482c-aeea-8343e5bc2be6",
					"content_type": "application/java-serialized-object",
					"length": "763"
				},
				"dependencies": [
					"58"
				],
				"ts": "2017-09-12T09:47:12.778794609Z"
			}
		},
		{
			"type": "model.StageAddedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "60",
				"op": "allOf",
				"closure": null,
				"dependencies": [
					"57",
					"59"
				],
				"ts": "2017-09-12T09:47:12.863443212Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "33",
				"result": {
					"successful": true,
					"datum": {
						"stage_ref": {
							"stage_ref": "60"
						}
					}
				},
				"ts": "2017-09-12T09:47:12.989608717Z",
				"call_id": "01BSTQRGAT07WGR00000000000"
			}
		},
		{
			"type": "model.StageComposedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "33",
				"composed_stage_id": "60",
				"ts": "2017-09-12T09:47:13.101273392Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "39",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "ab430a2d-a7d7-4c44-9b4c-95da47ab5962",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQRJ7607WGT00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "298.953317ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:18 GMT"
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
				"ts": "2017-09-12T09:47:18.528337821Z",
				"call_id": "01BSTQRJ7607WGT00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "39",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "ab430a2d-a7d7-4c44-9b4c-95da47ab5962",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQRJ7607WGT00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "298.953317ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:18 GMT"
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
				"ts": "2017-09-12T09:47:18.656680997Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "40",
				"ts": "2017-09-12T09:47:18.778802512Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "41",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "10092c59-1b62-4924-b666-cdfc8b0436d9",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQRQM407WGY00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "319.458751ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:24 GMT"
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
				"ts": "2017-09-12T09:47:24.111898531Z",
				"call_id": "01BSTQRQM407WGY00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "41",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "10092c59-1b62-4924-b666-cdfc8b0436d9",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQRQM407WGY00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "319.458751ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:24 GMT"
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
				"ts": "2017-09-12T09:47:24.235735832Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "42",
				"ts": "2017-09-12T09:47:24.374755902Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "45",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "a3de0691-db71-4727-a004-e36eacef2e79",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQRX4807WH200000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "360.763489ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:30 GMT"
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
				"ts": "2017-09-12T09:47:30.743162479Z",
				"call_id": "01BSTQRX4807WH200000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "45",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "a3de0691-db71-4727-a004-e36eacef2e79",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQRX4807WH200000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "360.763489ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:30 GMT"
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
				"ts": "2017-09-12T09:47:30.847095077Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "46",
				"ts": "2017-09-12T09:47:30.989160051Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "47",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "c5eb64a4-47a4-4bb9-959e-aac90231c164",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQS3HW07WH600000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "212.32732ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:36 GMT"
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
				"ts": "2017-09-12T09:47:36.388462938Z",
				"call_id": "01BSTQS3HW07WH600000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "47",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "c5eb64a4-47a4-4bb9-959e-aac90231c164",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQS3HW07WH600000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "212.32732ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:36 GMT"
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
				"ts": "2017-09-12T09:47:36.519844127Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "48",
				"ts": "2017-09-12T09:47:36.659258357Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "51",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "c92ddab7-2043-44a9-a476-8088bc65bc9a",
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
									"value": "01BSTQS92A07WHA00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "348.21708ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:43 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:47:43.984787485Z",
				"call_id": "01BSTQS92A07WHA00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "51",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "c92ddab7-2043-44a9-a476-8088bc65bc9a",
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
									"value": "01BSTQS92A07WHA00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "348.21708ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:43 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:47:44.085095924Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "52",
				"ts": "2017-09-12T09:47:44.202772296Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "53",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "553c958f-26c4-425d-91cc-8b9b2db46c9f",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "271.514117ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:49 GMT"
								},
								{
									"key": "Content-Length",
									"value": "0"
								},
								{
									"key": "Fn_call_id",
									"value": "01BSTQSGJS07WHE00000000000"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:47:49.440638711Z",
				"call_id": "01BSTQSGJS07WHE00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "53",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "553c958f-26c4-425d-91cc-8b9b2db46c9f",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "271.514117ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:49 GMT"
								},
								{
									"key": "Content-Length",
									"value": "0"
								},
								{
									"key": "Fn_call_id",
									"value": "01BSTQSGJS07WHE00000000000"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:47:49.535162602Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "54",
				"ts": "2017-09-12T09:47:49.655748428Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "56",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "9b9870b6-593d-462e-8eab-a97af37be5d0",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQSNT707WHJ00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "281.596773ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:55 GMT"
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
				"ts": "2017-09-12T09:47:55.883867449Z",
				"call_id": "01BSTQSNT707WHJ00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "56",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "9b9870b6-593d-462e-8eab-a97af37be5d0",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQSNT707WHJ00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "281.596773ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:55 GMT"
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
				"ts": "2017-09-12T09:47:55.990657361Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "57",
				"ts": "2017-09-12T09:47:56.129814678Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "58",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "93af0d92-d87e-496b-8aed-3f1d8b408a82",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:48:00 GMT"
								},
								{
									"key": "Content-Length",
									"value": "0"
								},
								{
									"key": "Fn_call_id",
									"value": "01BSTQSW3J07WHP00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "239.674324ms"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:48:00.695333272Z",
				"call_id": "01BSTQSW3J07WHP00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "58",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "93af0d92-d87e-496b-8aed-3f1d8b408a82",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:48:00 GMT"
								},
								{
									"key": "Content-Length",
									"value": "0"
								},
								{
									"key": "Fn_call_id",
									"value": "01BSTQSW3J07WHP00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "239.674324ms"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:48:00.785345094Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "59",
				"ts": "2017-09-12T09:48:00.925593594Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "40",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:03.837984498Z",
				"call_id": "01BSTQT0SW07WHT00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "40",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "ab430a2d-a7d7-4c44-9b4c-95da47ab5962",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQRJ7607WGT00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "298.953317ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:18 GMT"
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
				"ts": "2017-09-12T09:48:03.955271604Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "42",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:04.083598798Z",
				"call_id": "01BSTQT3W307WHY00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "42",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "10092c59-1b62-4924-b666-cdfc8b0436d9",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQRQM407WGY00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "319.458751ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:24 GMT"
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
				"ts": "2017-09-12T09:48:04.190854590Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "43",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:04.278491260Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "18",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:04.357451607Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "46",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:04.463231644Z",
				"call_id": "01BSTQT43Q07WJ000000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "46",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "a3de0691-db71-4727-a004-e36eacef2e79",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQRX4807WH200000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "360.763489ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:30 GMT"
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
				"ts": "2017-09-12T09:48:04.562435416Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "48",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:04.776855003Z",
				"call_id": "01BSTQT4JM07WJ200000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "48",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "c5eb64a4-47a4-4bb9-959e-aac90231c164",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQS3HW07WH600000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "212.32732ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:36 GMT"
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
				"ts": "2017-09-12T09:48:04.884040074Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "49",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:04.960824946Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "24",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:05.040400606Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "52",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:05.146372130Z",
				"call_id": "01BSTQT4SA07WJ400000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "52",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "c92ddab7-2043-44a9-a476-8088bc65bc9a",
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
									"value": "01BSTQS92A07WHA00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "348.21708ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:43 GMT"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:48:05.262878806Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "54",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:05.367993885Z",
				"call_id": "01BSTQT54V07WJ600000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "54",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "553c958f-26c4-425d-91cc-8b9b2db46c9f",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "271.514117ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:49 GMT"
								},
								{
									"key": "Content-Length",
									"value": "0"
								},
								{
									"key": "Fn_call_id",
									"value": "01BSTQSGJS07WHE00000000000"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:48:05.476170950Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "55",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:05.553226121Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "30",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:05.672555249Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "57",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:05.785531962Z",
				"call_id": "01BSTQT5BS07WJ800000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "57",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "9b9870b6-593d-462e-8eab-a97af37be5d0",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Fn_call_id",
									"value": "01BSTQSNT707WHJ00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "281.596773ms"
								},
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:47:55 GMT"
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
				"ts": "2017-09-12T09:48:05.871916329Z"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "59",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:05.960124762Z",
				"call_id": "01BSTQT5NA07WJA00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "59",
				"result": {
					"successful": true,
					"datum": {
						"http_resp": {
							"body": {
								"blob_id": "93af0d92-d87e-496b-8aed-3f1d8b408a82",
								"content_type": "text/plain; charset=utf-8",
								"length": "0"
							},
							"headers": [
								{
									"key": "Date",
									"value": "Tue, 12 Sep 2017 09:48:00 GMT"
								},
								{
									"key": "Content-Length",
									"value": "0"
								},
								{
									"key": "Fn_call_id",
									"value": "01BSTQSW3J07WHP00000000000"
								},
								{
									"key": "Xxx-Fxlb-Wait",
									"value": "239.674324ms"
								}
							],
							"status_code": 200
						}
					}
				},
				"ts": "2017-09-12T09:48:06.054070097Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "60",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:06.138516825Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "33",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:06.224979006Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "34",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:06.309105491Z"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "2",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:06.389158618Z"
			}
		},
		{
			"type": "model.FaasInvocationStartedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "3",
				"ts": "2017-09-12T09:48:06.470503805Z",
				"function_id": "myapp/flow"
			}
		},
		{
			"type": "model.FaasInvocationCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "3",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:06.813883181Z",
				"call_id": "01BSTQT6GS07WJC00000000000"
			}
		},
		{
			"type": "model.StageCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"stage_id": "3",
				"result": {
					"successful": true,
					"datum": {
						"empty": {}
					}
				},
				"ts": "2017-09-12T09:48:06.896472780Z"
			}
		},
		{
			"type": "model.GraphTerminatingEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"graph_id": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
				"function_id": "myapp/flow",
				"state": "unknown_state",
				"ts": "2017-09-12T09:48:06.968750878Z"
			}
		},
		{
			"type": "model.GraphCompletedEvent",
			"sub": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
			"data": {
				"graph_id": "0aa0f2f6-a6b0-40d5-8fc6-3a9d766dc17d",
				"function_id": "myapp/flow",
				"ts": "2017-09-12T09:48:07.047970135Z"
			}
		}
	]
};
   export {mockActiveGraphEvents,mockSubscriptionData} ;
