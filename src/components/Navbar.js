import React, {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import MenuIcon from "@material-ui/icons/Menu"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@mui/material/useMediaQuery"

import {
    List,
    ListItem,
    ListItemText,
    Collapse
} from "@mui/material"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    }
}))
export default function Navbar() {
    const classes = useStyles()
    const small = useMediaQuery("(max-width:600px)")
    const full = useMediaQuery("(min-width:600px)")
    

}