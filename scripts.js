$( document ).ready(function() {

		var gameName = getCookie('gameName');
		var time = getCookie('nextPlay');
		var appId = getCookie('appid');

    if(getCookie('nextPlay')) {
        $('#timerday').css('background-color', '#daa122');
        nextDay();
        $('.buttonblock').hide();
        $('.winContainer .left').show();
        $('.winContainer .pcc').show();
        $('.winContainer .mobb').show();

        $('.winContainer .right').show();
        $('#gamename').html(gameName);
        $('.winContainer .image img').attr('src','https://steamcdn.io/economy/image/'+ appId +'/image.png');

        if((new Date().getTime() - getCookie('nextPlay')) > 1800000) {
            deleteCookie('gameName');
            deleteCookie('appid');
            deleteCookie('nextPlay');
            $('.buttonblock').show();
            $('.winContainer .left').hide();
            $('.winContainer .pcc').hide();
            $('.winContainer .mobb').hide();
            $('.winContainer .right').hide();
            $('#timerday').html('Available');
            $('#timerday').css('background-color', '#83b34f');
        } else {
        }

    }


});

var wingames = [
    {name: "M4A1-S | Cyrex", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITSj3lU8Pp9g-7J4cKk3AC2_0NpYDyhI4XHdlc6Zg7Y-1O2lLy9hcO0vJWdwSdhsnYnt3aOgVXp1hcjOJd2/240fx180f"},
    {name: "M4A4 | Evil Daimyo", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09mgnYy0k_b9PqLeqWdY781lxOqTpdT3iQbh-RBsN2H6JITGI1c3ZluB_FK6kry51J-4uZjJwSNkuyY8pSGKLxf1Y6o/240fx180f"},
    {name: "USP-S | Overgrowth", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5OCkvDxDLnDl31e18l4jeHVu9mk31bs8hZrazulcY7HI1I5MgnRqwDsxru705fovJ-YzHQxuHRz53nD30vgBAkSFQ0/240fx180f"},
    {name: "M4A4 | Griffin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09uknYaNnvnLP7LWnn8fupAkiO2Zporx2wDnrhJkNmGnLILEc1I7MlHU81S3le69h5Dv7cuYnGwj5HeWs6qHHw/240fx180f"},
    {name: "AWP | Oni Taiji", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJK7dK4jYG0m_7zO6-fk28C65V0ibnEoon00AHj80Jla2qlI9fHIwNqYl3YqVO4wb3pgpK17oOJlyWSYujjQg/240fx180f"},
    {name: "Five-SeveN | Hyper Beast", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTZj3tU-sd0i_rVyoD8j1yg5RduNj_yLNSQdVQ-M1DS-1e8xbvrh56_vMiczSFnvXUg4X6IyxGzhh5SLrs4rcs7-T4/240fx180f"},
    {name: "AWP | Electric Hive", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PvBZzh94NWxnJTFxaasauKEzm4D6cNw2OqXrI_zi1Cw80NrYmv3d4SSe1c-NF7U_1e8xPCv28G2xAySNA/240fx180f"},
    {name: "Glock-18 | Wasteland Rebel", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJg4GYg_L4MrXVqXlU6sB9teXI8oThxgbs_0tlajihJ4PAd1c8aAvWrwXsx-q9h8fqvZTNmic2uylz5SqJlxypwUYbBM1DXmo/240fx180f"},
    {name: "M4A1-S | Mecha Industries", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDLbUlWNQ18x_jvzS4Z78jUeLpxo7Oy3tJo-ScVVoZAuB8wW_xOft0ZC6uZ-bn3Nn63Mq7C2Oyx2yiBsYarNv1OveFwt9ELX6XQ/240fx180f"},

]

var players = [
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf1OD3dShD4N6zhoWfg_bnDLjelHlQ18h0juDU-MKkjgyx-0Q4NTihJYaXJ1RqNVyErwDtl7ruhsfvvpydznpgvCgj4X7dgVXp1nJHTMyd/260fx194f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlYyHqP76DLfYkWNFpsEi2-jErNvzjQDg8xFpZmmgctOVdFI4YF-EqwC9xOnq1pG76ZWayyN9-n51Ejfp6Vw/140fx105f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09izh4-HluPxDKjBl2hU18l4jeHVu93zi1aw_hZtYW2icYHGdwJtN1nSr1foxui8gZW96ZvPznMyvSMq4XrD30vgc83x0v4/240fx180f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PvBZzh94NWxnJTFxaasauKEzm4D6cNw2OqXrI_zi1Cw80NrYmv3d4SSe1c-NF7U_1e8xPCv28G2xAySNA/240fx180f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3di59_oSJmIyKmvb3MrXfmWVu5Mx2gv2P9Imhi1Hs_0RqZzv3LI-XIwRrMFqE-Qe3l-6-08W5u53LyiRk6HRx7WGdwUJ7o0v99A/260fx194f"},
    {name: "Skin", appid: "fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56IeSKOC5YZg3FBLJhUfA-_R3hR3JisMMwVoXvpeNWKl-6tYvAYOQoMNwdSZbYDvCEb1-pu0850qVcep2X4HS4l-v7zTM/260fx194f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulReQ0HdUuqkw9aDAhJgIAVaobW3IDho3P_HP2xGv43kx9ePkqDya-rXw24G7J1zjriQoIj32g3j-EtkMGr2cYHBdg4gIQaHBT8fYHw/140fx105f"},
    {name: "Skin", appid: "fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5_MeKyPDJYcwn9BaROXeE-8Qb_DBgi7cZgW9S9yLYDLVWq6ZyVNbklN9hETsOCDPDSbw_46Bo_hKAJKZDbpn-61C_gP2wNXxru-G0MhqbZ7X5MJO8p/260fx194f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLP7LWnn8f7p0gjrnDpdvxi1Xn80JqYGygLI_DdQJsMgyC_AO4xb_p0ce66ZXImmwj5Hei5N5mVw/120fx90f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITSj3lU8Pp9g-7J4cKk3AC2_0NpYDyhI4XHdlc6Zg7Y-1O2lLy9hcO0vJWdwSdhsnYnt3aOgVXp1hcjOJd2/240fx180f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09SzmIyNnuXxDLfYkWNFpsEi3L6UrdiljFXlr0VsNmj6dteXdFBtYFnV-VjryO3qhMe86c7BwHB9-n51JK1M_qQ/240fx180f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PfacDpN4uOmzdC0leX1JbTummJW4NE_2LmR8Iqg2Qe1rkFlMjz0IoOUI1I9N1vRr1e2k-u9hJ66vprAzHVh7D5iuyg1KAc3xw/120fx90f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJM6dO4m4mZqPv9NLPFqWdQ-sJ0xOqU8Yig31Ls_kZpN2jwd4KUJAY2YVrUrFO5kOfshJK8u5mbz3tr63Y8pSGKcgFBR7U/240fx180f"},
    {name: "Skin", appid: "fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56P7fiDzRyTQXJVfdhX_o45gnTBCI24dJuGtay8-MEew_n4YCTNOMuNNhLF8GDU6KDNFipvEg-gfRfLp2PpXi82Hz3ejBdOj7r2Ww/140fx105f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_ummJW4NE_3rnHpdujjgK28kE5Y2Gid9WWdQ44YVHS-VS9wr--jJG6tJrAzCBh6D5iuyjdE47G3Q/240fx180f"},
    {name: "Skin", appid: "fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKOC5YcAjDDJ9NVfgq-A3TBCI24dJuGoPlo-JUeQS84NGSMuQvOdBISpKBU6TUMwqruxo50fdcfcaAqHnpj3z3ejBdzQVSDJ4/140fx105f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08y5nY6fqPP9ILrDhGpI18l4jeHVu4702FLiqBA4MDv6JYHEIwRsNQ3Srwe-wu_t1pO76JrPyiNlu3Qh4X7D30vg5znacIE/240fx180f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhh3szKcDBA49OJnpWFkPvxDLfYkWNFppwpie2Rp9_w0VDm-UNrMj30IoPHdAY-M1rY-1K7w7291pO8vJTJzHN9-n51xLwwH8g/140fx105f"},
    {name: "Skin", appid: "fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz54LrTgMQhkZzvBG_cLXco5_An_HS4o7dVcWdKy_q4LZw69vdTBYLAkZopJHJSDCPGGZw2puxk9ifIJLJbfpSO61Hm_PTtfChb1ujVTRKDBiB4/260fx194f/140fx105f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UBta2zzLYWSdAA_aFvVq1G4w7rq05Dq7cvMmHM1uiJ0sS3Un0e_hxlSLrs4IEpMMwQ/240fx180f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh-TLPbTYhFRc7cF4n-SP9o2mjA3hqBJlZGGmdYCRegY-ZwmFrFC5xufuhpK5vcuayXYxsyVz4GGdwUJGz70rjQ/140fx105f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITCmX5d_MR6j_v--YXygED6_0pvaj31LdTBdA8_NVzS-wLvyL3o0ZC5uZWbzXRjsihx7S6Omha2hgYMMLLrQAonqQ/240fx180f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PTbTjlH7du6kb-GkvT8MoTdn2xZ_It02rHCpIrx0APk8hVqMWr1LI-QdFU6YAvW8gO_xr3ugMDqup7Mz3FmpGB8st6VkheS/140fx105f"},
    {name: "Skin", appid: "fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58OOy2OwhkZzvFDa9dV7g2_Rn5DDQx7cl3a9qz87ITJBLmsoHEYbAtMNEeF8iBU_CFNVqrv09sgqJfKsTbqCu5iyrob2deCBC65Ctazz387ae9/140fx105f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDKjZl39F7ddOhuDG_Zi7jgCw_0trMDulLYOTJ1Q_YgnV-lTsyeftg8W06p2fz3Ew6CMk5XuPnAv330_ASVB-pQ/140fx105f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJK7dK4jYG0m_7zO6-fk28C65V0ibnEoon00AHj80Jla2qlI9fHIwNqYl3YqVO4wb3pgpK17oOJlyWSYujjQg/120fx90f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS092lnYmGmOHLPr7Vn35cpsB0j7qZoNn32QW2-xJoYGHzd9SWdwQ5ZgvYrFO9kOrn08XouJ_KyCR9-n51cFMXX4s/140fx105f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLILTumGJW4NFOhuDG_Zi7jASw_RBuNmyiJo-TdAU_NwzQ_1K_wOntg5C_uJTAyXtmuiMitn2PnQv330_dJ3i8aA/240fx180f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRd4cJ5nqeWrdn02Ay1rhA4amD1cNXDJFU4N1vY-Va9l7q8gpW6tZqcz3Ji6yZz-z-DyDzjuIse/240fx180f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j_OrfdqWhe5sN4mOTE8bP4jVC9vh5yYGr7IoWVdABrYQ3Y-1m8xezp0ZTtvpjNmHpguCAhtnndzRW10x9KOvsv26KUE4Zjjg/260fx194f"},
    {name: "Skin", appid: "fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKOC5Yeg3UBJ9TWfEz4QWiUXJl6cY2UNLl9e4HcVm-tobFOuIvMNBPF8TRDv6DZ1v84ks91aJae4vJ_n0-dvDrog/260fx194f"},
    {name: "Skin", appid: "fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59PfWwIzJxdwr9ArVhWvws8RvpHyI818ViWta49oQLLFi28d_YYbB-N9tJHpGBXvKAYV-p7koxh_RUepyBqH662CS7bj1cWEHjrD1WmvjH5OXENuHjvw"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJg4GYg_L4MrXVqXlU6sB9teXI8oThxgbs_0tlajihJ4PAd1c8aAvWrwXsx-q9h8fqvZTNmic2uylz5SqJlxypwUYbBM1DXmo/120fx90f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDLbUlWNQ18x_jvzS4Z78jUeLpxo7Oy3tJo-ScVVoZAuB8wW_xOft0ZC6uZ-bn3Nn63Mq7C2Oyx2yiBsYarNv1OveFwt9ELX6XQ/120fx90f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-Gw_alfqjul2dd59xOhfvA-4vwt1i9rBsofWHxdtKXdQRqYVrV_Ae_xru9jZC8vpSYwSZiviEjtnuImkfhg0ofZ7ZxxavJioUkVPc/240fx180f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDL_UlWJc6dF-mNbM8Ij8nVn6rhFtYmyiJ4SWJAc4NQvS8ge9xb3v1J65usmbnCY17CMr5CvYmkG1hgYMMLJencFQUA/260fx194f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LP7LWnn8fvsAo0u-R9trzi1bs-hI9NjqiJIXGdwBrNAzW8li4w7jqhcW16cvAzWwj5HdQlBgtMw/240fx180f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTitH_si_k4-0m_7zO6-fzj5QuZN03uvH99T32Ve3_UBlYDqiIdKVIQBqYgnRr1frx-7thpW-v4OJlyUwDcxXZA/120fx90f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09izh4-HluPxDKjBl2hU18h0juDU-MKt0Fex-kpkMTumJobEdlU7ZFCF-AO4wOnv0Mft752azyRh7CZ2ty2MgVXp1k8SoycS/260fx194f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD09SvhIWZlfL1IK_ummJW4NE_j-qXoYmkiVXm-Rc_ZGGldYCccFc8Y17Zq1i3x-jmjZK-7pTImiFl7D5iuyh56VPybg/240fx180f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-vloWZlOX7MITdn2xZ_Isi07_F8N3x3Qfj8kQ6a2H0IdKXdgRqYA2C-VLqxLznhMLv6Z-bm3o2pGB8sr9Yt3dq/240fx180f"},
    {name: "Skin", appid: "fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rZrblDzRyTRSQVPBhUfQ08AngCBg_7cNqQdr48ukHLA3m4IaQMLYvNdxEG8ODDPLSYAj6vk0606QJepaIoCK92CztPnBKBUTWIFz05A/260fx194f"},
    {name: "Skin", appid: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3YjVD_teJmImMn-O6Y-uJxzlSupVw0rCXrdii2AXnqUM9YWDyJ9eUdABoZwqB-FO-kOzqjYj84sqeBRQLNw/120fx90f"}
];
var caseScrollAudio = new Audio();
caseScrollAudio.src = "audio/click.mp3";
caseScrollAudio.volume = 0.3;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// scroll
var x, xVel, prevTime, kVar;
var xAcc = 0.46;

// scroll
function scroll() {
    var curSec = (new Date).getSeconds();
    var curTime = (new Date).getTime();
    var timeDiff = (curTime - prevTime) / 60;
    var xPrev = x;
    x -= xVel * timeDiff;
    xVel -= xAcc * timeDiff;
    if (Math.abs(x) % 103 < Math.abs(xPrev) % 103) {
        caseScrollAudio.pause();
        caseScrollAudio.currentTime = 0;
        caseScrollAudio.play();
    }
    if (xVel < 0) {
        xVel = 0;
    }
    prevTime = curTime;
}

function setupCookies(gameName, appId) {
    setCookie('nextPlay', new Date().getTime());
    setCookie('gameName', gameName);
    setCookie('appid', appId);
}

function nextDay() {
    $('#timerday').countdown(+(getCookie('nextPlay')) + 86400000, function (event) {
         $(this).html(event.strftime('Остлось %H:%M:%S'));
        seconds = +(event.strftime('%M') * 60) + +event.strftime('%S');
    });

    $('#timer').countdown(+(getCookie('nextPlay')) + 1800000, function (event) {
        $(this).html(event.strftime('У вас %H:%M:%S'));
    });
}

function startTimer(countdown) {
    $('#timer').countdown(+(new Date) + countdown, function (event) {
        $(this).html(event.strftime('У вас %H:%M:%S'));
    });
}

var online = setInterval(function(){
    $('#onlineCount').html(getRandomInt(210,220));
},6000);

function addWinner(data) {
	$('.buttonblock button').attr('disabled', 'disabled');
    //players.push({uname: 'rakal na pnevme', avatar: 'http://cdn.edgecast.steamstatic.com/steam/apps/-fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz54LrTgMQhkZzvBG_cLXco5_An_HS4o7dVcWdKy_q4LZw69vdTBYLAkZopJHJSDCPGGZw2puxk9ifIJLJbfpSO61Hm_PTtfChb1ujVTRKDBiB4/260fx194f/140fx105f/header.jpg?t=1518656270'});
    //players.push({uname: 'rakal na stoke', avatar: 'http://cdn.edgecast.steamstatic.com/steam/apps/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mr-ZkvPLPu_Qx3hu5Mx2gv2P8I-g0VHtqUNlNmimLdCRdFdoYFCErwC4xLu6jJbpuc-dnydq73Jw5GGdwULhEbgmIQ/140fx105f/header.jpg?t=1518656270'});

    players_count = players.length;
    if (players_count < 100) {
        for (i = players_count; i <= 100; i++) {
            players.push(players[getRandomInt(0, players_count - 1)]);
        }
    }

    var el = '';
    players[73] = data;
    players.forEach(function (item, index) {
        el += '<div class="item">' +
                '<img src="https://steamcdn.io/economy/image/'+ item.appid +'/image.png" alt="">' +
            '</div>';
    });
    $('.carusel').css("margin-left", "0px");
    $('.carusel').html(el);
    //$("#scrollerContainer").fadeIn(1200);
    b = $('.carusel .item').outerWidth(true);
    //alert(b);
    c = $('#aCanvas').width() / 2;
    a = (b * 73) - c + getRandomInt(0, b);
    //startTimer(14 * 1000);

    $('.carusel').animate({marginLeft: -1 * a}, {

        duration: 10000,
        easing: 'easeOutQuint',
        start: function () {
            kVar = Math.floor(Math.random() * 20) + 10;
            kVar += Math.random() * 0.75 + 0.0675;
            x = 372 / 2; //x = 0;
            xVel = Math.sqrt((kVar * 124.5 + (372 / 2)) * xAcc * 2);
            prevTime = (new Date).getTime();
            handle = setInterval(scroll, 1);
        },
        complete: function () {
            clearInterval(handle);
            setupCookies(data.name,data.appid);
            $('.buttonblock').fadeOut(1000);
            $('#gamename').html(data.name);
            nextDay();
            $('.winContainer .image img').attr('src','https://steamcdn.io/economy/image/'+ data.appid +'/image.png');

            $('.winContainer .pcc').fadeIn(900);
            $('.winContainer .mobb').fadeIn(900);
            $('.winContainer .left').fadeIn(900);
            $('.winContainer .right').fadeIn(900);


        }
    });

}
