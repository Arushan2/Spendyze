import React from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function TermsAndConditions() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        py: 4,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Paper sx={{ width: "100%", maxWidth: 800, p: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Spendyze Terms and Conditions
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to Spendyze, your premier expense management and AI consultation app.
          These Terms and Conditions ("Terms") govern your use of our application and services.
          By accessing or using Spendyze, you agree to comply with and be bound by these Terms.
          If you do not agree with any part of these Terms, please do not use our services.
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Acceptance of Terms
        </Typography>
        <Typography variant="body1" paragraph>
          By registering for and using Spendyze, you acknowledge that you have read, understood,
          and agree to be bound by these Terms. Your continued use of the app signifies your acceptance
          of any future modifications to these Terms.
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. Use of the App
        </Typography>
        <Typography variant="body1" paragraph>
          Spendyze is designed to help you manage your expenses and provide personalized AI-driven
          financial advice. You agree to use the app solely for lawful purposes and in a manner that does
          not infringe the rights of others or restrict their use and enjoyment of the app.
        </Typography>

        <Typography variant="h6" gutterBottom>
          3. User Account and Security
        </Typography>
        <Typography variant="body1" paragraph>
          To access certain features of Spendyze, you must create an account. You are responsible for
          maintaining the confidentiality of your account credentials and for all activities that occur under
          your account. Please notify us immediately if you suspect any unauthorized use.
        </Typography>

        <Typography variant="h6" gutterBottom>
          4. Privacy and Data Security
        </Typography>
        <Typography variant="body1" paragraph>
          Your privacy is important to us. Please review our Privacy Policy to learn how we collect, use,
          and safeguard your personal information. By using Spendyze, you consent to the data practices
          described in our Privacy Policy.
        </Typography>

        <Typography variant="h6" gutterBottom>
          5. Intellectual Property
        </Typography>
        <Typography variant="body1" paragraph>
          All content, features, and functionality within Spendyze—including text, graphics, logos, and software—
          are the exclusive property of Spendyze or its licensors and are protected by intellectual property laws.
          You agree not to reproduce, distribute, or create derivative works without our express written permission.
        </Typography>

        <Typography variant="h6" gutterBottom>
          6. Disclaimer of Warranties
        </Typography>
        <Typography variant="body1" paragraph>
          Spendyze is provided on an "as is" and "as available" basis. We make no warranties, express or implied,
          regarding the reliability, accuracy, or suitability of the app. While we strive to maintain a secure
          and error-free experience, we do not guarantee uninterrupted or flawless service.
        </Typography>

        <Typography variant="h6" gutterBottom>
          7. Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph>
          In no event shall Spendyze, its affiliates, or licensors be liable for any indirect, incidental,
          special, consequential, or punitive damages—including, without limitation, loss of profits or data—
          arising from your use of the app, even if advised of the possibility of such damages.
        </Typography>

        <Typography variant="h6" gutterBottom>
          8. Indemnification
        </Typography>
        <Typography variant="body1" paragraph>
          You agree to indemnify and hold harmless Spendyze, its affiliates, and its licensors from any claims,
          losses, liabilities, damages, or expenses arising out of or related to your use of the app or violation
          of these Terms.
        </Typography>

        <Typography variant="h6" gutterBottom>
          9. Termination
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to suspend or terminate your access to Spendyze, without prior notice, for any
          behavior that we believe violates these Terms or is harmful to other users or the app.
        </Typography>

        <Typography variant="h6" gutterBottom>
          10. Modifications to the Terms
        </Typography>
        <Typography variant="body1" paragraph>
          We may update these Terms from time to time. The most current version will be posted within the app.
          Your continued use of Spendyze after any changes signifies your acceptance of the revised Terms.
        </Typography>

        <Typography variant="h6" gutterBottom>
          11. Governing Law and Jurisdiction
        </Typography>
        <Typography variant="body1" paragraph>
          These Terms shall be governed by and construed in accordance with the laws applicable in our area of
          operations. Any disputes arising from these Terms shall be resolved in the courts located at Forest Junction,
          Passara Road, Badulla.
        </Typography>

        <Typography variant="h6" gutterBottom>
          12. Contact Information
        </Typography>
        <Typography variant="body1" paragraph>
          For any questions or concerns regarding these Terms, please contact us at:
          <br />
          <strong>Address:</strong> Forest Junction, Passara Road, Badulla
          <br />
          <strong>Email:</strong> rockarush2@gmail.com
        </Typography>
      </Paper>

      <Button variant="contained" onClick={() => navigate(-1)}>
        Back
      </Button>
    </Box>
  );
}

export default TermsAndConditions;
