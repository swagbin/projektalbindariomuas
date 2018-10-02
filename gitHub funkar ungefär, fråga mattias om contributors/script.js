$(document).ready(function () {
	$.getJSON('https://github-trending-api.now.sh/repositories?language=javascript&sort=stars&order=desc&since=weekly',
		function (data){
    		var javascript_trends = "";
			for(var i=0; i<5; i++){
				javascript_trends += '<tr>';
				javascript_trends += '<td> <a href='+data[i].url +'>'+ data[i].name+'</a></td>';
				javascript_trends += '<td> <a href='+'https://'+'github.com/'+data[i].author+'>'+data[i].author+'</a></td>';
				javascript_trends += '<td>' + data[i].currentPeriodStars+'</td>';
			}
			$('#tabellen').append(javascript_trends);
		}
	);
    $.getJSON('https://github-trending-api.now.sh/repositories?language=css&sort=stars&order=desc&since=weekly',
		function(output) {
			var css_trends = "";
			for(var i=0; i<5; i++){
				css_trends += `<tr><td><a href="${output[i].url}">${output[i].name}</a></td>`;
				css_trends += `<td><a href="https://github.com/${output[i].author}" target="_blank"> ${output[i].author}</a></td>`;
				css_trends += `<td>${output[i].currentPeriodStars}</td></tr>`;
				
			} 
			$('#table').append(css_trends);
		}
	);
	// url=`https://api.github.com/repos/Staggen/www_project_HT18/collaborators`;
	// fetch(url,{
	// 	method:'get',
	// 	headers:{
	// 		'Content-Type':'application/vnd.github.v3+json;charset=UTF-8',
	// 	}
	// })
	// .then(response => {
	// 	return response.json();
	// })
	// .then(response => {
	// 	console.log(response);
	// })
	// .catch(error => console.error)
});

