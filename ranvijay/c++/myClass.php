<?php

class myClassA {
____public $message = '';

    public function setMessage($msg) {
        $this->message = $msg;
        $this->getMessage();
    }

    protected function getMessage() {
        echo $this->message;
    }
}

class myClassB extends myClassA {
________ic function showMessage($msg = null) {
        if (!empty($msg) && isset($msg)) {
________________s->message = "<h1><b>Hi there, here is the message : " . $msg . "</b></h1>";
            $this->getMessage();
        } else {
            return false;
        }
    }
}

ini_set('error_reporting', E_ALL);
$objClassB = new myClassB;
$objClassB->showMessage('Hola!');