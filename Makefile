usage:
	echo "make serv-python | link"

serve-python:
	sudo python -m SimpleHTTPServer 80
	
	
link:
	sudo ln -sTf /home/korbenzhang/dev/github.com/mabetle/mps /public


