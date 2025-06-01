package com.chips.deploy;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import java.io.IOException;
import java.io.InputStream;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        try {
            InputStream input = getAssets().open("core.protocol.chipx");
            int size = input.available();
            byte[] buffer = new byte[size];
            input.read(buffer);
            input.close();
            String chipxCode = new String(buffer);
            // TODO: Implement chipx interpreter logic here
            System.out.println(chipxCode);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}