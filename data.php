<?php

	header('Content-Type:application/json; charset=utf-8');

	// 读取json数据
	// 正常工作中是从数据库里取的
	$data = file_get_contents('data.json');

	// 转换成PHP数组
	$data = json_decode($data);

	// 根据页码计算offset
	$page = $_POST['page'];

	// 每页10条
	// 1 1-10
	// 2 11-20
	// 3 21-30

	// ($page - 1) * 10 0 10 20

	// 每页的数据计算每页数据的"起点""
	$offset = ($page - 1) * 10;

	// 截取10条数据
	$result = array_slice($data, $offset, 10);

	// 翻页
	$page++;

	echo json_encode(array('page'=>$page, 'items'=>$result));

	sleep(1);

?>