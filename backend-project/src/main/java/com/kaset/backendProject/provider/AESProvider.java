package com.kaset.backendProject.provider;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.*;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.Base64;

@Component
@Log4j2
public class AESProvider {

    private static final Charset CHARSET = StandardCharsets.UTF_8;

//    @Value("${aes.secret}")
//    private String SECRET_KEY;
//
//    @Value("${aes.iv}")
//    private String IV_SPEC;
//
//    public static IvParameterSpec generateIv(){
//        return new IvParameterSpec(IV_SPEC.getBytes(CHARSET));
//    }
//
//    public static SecretKey generateKey(int n) throws NoSuchAlgorithmException {
//        KeyGenerator keyGenerator = KeyGenerator.getInstance("AES");
//        keyGenerator.init(n);
//        SecretKey key = keyGenerator.generateKey();
//        return key;
//    }
//
//    public static SecretKey getSecretKeyFromPassword() throws NoSuchAlgorithmException, InvalidKeySpecException {
//        SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
//        KeySpec spec = new PBEKeySpec(SECRET_KEY.getBytes(CHARSET), IV_SPEC.getBytes(), 65536, 256);
//        SecretKey secretKey = new SecretKeySpec(factory.generateSecret(spec).getEncoded(), "AES");
//        return secretKey;
//    }
//
//    public static String encrypt(String algorithm, String input, SecretKey key, IvParameterSpec iv)
//            throws NoSuchPaddingException, NoSuchAlgorithmException, InvalidAlgorithmParameterException,
//            InvalidKeyException, BadPaddingException, IllegalBlockSizeException
//            {
//        Cipher cipher = Cipher.getInstance(algorithm);
//        cipher.init(Cipher.ENCRYPT_MODE, key, iv);
//        byte[] cipherText = cipher.doFinal(input.getBytes());
//        return Base64.getEncoder().encodeToString(cipherText);
//    }
//
//    public static String decrypt(String algorithm, String cipherText, SecretKey key, IvParameterSpec iv)
//            throws NoSuchPaddingException, NoSuchAlgorithmException,
//            InvalidAlgorithmParameterException, InvalidKeyException,
//            BadPaddingException, IllegalBlockSizeException{
//        Cipher cipher = Cipher.getInstance(algorithm);
//        cipher.init(Cipher.DECRYPT_MODE,key,iv);
//        byte[] text = cipher.doFinal(Base64.getDecoder().decode(cipherText));
//        return new String(text);
//    }

}
