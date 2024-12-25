`git clone https://github.com/mnestorov/php-obfuscator.git`
`cd php-obfuscator`
`git clone https://github.com/pk-fr/yakpro-po.git`
`cd yakpro-po`
`git clone https://github.com/nikic/PHP-Parser.git` // clone the version 4.x

go to  php-obfuscator > yakpro-po > yakpro-po.cnf and change the following base on your preferred:
```
$conf->parser_mode = 'PREFER_PHP7'; 

$conf->obfuscate_constant_name = false;         
$conf->obfuscate_variable_name = false;        
$conf->obfuscate_function_name = false;        
$conf->obfuscate_class_name = false;         
$conf->obfuscate_interface_name = false;         
$conf->obfuscate_trait_name = false;         
$conf->obfuscate_class_constant_name = false;        
$conf->obfuscate_property_name = false;        
$conf->obfuscate_method_name = false;         
$conf->obfuscate_namespace_name = false;         
$conf->obfuscate_label_name = false;    

// User comment to insert inside each obfuscated file
$conf->user_comment = false;
```

run this command to create a virtual environment folder
`python3 -m venv env`

activate the virtual environment
`source env/bin/activate`

install the dependecies of requiredments
`pip install -r requirements.txt`

to activate:
`deactivate`

go to the src folder inside the obfuscator/src and put the project there

and run the following in the terminal:
`php /Users/jaybayron/Herd/Github/obfuscator-docs/php-obfuscator/obfuscator/yakpro-po/yakpro-po.php -o /Users/jaybayron/Herd/Github/obfuscator-docs/php-obfuscator/obfuscator/output/ /Users/jaybayron/Herd/Github/obfuscator-docs/php-obfuscator/obfuscator/src/`