# Nội dung bên dưới được thực hiện trên hệ điều hành Ubuntu
	
# Hướng dẫn cài đặt
	//tạo thư mục chứa code dự án
		mkdir collection-template
		
	//di chuyển vào thư mục và tải toàn bộ source code bằng lệnh 
		cd collection-template
		git clone https://github.com/deevotech/afscbp-web
		
	//di chuyển vào thư mục afscbp-web
    	cd afscbp-web
    
    //cài đặt Nodejs -> nếu đã có sẵn thì bỏ qua bước này
	    	sudo apt-get update
	    	sudo apt-get install nodejs
		    sudo apt-get install npm
	    	nodejs -v
    
 	//cài đặt Express
		npm install express --save
		npm start			//khởi động Node JS
		
# Cài đặt Node JS service
	//tạo một file .service trên hệ thống
		cd /etc/systemd/system/
		touch collection-template.service
    
	//khai báo thông tin
		[Unit]
		Description=Node.js Collection Template

		[Service]
		PIDFile=/tmp/collection-template-3000.pid
		User=ubuntu			//nhập user máy
		Group=root				
		Restart=always				
		KillSignal=SIGQUIT
		WorkingDirectory=/home/ubuntu/collection-template/afscbp-web				//đường dẫn tới thư mục chứa code
		ExecStart=/usr/bin/node /home/ubuntu/collection-template/afscbp-web/bin/www		//đường dẫn tới file khai báo server

		[Install]
		WantedBy=multi-user.target
		
	//lưu lại và khởi động
		systemctl daemon-reload		//reload hệ thống
		systemctl enable demo_lina	//khởi động service
		systemctl status demo_lina 	//kiểm tra trạng thái
	
