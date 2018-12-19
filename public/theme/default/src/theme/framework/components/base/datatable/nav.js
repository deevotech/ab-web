
(function($){
	$.fn.zPaging = function(options){

		console.log("Hi zPaging");	

		var defaults = {
            'pageShow'		    : 0,
            'itemOnPage'		: 0,
            'currentPage'       : 0,
            'totalItem'	        : 0,
            'data'              : '',
            'sort'              :''
        };

    options = $.extend(defaults,options);
    
        init();

        function init(){
         
            var btnpages = pages(options.totalItem,options.currentPage,options.itemOnPage,options.pageShow);
            var result = loadData(options.currentPage,options.itemOnPage,options.data);

            $('#rows').empty();
            $('#rows').append(result);

            $('.pagination').empty();
            $('.pagination').append(btnpages);

            $('.row-title').on("click",function(e){
               
                var field = $(this).attr('id');
           
                if(options.sort != field){

                    $('thead>tr>th').each(function (key, val) {
                        $(this).removeClass('sorting_asc');
                        $(this).removeClass('sorting_desc');
                    });
                    
                    $(this).addClass('sorting_asc');

                    sortdata(field, -1 , options.data)

                    options.sort=field;
                    
                }else{
                    
                    if( $(this).hasClass('sorting_asc')==true){
                        $(this).removeClass('sorting_asc');
                        $(this).addClass('sorting_desc');
                        sortdata(field, 1 , options.data);
                    }else{
                        $(this).removeClass('sorting_desc');
                        $(this).addClass('sorting_asc');
                        sortdata(field, -1 , options.data);
                    }

                }
              
                e.preventDefault();
                e.stopImmediatePropagation();
            });

            $('.btn-edit').on("click",function(e){
                edit($(this).attr('id'));
                e.preventDefault();
                e.stopImmediatePropagation();
            });

            $('#btn-addnew').on("click",function(e){
                add();
                e.preventDefault();
                e.stopImmediatePropagation();
            });

            $('.btn-edel').click(function(){
                del($(this).attr('id'));
                e.preventDefault();
                e.stopImmediatePropagation();
       
            });

            $('.page-link').on("click",function(e){
                
                var z=$(this).attr('id');
                restart(z);
    
                e.preventDefault();
                e.stopImmediatePropagation();
            });
            
        }

        function sortdata(field, sorttype, data){

            data.sort(function(a,b){

                if(sorttype==1){
                    if(typeof a[field] != 'number'){
                        var aa = a[field].toUpperCase();
                        var bb = b[field].toUpperCase();
                    }else{
                        var aa = a[field];
                        var bb = b[field];
                    }
                }else{
                    if(typeof a[field] != 'number'){
                        var bb = a[field].toUpperCase();
                        var aa = b[field].toUpperCase();
                    }else{
                        var bb = a[field];
                        var aa = b[field];
                    }
                }

                var comparison = 0;
        
                if (aa > bb) {
                  comparison = -1;
                } else if (aa < bb) {
                  comparison = 1;
                }
                return comparison;
               
            });

            init();

        }

        function add(){

            $('#form-post').attr('action','/products/add');

            $( "input[name='id']" ).val('');
            $( "input[name='title']" ).val('');
            $( "input[name='sku']" ).val('');
            $( "input[name='brand']" ).val('');
            $( "input[name='regular_price']" ).val('');
            $( "input[name='sale_price']" ).val('');

        }

        function edit(elemen){

            var id=$('.row-'+elemen).find('.row-id').text();
            var title=$('.row-'+elemen).find('.row-name').text();
            var sku=$('.row-'+elemen).find('.row-sku').text();
            var brand=$('.row-'+elemen).find('.row-brand').text();
            var regular_price=$('.row-'+elemen).find('.row-regular_price').text();
            var sale_price=$('.row-'+elemen).find('.row-sale_price').text();


            $("#myModal").modal();
            $('#form-post').attr('action','/products/edit');

            $( "input[name='id']" ).val(id);
            $( "input[name='title']" ).val(title);
            $( "input[name='sku']" ).val(sku);
            $( "input[name='brand']" ).val(brand);
            $( "input[name='regular_price']" ).val(regular_price);
            $( "input[name='sale_price']" ).val(sale_price);

        }

        function del(elemen){

            var id = $('.row-'+elemen).find('.row-id').text();
            var r = elemen;

            if(confirm("Bạn có chắc muốn xóa đối tượng " + id + " ?") == true){

                $.ajax({
                    url:'/products/delete',
                    type: "POST",
                    data:{
                        id: id
                    },

                    success:function(response){
                        console.log(response);
                        if(response && typeof response == "object"){
                            $('.row-'+ r ) .remove();
                        }else{
                            alert("Không thực hiện được !");
                            console.log(typeof response);
                        }
        
                    },
                    error:function(error){
                        console.log(error);
                    }
                });

            }

        }

        function restart(id){

                var newdata=loadData(id,options.itemOnPage,options.data);
                var btncurrent = pages(options.totalItem,id,options.itemOnPage,options.pageShow);

                $('#rows').empty();
                $('#rows').append(newdata);

                $('.pagination').empty();
                $('.pagination').append(btncurrent);

                $('.page-link').on("click",function(e){
                    var z=$(this).attr('id');
                    restart(z);
                    e.preventDefault();
                    e.stopImmediatePropagation();
                });

                $('.btn-edit').on("click",function(e){
                    edit($(this).attr('id'));
                    e.preventDefault();
                    e.stopImmediatePropagation();
                });
    
                $('#btn-addnew').on("click",function(e){
                    add();
                    e.preventDefault();
                    e.stopImmediatePropagation();
                });
    
                $('.btn-edel').click(function(){
                    del($(this).attr('id'));
                    e.preventDefault();
                    e.stopImmediatePropagation();
           
                });
        }

        function loadData(currentPage,itemOnPage,data){

            var startpoint = (currentPage-1) * itemOnPage;
            var endpoint= startpoint + (itemOnPage-1);
            var partdata='';

            for(var i = startpoint; i <= endpoint; i++){
                partdata +='<tr class="row-'+i+'">';
                    partdata +='<th class= "row-id">'+ data[i]['_id']+'</th>';
                    partdata +='<th class= "row-name">'+ data[i]['title'] +'</th>';
                    partdata +='<th class= "row-sku">'+ data[i]['sku'] +'</th>';
                    partdata +='<th class= "row-brand">'+ data[i]['brand'] +'</th>';
                    partdata +='<th class= "row-regular_price">'+ data[i]['regular_price'] +'</th>';
    
                    if(typeof data[i]['sale_price'] != 'undefined'){
                        partdata +='<th class= "row-sale_price">'+ data[i]['sale_price'] +'</th>';
                    }else{
                        partdata +='<th class= "row-sale_price">0.00</th>';
                    }
    
                    partdata +='<th class= "row-btn"><button title="Edit the asset" type="button" id="'+ i +'" class="btn btn-warning btn-edit"> Edit</button>';
                    partdata +='<button title="Edit the asset" type="button" id="' + i + '"class="btn btn-danger btn-edel"> Delete</button></th>';
                partdata +='</tr>';
            }

            return partdata;
        }

        function pages(totalItem,currentPage,itemOnPage,pageShow){

            var paginationHTML 	= '';
            var listPages ='';
            var start ='';
            var prev ='';
            var next ='';
            var end ='';
            var startPage ='';
            var endPage ='';

            totalPage = Math.ceil(totalItem / itemOnPage);

            if(totalPage > 1){
                

                if(currentPage > 1){
                    start += "<li class='page-item'><a class='page-link' id='1'>Start</a></li>";
                    prev += "<li class='page-item'><a class='page-link' id='"+(Number(currentPage)-1)+"'>«</a></li>";
                }

                if(currentPage < totalPage){
                    next += "<li class='page-item'><a class='page-link' id='"+(Number(currentPage)+1)+"'>»</a></li>";
                    end  += "<li class='page-item'><a class='page-link' id='"+totalPage+"'>End</a></li>";
                }

                if(pageShow < totalPage){

                    if(pageShow == 1){

                        startPage = 1;
                        endPage = pageShow;
                        
                    }else if(currentPage == totalPage){

                        startPage = totalPage - pageShow + 1;
                        endPage = totalPage;
                        
                    }else{
                        
                        startPage = currentPage - (pageShow-1)/2;
                        endPage = currentPage + (pageShow-1)/2;
                        
                        if(startPage < 1){
                            endPage = endPage + 1;  
                            startPage = 1; 
                        }
                        
                        if(endPage > totalPage){

                            endPage = totalPage; 
                            startPage = endPage - pageShow + 1;

                        }
                    }
                }else{
                    startPage = 1;
                    endPage = totalPage;
                }
            }

            for(var i = startPage; i <= endPage; i++){
                if(i == currentPage) {
                    listPages += "<li class='page-item active'><a class='page-link' id='"+i+"' href='#'>"+i+"</a></li>";
                }else{
                    listPages += "<li class='page-item'><a class='page-link' id='"+i+"' href='#'>"+i+"</a></li>";
                }
            }

            return paginationHTML = start+prev+listPages+next+end;
        
        }
    
    }
})(jQuery);

// $(document).ready(function(e) {

//     // function reload(call){
//     //     $.ajax({
//     //         url: 'http://localhost:9000/api/products',
//     //         type: "GET",
//     //         dataType: "json",
    
//     //         success:function(response){
//     //             call(response);
//     //         }
//     //     });
//     // }
    
//     // reload(function(data){ 
//         var data="<%-result%>";
//         console.log(data);
//         var obj = {
//                 // 'pageShow'		    : 2,
//                 // 'itemOnPage'		: 3,
//                 // 'currentPage'       : 1,
//                 // 'totalItem'	        : JSON.parse(data).length,
//                 // 'data'              : JSON.parse(data)
//             };

//             $(".table-responsive").zPaging(obj);
//     // });


// });