var objc = JSON.parse($response.body);

objc.data.unlimited_prompts = true;
objc.data.is_in_free_trial = true;
objc.data.subscription_type_id = 74361553;
objc.data.subscription_id = 74361553;

$done({ body: JSON.stringify(objc) });
