# SanberCode_TestApi
This is result for Quality Assurance Engineer - Test Api


# Test API_Cypress

1. Open your terminal, entry your file and type npx cypress open </br> </br>
![Npx cypress open](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/05e36f50-c21d-4fe4-b972-b9b9d9f6f5a8) </br> </br>
2. Select E2E Testing </br> </br>
![Welcome](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/46a3694f-887e-4898-8a99-204fb1925256) </br> </br>
3. Select your browser </br> </br>
![choose](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/739e100d-5f96-4bf7-86b3-8e9a5fb85399) </br> </br>

</br> </br>
</br> </br>
</br> </br>

# CRUD</br> </br>

# 1. Create 
add user data </br></br>
![Screenshot 2023-10-05 224637](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/13f3daca-707a-4fec-b8d4-5b1c74377198)

Step Register</br> </br>
![Register](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/2877db13-b124-491b-8150-a8ea2fa00544)
Step Login </br> </br>
![Login](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/1f5e369c-5c98-462a-a188-e4897d5c7b70)

Negative case </br>
1. Error message for validation </br>
![Error message for validation (1)](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/c96776f1-6d4b-4763-89e6-8d7ea4b644d3)</br> </br>
2. Error message for invalid email </br> 
   ![Error message for invalid email (2)](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/ca4bbc32-9640-401e-a861-dc881954af6f)</br> </br>
3. Error message for empty email </br> 
   ![Error message for empty email (3)](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/beebb97c-7877-41a0-a9a5-56cb9a417387) </br> </br>
5. Error message for empty password</br>
   ![Error message for empty password(4)](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/61cc7fe9-75e1-4493-b1a2-075b924fd374) </br> </br>
   
Positive case </br>
1. Return correct data</br>
   ![Return correct current data (5)](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/5afc654d-5dd8-4558-8469-758b86979f3d)</br> </br>

# 2. Read
Read user data </br></br>
![Screenshot 2023-10-06 002310](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/985b9841-a39e-48d3-bb1e-b764cfcc5ddf)

Step Register</br> </br>
![Register](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/7abff650-0d32-4ad7-983e-174cd2d2d743)
Step Login </br> </br>
![Login](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/3ec77b72-40bb-4ea6-ae8d-c98c05cd9786)

Negative case </br>
1. Error message for Unauthorized No Token </br>
![Unauthorized no send token (1)](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/d202da8f-490b-46a7-bebf-e6d0376b7f4e)</br> </br>

Positive case </br>
1. Return get List User</br>
   ![Get User list (2)](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/965b2ac6-c876-4304-840f-b226ff2505e7)</br> </br>

# 3. Update
Update user data </br></br>
![Screenshot 2023-10-06 002323](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/cf6b36b7-3038-4206-b8ad-aea9acd91837)

Step Register</br> </br>
![Register](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/55f2cd25-c68a-4686-9242-b3dd6e73a31e)
Step Login </br> </br>
![Login](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/a8934358-a840-457b-b39b-ea896696f882)

Negative case </br>
1. Error message for Unauthorized No Token </br>
![Unauthorized no send token (1)](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/247db162-54d4-4fee-a70e-cadec8a3c478)</br> </br>
2. Error message for User Not Found No Token </br>
![User Not fout (2)](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/c35b65a5-55d8-45e4-9b51-c3be2616198b)

Positive case </br>
1. Return Success Update User</br>
![Update success](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/1973d206-6497-45e1-9350-ac40edd55b88)</br> </br>

# 4. Delete
Delete user data </br></br>
![Screenshot 2023-10-06 002257](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/c0120a15-a83e-4180-82de-6d501242ef0e)

Step Register</br> </br>
![Register](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/63f194c8-abe4-45dd-8b16-408d943c48e7)
Step Login </br> </br>
![Login](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/d7517606-82a8-4720-985a-8fd761244741)

Negative case </br>
1. Error message for Unauthorized No Token </br>
![Unauthorized](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/8e8fe4c3-3331-49e0-b3e0-cfa9882e8308)</br> </br>
2. Error message for User Not Found No Token </br>
![User not found](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/ee384840-613a-4269-8796-f2543bd8fb42)

Positive case </br>
1. Return Success Delete  User</br>
![Delete Success](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/007dda8b-7f25-43a5-9329-6dca88837913)</br> </br>

Before Delete User </br>
![Before Delete](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/e0fa10ea-6296-4f32-9795-d436eb60398a)</br> </br>

After Delete User</br>
![After Delete](https://github.com/Zaenal64/SanberCode_TestApi/assets/79000926/07044374-6726-48b4-8088-b43d27652e7a)

