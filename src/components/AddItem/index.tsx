import React from "react";
import Button from "@material-ui/core/Button";
import Stack from "@material-ui/core/Stack";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const AddItem = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          TODO LIST
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={2}
        >
          <TextField
            label="Novo Item"
            variant="outlined"
            size="small"
            fullWidth
          />
          <Button variant="outlined" size="large">
            Adicionar
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default AddItem;
