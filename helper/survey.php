<?php

namespace PG\API;



add_action('rest_api_init', function () {
	register_rest_route('pg/', 'survey-status', [
		'methods' => 'GET',
		'callback' => __NAMESPACE__.'\\check_survey_status',
		'permission_callback' => __NAMESPACE__.'\\logged_content'
	]);

	register_rest_route('pg/', 'surveyrdone', [
		'methods' => 'POST',
		'callback' => __NAMESPACE__.'\\surveyrdone',
		'permission_callback' => __NAMESPACE__.'\\logged_content'
	]);
});



function surveyrdone(\WP_REST_Request $request) 
{
	$b_status = FALSE;
    $s_message = '';
    
    if(update_user_meta(get_current_user_id(), 'survey_status', true))
    {
        $b_status = TRUE;
        $s_message = 'Survey successfully done.';
    }
    
    return response($b_status, $s_message);
}

function check_survey_status(\WP_REST_Request $request) {

    $user_id = get_current_user_id();
    $is_survey_done = get_user_meta($user_id, 'survey_status', true) ? true : false;

	if(!$is_survey_done) {
		$is_survey_done = FALSE;
	}

	return response(true, '', ['survey_status' => $is_survey_done]);
   
}