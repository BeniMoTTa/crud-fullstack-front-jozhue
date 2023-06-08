import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  @media (min-width: 375px) {
    .main-choice {
      width: 100%;
      height: 90%;
      background: rgba(51, 51, 51, 0.6);
      border-radius: 10px;
      backdrop-filter: blur(5px);
    }
    .painel-header {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      position: relative;

      h3 {
        position: absolute;
        top: 20px;
        left: 30%;
        font-size: 30px;
        font-family: "Righteous", cursive;
        background-image: linear-gradient(to right, #d8315b 0%, #072ac8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bolder;
        text-shadow: 0px 0px 30px rgba(555, 555, 999, 0.6);
      }
    }
    .create {
      width: 50px;
      height: 50px;
      margin-top: 20px;
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      border-radius: 4px;
      border: none;
      background-color: transparent;
      color: var(--color-gray-300);
    }

    .create:hover {
      transform: scale(1.5);
    }
    .create::before {
      content: "Create";
      position: absolute;
      top: 40px;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      color: black;
      font-size: 15px;
      font-weight: 600;
      font-family: "Righteous", cursive;
      padding: 5px;
      border-radius: 5px;
      opacity: 0;
    }

    .create:hover::before {
      opacity: 1;
    }

    .area-search {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 15px;
      height: fit-content;
      .search {
        border: 2px solid black;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        height: 35px;
        align-items: center;
        width: 43%;
        padding-right: 8px;
        background-color: #dcdcdc;
        input {
          border: none;
          width: 95%;
          height: 100%;
          padding-left: 15px;
          border-radius: 20px;
          background-color: #dcdcdc;
          font-size: 18px;
          font-weight: 400;
          font-family: "Righteous", cursive;
          color: black;
        }
        input::placeholder {
          font-size: 18px;
          font-weight: 400;
          font-family: "Righteous", cursive;
          color: black;
        }
        span {
          width: 10%;
          font-size: 30px;
          margin-left: 10px;
          margin-top: 10px;
          color: black;
        }
      }
    }
    .contacts-painel {
      width: 100%;
      padding: 5%;
      padding-bottom: 15px;
      background-color: transparent;
      height: 80%;

      ul {
        overflow-y: auto;
        height: 100%;
      }

      li {
        display: flex;
        list-style: none;
        border: none;
        border-radius: 20px;
        padding-left: 15px;
        height: 115px;
        align-items: center;
        margin-top: 25px;
        position: relative;
        width: 90%;
        background-color: white;
        opacity: 1;

        img {
          width: 80px;
          border-radius: 50%;
          height: 80px;
          box-shadow: -5px 5px 5px grey;
        }

        .btn-contact {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;

          button {
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            border: 1px solid;
            position: relative;
          }
          .delete::before {
            content: "Delete";
            position: absolute;
            top: -2px;
            left: 55px;
            transform: translateX(-50%);
            background-color: white;
            color: black;
            font-size: 15px;
            font-weight: 400;
            font-family: "Righteous", cursive;
            padding: 5px;
            border-radius: 5px;
            opacity: 0;
          }

          .delete:hover::before {
            opacity: 1;
          }
          .edit::before {
            content: "Edit";
            position: absolute;
            top: -2px;
            left: 55px;
            transform: translateX(-50%);
            background-color: white;
            color: black;
            font-size: 15px;
            font-weight: 400;
            font-family: "Righteous", cursive;
            padding: 5px;
            border-radius: 5px;
            opacity: 0;
          }

          .edit:hover::before {
            opacity: 1;
          }
          button:hover {
            transform: scale(1.2);
          }
        }
      }
      ul::-webkit-scrollbar {
        width: 5px;
      }

      ul::-webkit-scrollbar-track {
        background-color: #f1f1f1;
      }

      ul::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 20px;
      }

      ul::-webkit-scrollbar-thumb:hover {
        background-color: #555;
      }
      .area-info-contact {
        margin-left: 20px;

        h4 {
          font-size: 20pxpx;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 600;
          color: var(--color-gray-800);
        }

        .info-contact {
          display: flex;
          gap: 12px;

          .allign {
            display: flex;
            flex-direction: column;
          }
          p {
            font-size: 1rem;
            font-weight: 600;
            color: var(--color-gray-800);
          }
          .text-info {
            font-size: 1.2rem;
            color: var(--color-gray-700);
          }

          @media (max-width: 500px) {
            .email {
              display: none;
            }
            .city {
              display: none;
            }
            #email {
              display: none;
            }
            #city {
              display: none;
            }
          }
        }
      }
    }
  }

  @media (min-width: 599px) {
    .main-choice {
      width: 100%;
      height: 90%;
      background: rgba(51, 51, 51, 0.6);
      border-radius: 10px;
      backdrop-filter: blur(5px);
    }

    .painel-header {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      position: relative;

      h3 {
        position: absolute;
        top: 20px;
        left: 40%;
        font-size: 40px;
        font-family: "Righteous", cursive;
        background-image: linear-gradient(to right, #d8315b 0%, #072ac8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bolder;
      }
    }
    .create {
      width: 50px;
      height: 50px;
      margin-top: 20px;
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      border-radius: 4px;
      border: none;
      background-color: transparent;
      color: var(--color-gray-300);
    }

    .create:hover {
      transform: scale(1.5);
    }
    .create::before {
      content: "Create";
      position: absolute;
      top: 40px;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      color: black;
      font-size: 15px;
      font-weight: 600;
      font-family: "Righteous", cursive;
      padding: 5px;
      border-radius: 5px;
      opacity: 0;
    }

    .create:hover::before {
      opacity: 1;
    }

    .area-search {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 15px;
      height: fit-content;
      .search {
        border: 2px solid black;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        height: 35px;
        align-items: center;
        width: 43%;
        padding-right: 8px;
        background-color: #dcdcdc;
        input {
          border: none;
          width: 95%;
          height: 100%;
          padding-left: 15px;
          border-radius: 20px;
          background-color: #dcdcdc;
          font-size: 18px;
          font-weight: 400;
          font-family: "Righteous", cursive;
          color: black;
        }
        input::placeholder {
          font-size: 18px;
          font-weight: 400;
          font-family: "Righteous", cursive;
          color: black;
        }
        span {
          width: 10%;
          font-size: 30px;
          margin-left: 10px;
          margin-top: 10px;
          color: black;
        }
      }
    }
    .contacts-painel {
      width: 100%;
      padding: 5%;
      padding-bottom: 15px;
      background-color: transparent;
      height: 80%;

      ul {
        overflow-y: auto;
        height: 100%;
      }

      li {
        display: flex;
        list-style: none;
        border: none;
        border-radius: 20px;
        padding-left: 15px;
        height: 115px;
        align-items: center;
        margin-top: 25px;
        position: relative;
        width: 90%;
        background-color: white;
        opacity: 1;

        img {
          width: 80px;
          border-radius: 50%;
          height: 80px;
          box-shadow: -5px 5px 5px grey;
        }

        .btn-contact {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;

          button {
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            border: 1px solid;
            position: relative;
          }
          .delete::before {
            content: "Delete";
            position: absolute;
            top: -2px;
            left: 55px;
            transform: translateX(-50%);
            background-color: white;
            color: black;
            font-size: 15px;
            font-weight: 400;
            font-family: "Righteous", cursive;
            padding: 5px;
            border-radius: 5px;
            opacity: 0;
          }

          .delete:hover::before {
            opacity: 1;
          }
          .edit::before {
            content: "Edit";
            position: absolute;
            top: -2px;
            left: 55px;
            transform: translateX(-50%);
            background-color: white;
            color: black;
            font-size: 15px;
            font-weight: 400;
            font-family: "Righteous", cursive;
            padding: 5px;
            border-radius: 5px;
            opacity: 0;
          }

          .edit:hover::before {
            opacity: 1;
          }
          button:hover {
            transform: scale(1.2);
          }
        }
      }
      ul::-webkit-scrollbar {
        width: 5px;
      }

      ul::-webkit-scrollbar-track {
        background-color: #f1f1f1;
      }

      ul::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 20px;
      }

      ul::-webkit-scrollbar-thumb:hover {
        background-color: #555;
      }
      .area-info-contact {
        margin-left: 20px;

        h4 {
          font-size: 30px;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 600;
          color: var(--color-gray-800);
        }

        .info-contact {
          display: flex;

          .allign {
            display: flex;
            flex-direction: column;
          }
          p {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--color-gray-800);
          }
          .text-info {
            font-size: 1.1rem;
            color: var(--color-gray-700);
          }
        }
      }
    }
  }

  @media (min-width: 1100px) {
    .main-choice {
      max-width: 900px;
      height: 90%;
      background: rgba(51, 51, 51, 0.6);
      border-radius: 10px;
      backdrop-filter: blur(5px);
    }
    .painel-header {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      position: relative;

      h3 {
        position: absolute;
        top: 20px;
        left: 40%;
        font-size: 40px;
        font-family: "Righteous", cursive;
        background-image: linear-gradient(to right, #d8315b 0%, #072ac8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bolder;
      }
    }
    .create {
      width: 50px;
      height: 50px;
      margin-top: 20px;
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      border-radius: 4px;
      border: none;
      background-color: transparent;
      color: var(--color-gray-300);
    }

    .create:hover {
      transform: scale(1.5);
    }
    .create::before {
      content: "Create";
      position: absolute;
      top: 40px;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      color: black;
      font-size: 15px;
      font-weight: 600;
      font-family: "Righteous", cursive;
      padding: 5px;
      border-radius: 5px;
      opacity: 0;
    }

    .create:hover::before {
      opacity: 1;
    }

    .area-search {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 40px;
      height: fit-content;
      .search {
        border: 2px solid black;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        height: 45px;
        align-items: center;
        width: 43%;
        padding-right: 8px;
        background-color: #dcdcdc;
        input {
          border: none;
          width: 90%;
          height: 100%;
          padding-left: 15px;
          border-radius: 20px;
          background-color: #dcdcdc;
          font-size: 18px;
          font-weight: 400;
          font-family: "Righteous", cursive;
          color: black;
        }
        input::placeholder {
          font-size: 18px;
          font-weight: 400;
          font-family: "Righteous", cursive;
          color: black;
        }
        span {
          width: 10%;
          font-size: 30px;
          margin-left: 10px;
          margin-top: 10px;
          color: black;
        }
      }
    }

    .contacts-painel {
      width: 100%;
      padding: 5%;
      padding-bottom: 15px;
      background-color: transparent;
      height: 75%;

      ul {
        overflow-y: auto;
        height: 100%;
      }

      li {
        display: flex;
        list-style: none;
        border: none;
        border-radius: 20px;
        padding-left: 15px;
        height: 115px;
        align-items: center;
        margin-top: 25px;
        position: relative;
        width: 90%;
        background-color: white;
        opacity: 1;

        img {
          width: 80px;
          border-radius: 50%;
          height: 80px;
          box-shadow: -5px 5px 5px grey;
        }

        .btn-contact {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;

          button {
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            border: 1px solid;
            position: relative;
          }
          .delete::before {
            content: "Delete";
            position: absolute;
            top: -2px;
            left: 55px;
            transform: translateX(-50%);
            background-color: white;
            color: black;
            font-size: 15px;
            font-weight: 400;
            font-family: "Righteous", cursive;
            padding: 5px;
            border-radius: 5px;
            opacity: 0;
          }

          .delete:hover::before {
            opacity: 1;
          }
          .edit::before {
            content: "Edit";
            position: absolute;
            top: -2px;
            left: 55px;
            transform: translateX(-50%);
            background-color: white;
            color: black;
            font-size: 15px;
            font-weight: 400;
            font-family: "Righteous", cursive;
            padding: 5px;
            border-radius: 5px;
            opacity: 0;
          }

          .edit:hover::before {
            opacity: 1;
          }
          button:hover {
            transform: scale(1.2);
          }
        }
      }
      ul::-webkit-scrollbar {
        width: 5px;
      }

      ul::-webkit-scrollbar-track {
        background-color: #f1f1f1;
      }

      ul::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 20px;
      }

      ul::-webkit-scrollbar-thumb:hover {
        background-color: #555;
      }
      .area-info-contact {
        margin-left: 20px;

        h4 {
          font-size: 30px;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 600;
          color: var(--color-gray-800);
        }

        .info-contact {
          display: flex;
          gap: 28px;

          .allign {
            display: flex;
            flex-direction: column;
          }
          p {
            font-size: 15px;
            font-weight: 600;
            color: var(--color-gray-800);
          }
          .text-info {
            font-size: 21px;
            color: var(--color-gray-700);
          }
        }
      }
    }
  }
`;
