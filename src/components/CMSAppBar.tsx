import React from "react";
import {
    AppBar,
    Avatar,
    Box,
    Breadcrumbs,
    Button,
    Chip,
    createStyles,
    emphasize,
    Hidden,
    IconButton,
    Link,
    makeStyles,
    Slide,
    Theme,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link as ReactLink } from "react-router-dom";
import {
    useAuthContext,
    useBreadcrumbsContext,
} from "../contexts";
import ErrorBoundary from "./ErrorBoundary";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2)
        },
        breadcrumb: {
            backgroundColor: theme.palette.grey[100],
            height: theme.spacing(3),
            color: theme.palette.grey[800],
            fontWeight: theme.typography.fontWeightMedium,
            "&:hover, &:focus": {
                cursor: "pointer",
                backgroundColor: theme.palette.grey[300]
            },
            "&:active": {
                boxShadow: theme.shadows[1],
                backgroundColor: emphasize(theme.palette.grey[300], 0.12)
            }
        }
    })
);


interface CMSAppBarProps {
    title: string;
    handleDrawerToggle: () => void,
    /**
     * A component that gets rendered on the upper side of the main toolbar
     */
    toolbarExtraWidget?: React.ReactNode;
}

export const CMSAppBar: React.FunctionComponent<CMSAppBarProps> = ({
                                                                       title,
                                                                       handleDrawerToggle,
                                                                       toolbarExtraWidget
                                                                   }) => {

    const classes = useStyles();
    const { t } = useTranslation();

    const breadcrumbsContext = useBreadcrumbsContext();
    const { breadcrumbs } = breadcrumbsContext;

    const authController = useAuthContext();

    return (

        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
            <AppBar position={"relative"} elevation={2}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Hidden smDown>
                        <Box mr={3}>
                            <Link
                                key={`breadcrumb-home`}
                                color="inherit"
                                component={ReactLink}
                                to={"/"}>
                                <Typography variant="h6" noWrap>
                                    {title}
                                </Typography>
                            </Link>
                        </Box>
                    </Hidden>

                    <Box mr={2}>
                        <Breadcrumbs
                            separator={<NavigateNextIcon
                                htmlColor={"rgb(0,0,0,0.87)"}
                                fontSize="small"/>}
                            aria-label="breadcrumb">
                            {breadcrumbs.map((entry, index) => (
                                <Link
                                    key={`breadcrumb-${index}`}
                                    color="inherit"
                                    component={ReactLink}
                                    to={entry.url}>
                                    <Chip
                                        classes={{root: classes.breadcrumb}}
                                        label={entry.title}
                                    />
                                </Link>)
                            )
                            }
                        </Breadcrumbs>
                    </Box>

                    <Box flexGrow={1}/>

                    {toolbarExtraWidget &&
                    <ErrorBoundary>
                        {
                            toolbarExtraWidget
                        }
                    </ErrorBoundary>}

                    <Box p={1} mr={1}>
                        {authController.loggedUser && authController.loggedUser.photoURL ?
                            <Avatar
                                src={authController.loggedUser.photoURL}/>
                            :
                            <Avatar>{authController.loggedUser?.displayName ? authController.loggedUser.displayName[0] : "A"}</Avatar>
                        }
                    </Box>

                    <Button variant="text"
                            color="inherit"
                            onClick={authController.signOut}>
                        {t("logout")}
                    </Button>

                </Toolbar>
            </AppBar>
        </Slide>
    );
};
