package com.newloginsproject

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.content.Intent
import com.newloginsproject.MainActivity

class SplashActivity : AppCompatActivity() {

   override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val intent = Intent(this, MainActivity::class.java)
       
        startActivity(intent)
        finish()
    }
}