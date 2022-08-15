#!/bin/bash

get_swagger_ui :
	wget https://github.com/swagger-api/swagger-ui/archive/v4.13.2.tar.gz ;
	tar -zxvf v4.13.2.tar.gz

create_ui :
	mkdir -p docs/swagger_ui/
	cp -R swagger-ui-4.13.2/dist/* docs/swagger_ui/
