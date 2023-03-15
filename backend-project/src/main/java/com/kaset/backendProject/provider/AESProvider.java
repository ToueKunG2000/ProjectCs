package com.kaset.backendProject.provider;

import jakarta.websocket.DecodeException;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.security.*;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.Base64;

@Component
@Log4j2
public class AESProvider {
//
//    private static final Charset CHARSET = StandardCharsets.UTF_8;
//
//
//    public static IvParameterSpec generateIv() {
//        byte[] iv = iv_Key.getBytes(CHARSET);
//        return new IvParameterSpec(iv);
//    }
//
//
//    private SecretKeySpec makeSecretKey() throws NoSuchAlgorithmException {
//        MessageDigest md = MessageDigest.getInstance("SHA-256");
//        byte[] key = md.digest(secret_Key.getBytes(CHARSET));
//        return new SecretKeySpec(key, "AES");
//    }
//
//    public String encrypt(String input) throws Exception{
//        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
//        cipher.init(Cipher.ENCRYPT_MODE, makeSecretKey(), generateIv());
//        return Base64.getEncoder()
//                    .encodeToString(cipher.doFinal(input.getBytes()));
//    }
//
//    public String decrypt(String input) throws Exception {
//        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
//        cipher.init(Cipher.DECRYPT_MODE, makeSecretKey(), generateIv());
//        return new String(cipher.doFinal(Base64.getDecoder().decode(input)));
//    }

}
