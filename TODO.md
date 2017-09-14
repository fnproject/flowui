# TODO
* Better display for thenCompose   - show node as active with trailer perhaps? 
* adjust zoom levels (set pxPerMs in graphTimeline
* Show when errors have occurred in zoom line (Like chrome timeline)
* Fix vertical scrollbar update when scrolling down  
* Code locations (see completer)
* Deal with parent heritage -  Make "the node that created me "  a dep - this will fix most remeaining vertical density issues.
* Show more details of Http Requests (although security issues around headers possibly)
* Show some info about size of closures and data 
* Improve display of interstitial erros 


# cccRaZZyy IDEAS :
*  Link  code locations to to Github???? (fn CrAzY)
*  Use java magic to introspect serialized data  - "what is in this closure "

# DONE:

* Show delay as pending rather than active when waiting (i.e. when node is composed, replace pending node with other node )
* Show call logs for main fn :  13:1:1.144
* Correct time format
* Show active time of events
* Time line: live scrolling mode
    - Quick open new graph (i.e. checkbox - open next graph)
    - show timeline scrolling from right
    - pending nodes animated (done?)
    - pending nodes are flush against right hand boundary (could be done bu

* Time line : add guage at bottom
* Zoom Line:
   - Add window overlay
   - show errors
   - show times

* More detail:
                  - Fetch call logs to show Fn start/create times
